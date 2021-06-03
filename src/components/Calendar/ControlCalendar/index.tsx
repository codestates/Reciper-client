import React, { useState } from 'react';
import { Dayjs } from 'dayjs';

import { taskDataType } from '../../../types/types';

import { Week } from '../CalendarContainer/styles';
import { ControlCalenderWrap, ControlDay, DayHover, More, TaskBar } from './styles';
import MoreTasks from '../MoreTasks';

interface Props {
	calendarData: Dayjs[][];
	taskByDate: { [key: string]: taskDataType[] };
}

// Task가 포함되어 있고 여러 기능이 있는 캘린더
const ControlCalender = ({ calendarData, taskByDate }: Props): JSX.Element => {
	const [openTargetDate, setOpenTargetDate] = useState<string>('');

	return (
		<ControlCalenderWrap>
			{calendarData.map((week, index) => (
				<Week key={index}>
					{week.map((day, dayIndex) => {
						const currentDay = day.format('YYYYMDD');

						return (
							<ControlDay key={dayIndex} onClick={() => setOpenTargetDate(currentDay)}>
								{taskByDate[currentDay].map((task, index) => {
									return (
										index < 3 && (
											<div key={index}>
												<TaskBar
													className={`${day.format('M')}월 ${day.format('DD')}일` === task.endDate ? 'lastTask' : ''}
													style={{ backgroundColor: `${task.taskColor}` }}
												>
													{(`${day.format('M')}월 ${day.format('DD')}일` === task.startDate || dayIndex === 0) &&
														task.taskTitle}
												</TaskBar>
											</div>
										)
									);
								})}

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
			))}
		</ControlCalenderWrap>
	);
};

export default ControlCalender;
