import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const MoreTasksContainer = styled.div`
	cursor: initial;
	overflow: hidden;
	position: absolute;
	bottom: -10px;
	left: calc(100% + 10px);
	z-index: 10;
	width: 110%;
	min-height: 100%;
	padding: 10px 10px 5px 10px;
	background-color: #fff;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const MoreTop = styled.div`
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	width: 100%;
	margin-bottom: 10px;
`;

export const DateTitle = styled.p`
	font-family: 'NanumSquareB';
	font-size: 14px;
`;

export const CloseBtn = styled(IoCloseOutline)`
	cursor: pointer;
	font-size: 20px;
	color: #aaa;
`;

export const TaskItem = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexVertical}
	transition: 0.2s;
	width: 100%;
	height: 28px;
	padding-left: 10px;
	font-size: 14px;
	color: #fff;
	margin-bottom: 5px;
	border-radius: 3px;

	&:hover {
		width: calc(100% - 10px);
		margin-left: 10px;
	}
`;

export const NotTask = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 100%;
	margin-top: 30px;
	font-size: 14px;
	color: #888;
`;
