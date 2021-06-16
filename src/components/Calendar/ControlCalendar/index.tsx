import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
dayjs.extend(dayOfYear);

import MoreTasks from '../MoreTasks';

import { taskDataType } from '../../../types/types';

import { ControlCalenderWrap, Week, Day, DayDate, DayHover, More, TaskBar } from './styles';

interface Props {
	date: Dayjs;
	startWeek: number;
	calendarData: Dayjs[][];
	taskByDate: { [key: string]: taskDataType[] };
	taskByPosition: { [key: number]: taskDataType[] };
}

// Task가 포함되어 있고 여러 기능이 있는 캘린더
const ControlCalender = ({ date, startWeek, calendarData, taskByDate, taskByPosition }: Props): JSX.Element => {
	const today = dayjs().format('YYYYMMDD');
	const [openTargetDate, setOpenTargetDate] = useState<string>('');

	return (
		<ControlCalenderWrap>
			{calendarData.map((week, weekIndex) => {
				const positionKey = Number(week[0].format('YYYYMMDD'));
				const startDay = week[0].dayOfYear();

				return (
					<Week key={weekIndex}>
						{taskByPosition[positionKey] &&
							taskByPosition[positionKey].map((task, index) => {
								const currentStartDay = dayjs(task.startDate || task.endDate).dayOfYear();
								const currentEndDay = dayjs(task.endDate || task.startDate).dayOfYear();
								const diffStartDay = currentStartDay - startDay;
								const diffEndDay = currentEndDay - startDay + 1;
								const left = diffStartDay > 0 ? (100 / 7) * diffStartDay : 0;
								const width = diffStartDay > 0 ? (100 / 7) * (diffEndDay - diffStartDay) : (100 / 7) * diffEndDay;

								return (
									index < 3 && (
										<TaskBar
											key={index}
											className={`index${index}`}
											style={{ backgroundColor: `${task.taskColor}`, left: `${left}%`, width: `${width}%` }}
										>
											<span>{task.taskTitle}</span>
										</TaskBar>
									)
								);
							})}
						{week.map((day, dayIndex) => {
							const currentDay = day.format('YYYYMMDD');
							const currentMonth = date
								.startOf('month')
								.week(startWeek + 2)
								.format('M');
							const notThisMonth = Number(day.format('M')) === Number(currentMonth);
							const todayHighlight = today === day.format('YYYYMMDD');

							return (
								<Day
									key={dayIndex}
									className={notThisMonth ? '' : 'notThisMonth'}
									onClick={() => setOpenTargetDate(currentDay)}
								>
									<DayDate className={todayHighlight ? 'today' : ''}>{day.format('DD')}</DayDate>
									<DayHover />
									{taskByDate[currentDay].length > 3 && <More>+{taskByDate[currentDay].length - 3} 테스크</More>}

									{openTargetDate === currentDay && (
										<MoreTasks
											dayIndex={dayIndex}
											weekIndex={weekIndex}
											day={day}
											tasks={taskByDate[currentDay]}
											setOpenTargetDate={setOpenTargetDate}
										/>
									)}
								</Day>
							);
						})}
					</Week>
				);
			})}
		</ControlCalenderWrap>
	);
};

export default ControlCalender;
