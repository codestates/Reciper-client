import styled, { keyframes, css } from 'styled-components';

const arrow = keyframes`
from {
	opacity: 0;
	width: 0;
	margin-right: 100%;
}

to {
	opacity: 1;
	width: 1700px;
	margin-right: 0%;
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
		width: 1700px;
		height: 150px;
		margin-left: 12px;
		${props =>
			props.scrollPosition > 1350
				? css`
						animation: ${arrow};
						animation-duration: 2s;
						animation-delay: 1s;
				  `
				: `
			animation: none;
		`}
		${props =>
			props.scrollPosition > 1650
				? css`
						opacity: 1;
				  `
				: `
				opacity: 0;
		`}
	}

	& > div {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		width: 100%;
		margin-top: -138px;
	}
`;

export const NumberIcon = styled.div`
	color: ${({ theme }) => theme.color.pointColor};
	font-size: 80px;
	& > svg {
		background-color: #fff;
		width: 65px;
		height: 65px;
		border-radius: 100%;
	}
`;

export const ContentMessage = styled.div`
	${({ theme }) => theme.align.flexCenter};
	margin-bottom: 32px;
	font-family: 'NanumSquareEB';
	font-size: 52px;
	color: #595454;
`;

export const ContentSubMessage = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 16px;
	font-family: 'NanumSquareEB';
	font-size: 24px;
	color: #595454;
	& > p {
		margin-top: -5px;
		margin-left: 4px;
	}
`;

export const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ContentItemInitSetUp = styled.div`
	${({ theme }) => theme.align.flexVertical};
	justify-content: flex-start;
	flex-direction: column;
	width: 500px;
	height: 520px;
	margin: 0 34px;
	padding: 20px 0;
	font-family: NanumSquareB;
	font-size: 16px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

	& > p {
		padding: 8px 32px 24px 32px;
		font-size: 16px;
		color: #545454;
		text-align: left;
	}
	${({ theme }) => theme.align.flexCenter};
	object-fit: cover;
	& > img {
		width: 480px;
		height: 340px;
	}
`;

export const ContentItemEmoji = styled.div`
	padding: 4px 0;
	font-size: 40px;
`;

export const ContentItemTitle = styled.div`
	padding: 4px 0;
	font-size: 20px;
	text-align: center;
`;

export const ContentItemFirst = styled(ContentItemInitSetUp)``;

export const ContentItemSecond = styled(ContentItemInitSetUp)``;

export const ContentItemThird = styled(ContentItemInitSetUp)``;
