import styled, { keyframes, css } from 'styled-components';

const arrow = keyframes`
from {
	opacity: 0;
	width: 0;
	margin-right: 90vw;
}

to {
	opacity: 1;
	width: 90vw;
	margin-right: 0;
}
`;

export const LandingThirdContainer = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 100%;
	min-height: 120vh;
	padding: 100px 100px;

	& > div {
		${({ theme }) => theme.align.flexCenter};
		flex-direction: column;
		width: 100%;
	}
`;

export const ArrowWrapper = styled.div<{ scrollPosition: number }>`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 100%;

	& > img {
		transition: 0.5s;
		text-align: right;
		width: 90vw;
		height: 8vw;
		margin-left: 12px;
		${props =>
			props.scrollPosition > 1430
				? css`
						animation: ${arrow};
						animation-duration: 2s;
						animation-delay: 1s;
				  `
				: `
			animation: none;
		`}
		${props =>
			props.scrollPosition > 1730
				? css`
						opacity: 1;
				  `
				: `
				opacity: 0;
		`}
	}

	& > div {
		display: flex;
		justify-content: center;
		flex-direction: row;
		width: 100%;
		margin-top: -6vw;
	}
`;

export const NumberIcon = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 26.1vw;
	margin: 0 1.8vw;
	color: ${({ theme }) => theme.color.pointColor};
	font-size: 4vw;

	& > svg {
		background-color: #fff;
		width: 3.5vw;
		height: 3.5vw;
		border-radius: 100%;
	}
`;

export const ContentMessage = styled.div`
	${({ theme }) => theme.align.flexCenter};
	margin-bottom: 32px;
	font-family: 'NanumSquareEB';
	font-size: 3vw;
	color: #595454;
`;

export const ContentSubMessage = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 16px;
	font-family: 'NanumSquareEB';
	font-size: 1.5vw;
	color: #595454;

	& > p {
		margin-top: -5px;
		margin-left: 4px;
	}
`;

export const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 40px;
`;

export const ContentItem = styled.div`
	${({ theme }) => theme.align.flexVertical};
	justify-content: flex-start;
	flex-direction: column;
	width: 26.1vw;
	height: 24vw;
	margin: 0 1.8vw;
	font-family: 'BMJua';
	font-size: 1vw;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

	& > p {
		padding: 8px 32px 24px 32px;
		font-size: 0.8vw;
		color: #545454;
		text-align: left;
	}

	${({ theme }) => theme.align.flexCenter};
	object-fit: cover;
	& > img {
		width: 90%;
	}
`;

export const ContentItemEmoji = styled.div`
	padding: 4px 0;
	font-size: 2vw;
`;

export const ContentItemTitle = styled.div`
	padding: 4px 0;
	font-size: 1.2vw;
	text-align: center;
`;
