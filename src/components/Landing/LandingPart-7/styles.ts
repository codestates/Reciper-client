import styled, { keyframes, css } from 'styled-components';
import { GiFluffyWing } from 'react-icons/gi';

const wings = keyframes`
0% {
	opacity:0;
	transform: translateY(0vw);
}

100% {
	opacity:1;
	transform: translateY(-2vw);
}
`;

export const LandingSeventhContainer = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: column;
	width: 100%;
	padding: 10vw 0 8vw 0;
`;

export const UserContentWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: row;
	width: 70%;
`;

export const UserCountMessage = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 60%;
	font-family: NanumSquareEB;
	font-size: 2.5vw;
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

export const WingLeftWrapper = styled.div<{ scrollPosition: number }>`
	transition: 0.5s;
	font-size: 6vw;
	color: #eee;

	& > svg {
		${props =>
			props.scrollPosition > 9600
				? css`
						animation: ${wings} infinite;
						animation-duration: 2s;
						animation-delay: 1s;
				  `
				: `
			animation: none;
		`}
	}
`;

export const WingRightWrapper = styled(WingLeftWrapper)<{ scrollPosition: number }>`
	transform: rotateY(-180deg);
`;

export const WingLeft = styled(GiFluffyWing)``;

export const WingRight = styled(GiFluffyWing)``;
