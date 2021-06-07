import styled from 'styled-components';

export const ColorLabelWrap = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	font-family: 'NanumSquareR';
`;

export const Title = styled.p`
	width: 80px;
	margin-top: 4px;
	font-family: 'NanumSquareB';
	font-size: 16px;
`;

export const ChangeColorBtn = styled.button`
	${({ theme }) => theme.align.flexCenter}
	transition: 0.1s;
	width: 25px;
	height: 25px;
	margin-right: 10px;
	font-size: 20px;
	color: #a6a6a8;
	background-color: #e6e6e8;
	border-radius: 100%;

	&:hover {
		background-color: #dfdfdf;
		color: #a0a0a0;
	}
`;

export const LabelWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: calc(100% - 143px);
	height: 53px;
	margin-bottom: 10px;
`;

export const Label = styled.div`
	cursor: pointer;
	transition: 0.1s;
	min-width: 25px;
	height: 25px;
	margin: 0 3px 3px 0;
	border-radius: 100%;

	&:hover {
		transform: scale(1.1);
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
	}
`;
