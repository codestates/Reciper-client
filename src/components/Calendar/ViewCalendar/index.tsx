import React from 'react';
import { Dayjs } from 'dayjs';

import { ViewCalendarWrap, ViewWeek, DayDate, ViewDay } from './styles';

interface Props {
	calendarData: Dayjs[][];
	date: Dayjs;
	startWeek: number;
}

const ViewCalendar = ({ calendarData, date, startWeek }: Props): JSX.Element => {
	// 스타일을 보여주기 위한 캘린더
	return (
		<ViewCalendarWrap>
			{calendarData.map((week, index) => (
				<ViewWeek key={index}>
					{week.map((day, index) => {
						const currentMonth = date
							.startOf('month')
							.week(startWeek + 2)
							.format('M');
						const notThisMonth = Number(day.format('M')) === Number(currentMonth);

						return (
							<ViewDay className={notThisMonth ? '' : 'notThisMonth'} key={index}>
								<DayDate>{day.format('DD')}</DayDate>
							</ViewDay>
						);
					})}
				</ViewWeek>
			))}
		</ViewCalendarWrap>
	);
};

export default ViewCalendar;
