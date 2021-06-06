import styled from 'styled-components';

export const LandingSecondContainer = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 100%;
`;

export const TopWrapper = styled.div`
	display: flex;
	width: 60%;
	height: 520px;
	background-color: #fff;
`;

export const TopLeftMessage = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	width: 100%;
	font-family: 'NanumSquareB';
	font-size: 1vw;
	color: #555555;

	& > div {
		display: flex;
		flex-direction: column;
		& > div {
			padding: 12px 0;
		}
	}
`;

export const SolutionMessage = styled.div`
	margin-top: 52px;
	font-family: 'NanumSquareEB';
	font-size: 1.5vw;
	color: #555555;

	& > div {
		margin-top: 8px;
		font-size: 1.5vw;
	}
`;

export const ImageWrapper = styled.div`
	object-fit: cover;
	& > img {
		width: 100%;
		height: 500px;
	}
`;

// -----------------------TODO: 밑 쪽 -----------------------

export const BottomWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 100%;
	height: 70vh;
	background-color: #f8f8f8;

	& > div {
		display: flex;
		width: 60%;
		height: 100%;
	}
`;

export const MessageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	width: 60%;
`;

export const MessageTitle = styled.div`
	margin-bottom: 40px;
	font-family: 'NanumSquareEB';
	font-size: 1vw;
	color: #555555;

	& span {
		font-family: NanumSquareEB;
		color: ${({ theme }) => theme.color.pointColor};
	}
`;

export const SubMessage = styled.div`
	line-height: 1.2rem;
	font-family: NanumSquareB;
	font-size: 1vw;
	color: #555555;

	& div {
		line-height: 32px;
		padding: 4px 0;
	}
`;

export const BottomImageWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
`;

export const SpeechBubbleWrapper = styled.div`
	object-fit: cover;
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: -50px;

	& > img {
		width: 10vw;
		height: 270px;
	}
`;

export const NaviImageWrapper = styled.div`
	object-fit: cover;
	text-align: center;
	width: 100%;
	& > img {
		width: 24vw;
	}
`;
