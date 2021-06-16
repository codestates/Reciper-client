import styled from 'styled-components';

export const ControlCalenderWrap = styled.div`
	display: grid;
	grid-template-rows: repeat(6, 1fr);
	position: absolute;
	top: 0;
	height: 0;
	width: 100%;
	height: 100%;
`;

export const Week = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	position: relative;
	width: 100%;
	border-top: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const Day = styled.div`
	cursor: pointer;
	position: relative;
	width: 100%;
	height: 100%;
	padding: 7px;
	border-right: 1px solid ${({ theme }) => theme.color.lineColor};

	&:last-child {
		border-right: none;
	}

	&.notThisMonth {
		color: #888;
	}
`;

export const DayHover = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	transition: 0.2s;
	width: 100%;
	height: 100%;

	&:hover {
		background-color: rgba(0, 0, 255, 0.08);
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

export const TaskBar = styled.div`
	${({ theme }) => theme.align.flexVertical}
	position: absolute;
	z-index: 5;
	height: 20px;
	padding-left: 10px;
	margin-bottom: 1px;
	font-size: 13px;
	color: #fff;
	border-right: 1px solid ${({ theme }) => theme.color.lineColor};

	& > span {
		width: 170px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	&.index0 {
		top: 39px;
	}
	&.index1 {
		top: 60px;
	}
	&.index2 {
		top: 81px;
	}

	&:after {
		content: '';
		display: block;
		position: absolute;
		right: 0px;
		width: 0;
		height: 0;
		border-top: 10px solid #fff;
		border-bottom: 10px solid #fff;
		border-left: 10px solid transparent;
	}
`;

export const More = styled.div`
	position: absolute;
	bottom: 3px;
	left: 0;
	margin-top: 5px;
	padding-left: 10px;
	font-size: 13px;
	color: #888;
`;
