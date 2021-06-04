import styled from 'styled-components';

export const LandingSeventhContainer = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: column;
	width: 100%;
	padding-bottom: 60px;
`;

export const UserCountWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 70%;
	font-family: NanumSquareEB;
	font-size: 52px;
	color: #888888;

	& > div {
		display: flex;
		flex-direction: row;
		margin: 12px 0;
	}
`;

export const UserCounter = styled.div`
	color: ${({ theme }) => theme.color.pointColor};
	margin: 0 8px;
`;
