import styled from 'styled-components';
import { Week } from '../CalendarContainer/styles';

export const ViewCalendarWrap = styled.div`
	display: grid;
	grid-template-rows: repeat(6, 1fr);
	position: absolute;
	top: 0;
	height: 0;
	width: 100%;
	height: 100%;
`;

export const ViewWeek = styled(Week)`
	border-top: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const ViewDay = styled.div`
	padding: 7px;
	border-right: 1px solid ${({ theme }) => theme.color.lineColor};

	&:last-child {
		border-right: none;
	}

	&.notThisMonth {
		color: #888;
	}
`;

export const DayDate = styled.p`
	${({ theme }) => theme.align.flexCenter}
	width: 25px;
	height: 25px;
	font-size: 14px;
	border-radius: 100%;
	&.today {
		color: #fff;
		background-color: #478bff;
	}
`;
