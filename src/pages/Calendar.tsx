import React from 'react';
import CalendarContainer from '../components/Calendar/CalendarContainer';
import WorkSpaceFrame from '../components/Common/WorkSpaceFrame';

const Calendar = (): JSX.Element => {
	return (
		<WorkSpaceFrame>
			<CalendarContainer />
		</WorkSpaceFrame>
	);
};

export default Calendar;
