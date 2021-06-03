import { Dayjs } from 'dayjs';
import React, { MouseEvent } from 'react';
import { IoIosMore } from 'react-icons/io';
import { taskDataType } from '../../../types/types';
import { Week } from '../CalendarContainer/styles';
import { ControlCalenderWrap, ControlDay, DayHover, MoreIcon, TaskBar } from './styles';

interface Props {
	calendarData: Dayjs[][];
	taskByDate: { [key: string]: taskDataType[] };
}

const ControlCalender = ({ calendarData, taskByDate }: Props): JSX.Element => {
	return (
		<ControlCalenderWrap>
			{calendarData.map((week, index) => (
				<Week key={index}>
					{week.map((day, index) => {
						return (
							<ControlDay key={index}>
								{taskByDate[day.format('YYYYMDD')].map((task, index) => {
									return (
										index < 4 && (
											<>
												<TaskBar
													key={index}
													className={`${day.format('M')}월 ${day.format('DD')}일` === task.endDate ? 'lastTask' : ''}
													style={{ backgroundColor: `${task.taskColor}` }}
												>
													{`${day.format('M')}월 ${day.format('DD')}일` === task.startDate && task.taskTitle}
												</TaskBar>
												{index >= 3 && (
													<MoreIcon>
														<div></div>
														<div></div>
													</MoreIcon>
												)}
											</>
										)
									);
								})}
								<DayHover />
							</ControlDay>
						);
					})}
				</Week>
			))}
		</ControlCalenderWrap>
	);
};

export default ControlCalender;
