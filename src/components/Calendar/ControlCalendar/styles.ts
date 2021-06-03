import { IoIosMore } from 'react-icons/io';
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
	padding-top: 31px;

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
	position: relative;
	width: 100%;
	height: 18px;
	margin-bottom: 1px;
	padding-left: 10px;
	font-size: 13px;
	color: #fff;

	&.lastTask {
		border-right: 1px solid ${({ theme }) => theme.color.lineColor};
	}

	&.lastTask:after {
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

export const MoreIcon = styled.div`
	position: absolute;
	bottom: 2px;
	left: 50%;
	transform: translateX(-50%);
	font-size: 18px;

	& > div {
		width: 18px;
		height: 1px;
		background-color: #999;
		margin-bottom: 3px;
	}
`;
