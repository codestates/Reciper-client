import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import dayjs, { Dayjs } from 'dayjs';
dayjs.extend(weekOfYear);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

import ViewCalendar from '../ViewCalendar';
import ControlCalender from '../ControlCalendar';

import {
	deleteTaskItem,
	editTaskDetail,
	getSocketData,
	itemEditBlock,
	kanbanDataSelector,
	socketAddTaskItem,
} from '../../../reducer/kanban';
import useSocket from '../../../hooks/useSocket';

import { taskDataType } from '../../../types/types';

import {
	CalendarWrap,
	Container,
	DayName,
	DaysWrap,
	DirectionDate,
	DirectionLeftBtn,
	DirectionRightBtn,
	DirectionWrap,
} from './styles';

const CalendarContainer = (): JSX.Element => {
	const dispatch = useDispatch();
	const { taskItems } = useSelector(kanbanDataSelector);
	const { projectUrl, part } = useParams<{ projectUrl: string; part: string }>();
	const [socket, connectSocket, disconnectSocket] = useSocket(projectUrl, 'kanban');
	const [connect, setConnect] = useState<boolean>(false);

	const [calendarData, setCalendarData] = useState<Dayjs[][]>([]);
	const [taskByDate, setTaskByDate] = useState<{ [key: string]: taskDataType[] }>({});
	const [taskByPosition, setTaskByPosition] = useState<{ [key: number]: taskDataType[] }>({});
	const [addNumber, setAddNumber] = useState<number>(0);

	const today = dayjs().add(addNumber, 'month');
	let date = dayjs().add(addNumber, 'month');
	const startWeek = date.startOf('month').week();
	const endWeek = date.endOf('month').week() === 1 ? 53 : date.endOf('month').week();
	const blankWeek = endWeek - startWeek === 4 ? endWeek + 1 : endWeek;
	date = date.startOf('week').week(startWeek);

	// 소켓 연결
	connectSocket();

	const currentFormatYYYYMMDD = useCallback((start: string, end: string): [number, number, number] => {
		const startDate = Number(start.split('-').join('')) || Number(end.split('-').join(''));
		const endDate = Number(end.split('-').join('')) || Number(start.split('-').join(''));
		const yearDate = start ? Number(start.split('-')[0]) : Number(end.split('-')[0]);

		return [startDate, endDate, yearDate];
	}, []);

	const taskItemSort = useCallback((): taskDataType[] => {
		return Object.values(taskItems).sort((a, b): number => {
			const [aStartDate, aEndDate] = currentFormatYYYYMMDD(a.startDate, a.endDate);
			const [bStartDate, bEndDate] = currentFormatYYYYMMDD(b.startDate, b.endDate);

			if (aStartDate === bStartDate && aEndDate < bEndDate) {
				return -1;
			}

			if (aStartDate < bStartDate) {
				return -1;
			}

			return 0;
		});
	}, [taskItems]);

	useEffect(() => {
		socket?.emit('joinPart', part);

		return () => {
			socket?.emit('leavePart', part);
		};
	}, [connect, part]);

	useEffect(() => {
		socket?.on('connection', () => {
			setTimeout(() => {
				setConnect(true);
			}, 100);
		});

		socket?.on('getKanbanData', data => {
			dispatch(getSocketData(data));
		});

		socket?.on('editTaskItem', data => {
			dispatch(editTaskDetail(data));
		});

		socket?.on('deleteTaskItem', data => {
			dispatch(deleteTaskItem(data));
		});

		return () => {
			disconnectSocket();
		};
	}, [socket]);

	useEffect(() => {
		const calendarDataFrame: Dayjs[][] = [];
		const taskByPositionFrame: { [key: number]: taskDataType[] } = {};
		const taskByDateFrame: { [key: string]: taskDataType[] } = {};
		const taskItemSorted = taskItemSort();

		// 달력을 그릴 데이터와 Task를 넣어 줄 틀을 만듬
		for (let week = 0; week <= blankWeek - startWeek; week++) {
			if (week === 0) {
				taskByPositionFrame[Number(date.format('YYYYMMDD'))] = [];
			} else {
				taskByPositionFrame[Number(date.format('YYYYMMDD')) + 1] = [];
			}

			calendarDataFrame.push(
				Array(7)
					.fill(0)
					.map((_, index) => {
						if (week === 0 && index === 0) {
							taskByDateFrame[date.format('YYYYMMDD')] = [];
							return date;
						}

						date = date.add(1, 'day');
						taskByDateFrame[date.format('YYYYMMDD')] = [];

						return date;
					}),
			);
		}

		// Day마다 Task 정보를 포함 시켜줌. ( Day 클릭 시 Task 정보 출력 )
		Object.values(taskItems).map(task => {
			if (task.startDate || task.endDate) {
				const [startDate, endDate] = currentFormatYYYYMMDD(task.startDate, task.endDate);
				const targetDays = endDate - startDate < 0 ? 0 : endDate - startDate;

				for (let i = 0; i <= targetDays; i++) {
					if (taskByDateFrame[String(startDate + i)]) {
						taskByDateFrame[String(startDate + i)] = [...taskByDateFrame[startDate + i], task];
					}
				}
			}
		});

		// Task가 달력 어느 부분에 위치해야 하는지 정보를 담음
		Object.keys(taskByPositionFrame).map((weekDate, index) => {
			const endWeekDay = Number(date.week(startWeek + index).format('YYYYMMDD'));

			for (let i = 0; i < taskItemSorted.length; i++) {
				const [startDate, endDate, yearDate] = currentFormatYYYYMMDD(
					taskItemSorted[i].startDate,
					taskItemSorted[i].endDate,
				);

				if (yearDate === today.get('year')) {
					if (endWeekDay >= startDate && Number(weekDate) <= endDate) {
						taskByPositionFrame[Number(weekDate)].push(taskItemSorted[i]);
					}
				}
			}
		});

		setCalendarData([...calendarDataFrame]);
		setTaskByDate({ ...taskByDateFrame });
		setTaskByPosition({ ...taskByPositionFrame });
	}, [addNumber, taskItems]);

	return (
		<Container>
			<DirectionWrap>
				<DirectionLeftBtn onClick={() => setAddNumber(addNumber => addNumber - 1)} />
				<DirectionDate>{`${today.format('YYYY')} ${today.format('MM')}월`}</DirectionDate>
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
				<ViewCalendar calendarData={calendarData} date={date} startWeek={startWeek} />
				<ControlCalender calendarData={calendarData} taskByDate={taskByDate} taskByPosition={taskByPosition} />
			</CalendarWrap>
		</Container>
	);
};

export default CalendarContainer;
