import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const TaskBoxContainer = styled.div`
	width: 340px;
	min-width: 340px;
	padding: 0 20px 20px;
	margin-right: 40px;
	background-color: #f6f6f8;
	border: 1px solid #f6f6f8;

	.deleteBtn {
		display: none;
	}

	&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border: 1px solid #e6e6e8;
	}

	&:hover .deleteBtn {
		display: block;
		color: #aaa;
	}

	&.dragging {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border: 1px solid #e6e6e8;

		.deleteBtn {
			display: block;
			color: #aaa;
		}
	}

	&.block {
		opacity: 0.3;
	}
`;

export const TaskBoxTop = styled.div``;

export const TaskBoxName = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	width: 100%;
	padding: 20px 0 15px 0;

	& > p {
		font-family: 'NanumSquareB';
		font-size: 20px;
	}
`;

export const AddTaskInput = styled.input`
	width: 100%;
	height: 44px;
	padding: 0 15px;
	font-family: 'NanumSquareR';
	font-size: 15px;
	background-color: #fff;
	border: 1px solid #e6e6e8;

	&::placeholder {
		color: #aaa;
	}
`;

export const DeleteTaskBoxBtn = styled(AiOutlineClose)`
	transition: 0.1s;
	font-size: 17px;
	color: #f6f6f8;
`;
