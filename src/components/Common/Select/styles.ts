import styled, { css } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const SelectForm = styled.div<{ height: string }>`
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	position: relative;
	width: 100px;
	margin: 10px 20px;
	padding: 0 10px;
	font-family: NanumSquareR;
	font-size: 14px;
	color: ${({ theme }) => theme.color.lineColor};
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	height: ${({ height }) => (height === 'short' ? '32px' : '40px')};
`;

export const ToggleArrowIcon = styled(MdKeyboardArrowDown)`
	font-size: 16px;
	color: #000;
`;

export const OptionContainer = styled.ul<{ height: string }>`
	overflow: hidden;
	position: absolute;
	top: ${({ height }) => (height === 'short' ? '35px' : '43px')};
	left: -1px;
	width: 100px;
	font-family: NanumSquareR;
	font-size: 14px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;
`;

export const Option = styled.li`
	cursor: pointer;
	padding: 8px 10px;
	color: #000;

	&:hover {
		background-color: ${({ theme }) => theme.color.pointColor};
		color: #fff;
	}
`;
