import styled, { keyframes, css } from 'styled-components';
import introCard1 from '../../../images/introCard1.gif';
import introCard2 from '../../../images/introCard2.gif';

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
		text-align: right;
		width: 1700px;
		height: 150px;
		margin-left: 12px;
		${props =>
			props.scrollPosition > 1400
				? css`
						animation: ${arrow} 2.5s 1s;
				  `
				: `
			animation: none;
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

export const NumberIconInitSetup = styled.div`
	color: ${({ theme }) => theme.color.pointColor};
	font-size: 80px;
	& > svg {
		background-color: #fff;
		width: 65px;
		height: 65px;
		border-radius: 100%;
	}
`;

export const NumberIconOne = styled(NumberIconInitSetup)`
	top: 0;
	left: 280px;
`;

export const NumberIconTwo = styled(NumberIconInitSetup)``;

export const NumberIconThree = styled(NumberIconInitSetup)``;

export const ContentMessage = styled.div`
	${({ theme }) => theme.align.flexCenter};
	margin-bottom: 32px;
	font-family: 'NanumSquareEB';
	font-size: 52px;
	color: #333333;
`;

export const ContentSubMessage = styled.div`
	margin-bottom: 16px;
	font-family: 'NanumSquareEB';
	font-size: 24px;
	color: #333333;
`;

export const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ContentItemInitSetUp = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	height: 580px;
	margin: 0 40px;
	padding: 20px 32px;
	font-family: NanumSquareB;
	font-size: 16px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

	& > span {
		margin-bottom: 16px;
		font-size: 20px;
		text-align: center;
	}
	& > p {
		margin-bottom: 24px;
		font-size: 16px;
		color: #545454;
		text-align: left;
	}

	& > div {
		object-fit: cover;
		width: 440px;
		height: 440px;
	}
`;

export const ContentItemFirst = styled(ContentItemInitSetUp)`
	& > div {
		background: no-repeat center/cover url(${introCard1});
	}
`;

export const ContentItemSecond = styled(ContentItemInitSetUp)`
	& > div {
		background: no-repeat center/cover url(${introCard2});
	}
`;

export const ContentItemThird = styled(ContentItemInitSetUp)``;
