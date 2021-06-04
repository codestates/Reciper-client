import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlinePencilAlt } from 'react-icons/hi';

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

	&:hover .deleteBtn,
	&:hover .editBtn {
		display: block;
		color: #aaa;
	}

	&.dragging {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border: 1px solid #e6e6e8;

		.deleteBtn,
		.editBtn {
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

	& > input {
		width: 100%;
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

export const BtnWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
`;

export const EditTaskBoxBtn = styled(HiOutlinePencilAlt)`
	margin-right: 5px;
	font-size: 17px;
	color: #f6f6f8;
`;

export const DeleteTaskBoxBtn = styled(AiOutlineClose)`
	font-size: 17px;
	color: #f6f6f8;
`;
