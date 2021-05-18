import styled from 'styled-components';

export const LandingThirdContainer = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 100%;
	min-height: 100vh;
`;

export const ContentMessage = styled.div`
	${({ theme }) => theme.align.flexCenter};
	margin-bottom: 30px;
	font-family: 'NanumSquareEB';
	font-size: 40px;
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
