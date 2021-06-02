import styled from 'styled-components';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	font-family: 'NanumSquareR';
`;

export const DirectionWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	justify-content: flex-start;
	width: 100%;
	padding: 20px 0 20px 20px;
`;

export const DirectionLeftBtn = styled(HiChevronLeft)`
	cursor: pointer;
	font-size: 28px;
	color: #888;
`;
export const DirectionRightBtn = styled(HiChevronRight)`
	cursor: pointer;
	font-size: 28px;
	color: #888;
`;

export const DirectionDate = styled.p`
	margin: 0 10px;
	font-family: 'NanumSquareB';
	font-size: 20px;
`;

export const DaysWrap = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	width: 100%;
	margin-bottom: 10px;
`;

export const DayName = styled.div`
	font-family: 'NanumSquareB';
	text-align: center;
	font-size: 16px;
`;

export const CalendarWrap = styled.div`
	display: grid;
	grid-template-rows: repeat(6, 1fr);
	width: 100%;
	height: calc(100% - 96px);
`;
export const Week = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	width: 100%;
	border-top: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const Day = styled.div`
	padding: 10px;
	border-right: 1px solid ${({ theme }) => theme.color.lineColor};

	&.notThisMonth {
		color: #888;
	}
`;

export const DayDate = styled.p`
	font-size: 14px;
`;
