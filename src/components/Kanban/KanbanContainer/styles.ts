import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100%;
	padding: 50px;
	font-family: 'NanumsquareR';
	background-color: #f6f6f8;
`;

export const TaskBoxWrap = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	height: 100%;
`;

export const AddTaskBoxBtn = styled.input`
	${({ theme }) => theme.align.flexVertical}
	min-width: 340px;
	height: 58px;
	padding: 0 20px;
	font-family: 'NanumsquareR';
	font-size: 18px;
	background-color: #f3f3f3;
	border: 1px solid #f6f6f8;

	&::placeholder {
		color: #a6a6a8;
	}

	&:hover {
		background-color: #fff;
		border: 1px solid #e6e6e8;
	}
`;
