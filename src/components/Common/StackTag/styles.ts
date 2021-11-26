import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const StackTagContainer = styled.span<{ type: string }>`
	position: relative;
	display: inline-block;
	padding: ${({ type }) => (type === 'delete' ? `6px 25px 6px 10px` : '6px 10px')};
	margin: 0 5px 5px 0;
	font-family: 'NanumSquareB';
	font-size: 14px;
	color: #2569dd;
	background-color: #ffefff;
	border-radius: 3px;
`;

export const StackTagCloseIcon = styled(AiOutlineClose)`
	cursor: pointer;
	position: absolute;
	top: 8px;
	right: 7px;
	font-size: 12px;
`;
