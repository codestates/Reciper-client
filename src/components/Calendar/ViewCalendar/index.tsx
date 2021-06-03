import React from 'react';
import { Dayjs } from 'dayjs';

import { ViewCalendarWrap, ViewWeek, DayDate, ViewDay } from './styles';

interface Props {
	calendarData: Dayjs[][];
	date: Dayjs;
	startWeek: number;
}

const ViewCalendar = ({ calendarData, date, startWeek }: Props): JSX.Element => {
	// 단순히 날짜와 간격을 보여주기 위한 컴포넌트
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
