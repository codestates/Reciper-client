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

export const AddTaskBoxBtn = styled.button`
	${({ theme }) => theme.align.flexVertical}
	min-width: 340px;
	height: 58px;
	padding: 0 20px;
	font-family: 'NanumsquareR';
	font-size: 18px;
	color: #a6a6a8;
	background-color: #f1f1f1;
	border: 1px solid #e6e6e8;

	&:hover {
		background-color: #e6e6e8;
	}
`;

export const AddTaskBoxInput = styled.input`
	min-width: 340px;
	max-width: 340px;
	height: 58px;
	padding: 0 20px;
	margin-bottom: 5px;
	font-family: 'NanumsquareB';
	font-size: 18px;
	background-color: #fff;
	border: 1px solid #e6e6e8;

	&::placeholder {
		color: #a6a6a8;
	}
`;

export const AddInputMessage = styled.p`
	padding-left: 10px;
	font-size: 16px;
	color: ${({ theme }) => theme.color.warningColor};
`;
