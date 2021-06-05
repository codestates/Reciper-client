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

export const ControlDay = styled.div`
	cursor: pointer;
	position: relative;
	width: 100%;
	height: 100%;
	padding-top: 36px;

	&:hover {
	}
`;

export const DayHover = styled.div`
	position: absolute;
	top: 0;
	transition: 0.2s;
	width: 100%;
	height: 100%;

	&:hover {
		background-color: rgba(0, 0, 255, 0.08);
	}
`;

export const TaskBar = styled.div`
	${({ theme }) => theme.align.flexVertical}
	position: absolute;
	height: 20px;
	padding-left: 10px;
	margin-bottom: 1px;
	font-size: 13px;
	color: #fff;
	border-right: 1px solid ${({ theme }) => theme.color.lineColor};

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
	margin-top: 5px;
	padding-left: 10px;
	font-size: 13px;
	color: #888;
`;
