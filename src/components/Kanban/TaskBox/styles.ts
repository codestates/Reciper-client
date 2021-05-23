import styled from 'styled-components';

export const TaskBoxContainer = styled.div`
	transition: 0.1s;
	min-width: 340px;
	padding: 0 20px 20px;
	margin-right: 40px;
	background-color: #f6f6f8;
	border: 1px solid #f6f6f8;

	&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border: 1px solid #e6e6e8;
	}
`;

export const TaskBoxTop = styled.div`
	margin-bottom: 10px;
`;

export const TaskBoxName = styled.div`
	cursor: pointer;
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
	background-color: #fff;
	border: 1px solid #e6e6e8;

	&::placeholder {
		color: #aaa;
	}
`;

export const TaskWrap = styled.div`
	overflow: auto;
	width: 100%;
	max-height: 600px;

	&:hover::-webkit-scrollbar {
		display: block;
	}

	&::-webkit-scrollbar {
		display: none;
		width: 8px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 50px;
	}
`;
