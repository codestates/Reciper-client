import styled from 'styled-components';

export const TopWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	align-items: start;
	width: 100%;
	height: 500px;
	padding: 0 180px;
	background-color: #fff;
`;

export const TopLeftMessage = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	font-family: 'NanumSquareB';
	font-size: 24px;
	color: #555555;

	& > div {
		line-height: 52px;
	}
`;

export const SolutionMessage = styled.div`
	margin-top: 32px;
	font-family: 'NanumSquareEB';
	font-size: 36px;
	color: #333333;

	& > div {
		margin-top: 8px;
		font-size: 20px;
	}
`;

export const ImageWrapper = styled.div`
	& > img {
		object-fit: cover;
		width: 500px;
		height: 500px;
	}
`;

// -----------------------TODO: 밑 쪽 -----------------------

export const BottomWrapper = styled.div`
 	${({ theme }) => theme.align.flexHorizontal};
	align-items: flex-start;
	width: 100%;
	height: 70vh;
	padding: 100px 132px;
	background-color: #f8f8f8;
	}
`;

export const MessageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	width: 50%;
`;

export const SubMessage = styled.div`
	line-height: 1.2rem;
	font-family: NanumSquareB;
	font-size: 20px;
	color: #555555;

	& div {
		line-height: 32px;
		padding: 4px 0;
	}
`;

export const MessageTitle = styled.div`
	margin-bottom: 40px;
	font-family: 'NanumSquareEB';
	font-size: 28px;
	color: #555555;

	& span {
		font-family: NanumSquareEB;
		color: ${({ theme }) => theme.color.pointColor};
	}
`;

export const BottomImageWrapper = styled.div``;

export const SpeechBubbleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: -200px;
	& > img {
		object-fit: cover;
		width: 252px;
		height: 270px;
	}
`;

export const CopyImageWrapper = styled.div`
	margin-top: -12px;
	text-align: center;
	& > img {
		object-fit: cover;
		width: 500px;
		height: 500px;
	}
`;
