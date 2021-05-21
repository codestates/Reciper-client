import styled from 'styled-components';

export const LandingThirdContainer = styled.div`
	${({ theme }) => theme.align.flexHorizontal};
	align-items: flex-start;
	width: 100%;
	min-height: 100vh;
	padding: 160px 100px;

	& > div {
		${({ theme }) => theme.align.flexCenter};
		flex-direction: column;
		width: 80%;
	}
`;

export const ContentMessage = styled.div`
	${({ theme }) => theme.align.flexCenter};
	margin-bottom: 120px;
	font-family: 'NanumSquareEB';
	font-size: 52px;
	color: #555555;
`;
export const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ContentItem = styled.div`
	width: 400px;
	height: 400px;
	margin: 0 20px;
	padding: 20px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;
