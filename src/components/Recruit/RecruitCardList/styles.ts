import styled from 'styled-components';

export const CardListContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	height: 100vh;
	padding-top: 72px;
`;

export const EmptyList = styled.div`
	${({ theme }) => theme.align.positionCenter};
	font-family: 'NanumSquareR';
	text-align: center;
	font-size: 30px;
	color: #333;

	& > p {
		margin-top: 50px;
	}
`;
