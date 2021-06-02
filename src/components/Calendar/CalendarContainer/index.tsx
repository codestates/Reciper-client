import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import useSocket from '../../../hooks/useSocket';
import dayjs, { Dayjs } from 'dayjs';
dayjs.extend(weekOfYear);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

import { getSocketData, kanbanDataSelector } from '../../../reducer/kanban';
import { taskDataType } from '../../../types/types';

import {
	CalendarWrap,
	Container,
	Day,
	DayName,
	DaysWrap,
	DirectionDate,
	DirectionLeftBtn,
	DirectionRightBtn,
	DirectionWrap,
	Week,
	DayDate,
} from './styles';

const CalendarContainer = (): JSX.Element => {
	const dispatch = useDispatch();
	const { taskItems } = useSelector(kanbanDataSelector);
	const { projectUrl, part } = useParams<{ projectUrl: string; part: string }>();
	const [socket, connectSocket, disconnectSocket] = useSocket(projectUrl, 'kanban');
	const [connect, setConnect] = useState<boolean>(false);

	const [calendarData, setCalendarData] = useState<Dayjs[][]>([]);
	const [taskByDate, setTaskByDate] = useState<{ [key: string]: taskDataType[] }>({});
	const [calendarCheck, setCalendarCheck] = useState<boolean>(false);
	const [addNumber, setAddNumber] = useState<number>(0);
	const today = dayjs().add(addNumber, 'month');
	let date = dayjs().add(addNumber, 'month');
	const startWeek = date.startOf('month').week();
	const endWeek = date.endOf('month').week() === 1 ? 53 : date.endOf('month').week();
	const blankWeek = endWeek - startWeek === 4 ? endWeek + 1 : endWeek;
	date = date.startOf('week').week(startWeek);

	connectSocket();

	useEffect(() => {
		const calendarDataFrame: Dayjs[][] = [];
		const taskByDateFrame: { [key: string]: taskDataType[] } = {};

		for (let week = 0; week <= blankWeek - startWeek; week++) {
			calendarDataFrame.push(
				Array(7)
					.fill(0)
					.map((_, index) => {
						if (week === 0 && index === 0) {
							taskByDateFrame[date.format('YYYYMDD')] = [];
							return date;
						}

						date = date.add(1, 'day');
						taskByDateFrame[date.format('YYYYMDD')] = [];
						return date;
					}),
			);
		}

		Object.values(taskItems).map(task => {
			if (task.startDate || task.endDate) {
				const startDate = Number(
					`${new Date().getFullYear()}${task.startDate.split('월')[0]}${task.startDate.split(' ')[1].slice(0, 2)}`,
				);
				const endDate = Number(
					`${new Date().getFullYear()}${task.endDate.split('월')[0]}${task.endDate.split(' ')[1].slice(0, 2)}`,
				);
				const targetDays = endDate - startDate;

				for (let i = 0; i <= targetDays; i++) {
					if (taskByDateFrame[String(startDate + i)]) {
						taskByDateFrame[String(startDate + i)] = [...taskByDateFrame[startDate + i], task];
					}
				}
			}
		});

		setTaskByDate({ ...taskByDateFrame });
		setCalendarData([...calendarDataFrame]);
		setCalendarCheck(true);
	}, [addNumber, taskItems]);

	useEffect(() => {
		if (calendarCheck) {
			console.log(blankWeek);
			console.log(calendarData);
			console.log(taskByDate);
		}
	}, [calendarData, taskByDate, calendarCheck]);

	useEffect(() => {
		socket?.emit('joinPart', part);

		return () => {
			socket?.emit('leavePart', part);
		};
	}, [connect, part]);

	useEffect(() => {
		socket?.on('getKanbanData', data => {
			dispatch(getSocketData(data));
		});

		socket?.on('connection', () => {
			setTimeout(() => {
				setConnect(true);
			}, 100);
		});

		return () => {
			disconnectSocket();
		};
	}, []);

	return (
		<Container>
			<DirectionWrap>
				<DirectionLeftBtn onClick={() => setAddNumber(addNumber => addNumber - 1)} />
				<DirectionDate>{`${date.format('YYYY')} ${today.format('MM')}월`}</DirectionDate>
				<DirectionRightBtn onClick={() => setAddNumber(addNumber => addNumber + 1)} />
			</DirectionWrap>
			<DaysWrap>
				<DayName>일</DayName>
				<DayName>월</DayName>
				<DayName>화</DayName>
				<DayName>수</DayName>
				<DayName>목</DayName>
				<DayName>금</DayName>
				<DayName>토</DayName>
			</DaysWrap>
			<CalendarWrap>
				{calendarData.map((week, index) => (
					<Week key={index}>
						{week.map((day, index) => {
							const currentMonth = date
								.startOf('month')
								.week(startWeek + 2)
								.format('M');

							console.log(Number(day.format('M')), currentMonth);
							const notThisMonth = Number(day.format('M')) === Number(currentMonth);

							return (
								<Day className={notThisMonth ? '' : 'notThisMonth'} key={index}>
									<DayDate>{day.format('DD')}</DayDate>
									{taskByDate[day.format('YYYYMDD')].map((task, index) => (
										<p key={index}>{task.taskTitle}</p>
									))}
								</Day>
							);
						})}
					</Week>
				))}
			</CalendarWrap>
		</Container>
	);
};

export default CalendarContainer;
