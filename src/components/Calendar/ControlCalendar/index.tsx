import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
dayjs.extend(dayOfYear);

import { taskDataType } from '../../../types/types';

import { Week } from '../CalendarContainer/styles';
import { ControlCalenderWrap, ControlDay, DayHover, More, TaskBar } from './styles';
import MoreTasks from '../MoreTasks';

interface Props {
	calendarData: Dayjs[][];
	taskByDate: { [key: string]: taskDataType[] };
	taskByPosition: { [key: number]: taskDataType[] };
}

// Task가 포함되어 있고 여러 기능이 있는 캘린더
const ControlCalender = ({ calendarData, taskByDate, taskByPosition }: Props): JSX.Element => {
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
								const currentStartDay = dayjs(task.startDate).dayOfYear();
								const currentEndDay = dayjs(task.endDate).dayOfYear();
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
											{task.taskTitle}
										</TaskBar>
									)
								);
							})}
						{week.map((day, dayIndex) => {
							const currentDay = day.format('YYYYMMDD');

							return (
								<ControlDay key={dayIndex} onClick={() => setOpenTargetDate(currentDay)}>
									<DayHover />
									{taskByDate[currentDay].length > 3 && <More>+{taskByDate[currentDay].length - 3} 테스크</More>}

									{openTargetDate === currentDay && (
										<MoreTasks
											index={dayIndex}
											day={day}
											tasks={taskByDate[currentDay]}
											setOpenTargetDate={setOpenTargetDate}
										/>
									)}
								</ControlDay>
							);
						})}
					</Week>
				);
			})}
		</ControlCalenderWrap>
	);
};

export default ControlCalender;
