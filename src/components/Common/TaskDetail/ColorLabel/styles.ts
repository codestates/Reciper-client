import styled from 'styled-components';

export const ColorLabelWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	position: relative;
	margin-bottom: 20px;
	width: 100%;
	font-family: 'NanumSquareR';
`;

export const Title = styled.p`
	width: 80px;
	font-family: 'NanumSquareB';
	font-size: 16px;
`;

export const ChangeColorBtn = styled.button`
	${({ theme }) => theme.align.flexCenter}
	width: 25px;
	height: 25px;
	margin-right: 10px;
	font-size: 20px;
	color: #a6a6a8;
	background-color: #e6e6e8;
	border-radius: 100%;
`;

export const Label = styled.div`
	cursor: pointer;
	width: 25px;
	height: 25px;
	margin-right: 3px;
	border-radius: 100%;
`;
