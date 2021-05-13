import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const StackTagContainer = styled.span<{ type: string }>`
	position: relative;
	padding: ${({ type }) => (type === 'delete' ? `6px 25px 6px 10px` : '6px 10px')};
	margin-right: 5px;
	font-family: 'NanumSquareB';
	font-size: 14px;
	color: ${({ theme }) => theme.color.pointColor};
	background-color: #eeebff;
	border-radius: 3px;
`;

export const StackTagCloseIcon = styled(AiOutlineClose)`
	cursor: pointer;
	position: absolute;
	top: 8px;
	right: 7px;
	font-size: 12px;
`;
