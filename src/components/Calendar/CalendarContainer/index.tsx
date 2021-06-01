import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import useSocket from '../../../hooks/useSocket';

import { getSocketData, kanbanDataSelector } from '../../../reducer/kanban';
import { taskDataType } from '../../../types/types';
dayjs.extend(weekOfYear);

const CalendarContainer = (): JSX.Element => {
	const [addNumber, setAddNumber] = useState<number>(0);
	let dayJs = dayjs().startOf('month').add(addNumber, 'month').startOf('week');
	const startWeek = dayJs.startOf('month').week();
	const endWeek = dayJs.endOf('month').week() === 1 ? 53 : dayJs.endOf('month').week();
	const blankWeek = endWeek - startWeek === 4 ? endWeek + 1 : endWeek;
	const arr: Dayjs[][] = [];

	const dispatch = useDispatch();
	const { taskItems } = useSelector(kanbanDataSelector);
	const { projectUrl, part } = useParams<{ projectUrl: string; part: string }>();
	const [socket, connectSocket, disconnectSocket] = useSocket(projectUrl, 'kanban');
	const [connect, setConnect] = useState<boolean>(false);

	connectSocket();

	const [calendarData, setCalendarData] = useState<{ [key: string]: { date: Dayjs; tasks: taskDataType[] } }>({});

	useEffect(() => {
		let init: { [key: string]: { date: Dayjs; tasks: taskDataType[] } } = {};

		for (let week = startWeek; week <= blankWeek; week++) {
			arr.push(
				Array(7)
					.fill(0)
					.map((_, index) => {
						if (startWeek - week === 0 && index === 0) {
							init = { ...init, [dayJs.format('YYYYMDD')]: { date: dayJs, tasks: [] } };
							return dayJs;
						}

						dayJs = dayJs.add(1, 'day');
						init = { ...init, [dayJs.format('YYYYMDD')]: { date: dayJs, tasks: [] } };
						return dayJs;
					}),
			);
		}

		Object.values(taskItems).map(task => {
			if (task.startDate || task.endDate) {
				const startDate = `${dayJs.format('YYYY')}${task.startDate.split('월')[0]}${task.startDate
					.split(' ')[1]
					.slice(0, 2)}`;
				const endDate = `${dayJs.format('YYYY')}${task.endDate.split('월')[0]}${task.endDate
					.split(' ')[1]
					.slice(0, 2)}`;
				const targetDays = Number(endDate) - Number(startDate);

				for (let i = 0; i <= targetDays; i++) {
					if (init[String(Number(startDate) + i)]) {
						init = {
							...init,
							[String(Number(startDate) + i)]: {
								...init[String(Number(startDate) + i)],
								tasks: [...init[String(Number(startDate) + i)].tasks, task],
							},
						};
					}
				}
			}
		});

		setCalendarData(init);
	}, [addNumber, taskItems]);

	useEffect(() => {
		console.log(calendarData);
	}, [calendarData]);

	useEffect(() => {
		socket?.emit('joinPart', part);
	}, [connect, part]);

	useEffect(() => {
		socket?.on('getKanbanData', data => {
			dispatch(getSocketData(data));
		});

		socket?.on('connection', () => {
			setConnect(true);
		});

		return () => {
			disconnectSocket();
		};
	}, []);

	return (
		<div>
			<div onClick={() => setAddNumber(addNumber - 1)}>-</div>
			<div onClick={() => setAddNumber(addNumber + 1)}>+</div>
		</div>
	);
};

export default CalendarContainer;

// class Calendar {
//   public targetDate: Moment;
//   private _startWeek: number;
//   private _endWeek: number;
//   private _blankWeek: number;
//   public calendarArr: Moment[][];

//   constructor(monthChange: number) {
//     this.targetDate = moment();
//     this.targetDate.add(monthChange, "month");
//     this._startWeek = this.targetDate.clone().startOf("month").week();
//     this._endWeek = this.targetDate.clone().endOf("month").week() === 1 ? 53 : this.targetDate.clone().endOf("month").week();
//     this._blankWeek = this._endWeek - this._startWeek === 4 ? this._endWeek + 1 : this._endWeek;
//     this.calendarArr = [];

//     this.calenarLoop();
//   }

//   calenarLoop() {
//     for (let week = this._startWeek; week <= this._blankWeek; week++) {
//       this.calendarArr.push(
//         Array(7)
//           .fill(0)
//           .map((n, i) => {
//             return this.targetDate
//               .clone()
//               .week(week)
//               .startOf("week")
//               .add(n + i, "day");
//           })
//       );
//     }
//   }
// }

// export default Calendar;
