import styled from 'styled-components';

export const TopWrapper = styled.div`
	${({ theme }) => theme.align.flexHorizontal};
	align-items: start;
	width: 100%;
	min-height: 800px;
`;

export const TopLeftMessage = styled.div`
	margin-top: -200px;
	font-family: 'NanumSquareB';
	font-size: 30px;
	color: #555555;

	& > div {
		line-height: 52px;
	}
`;

export const BottomWrapper = styled.div`
 	${({ theme }) => theme.align.flexCenter};
	min-height: 100vh;
	padding-top: 72px;
	background-color: #f8f8f8;
	}

	& > div {
		width:70%;
		height: 400px;
	}
`;

export const ImageWrapper = styled.div`
	margin-top: 100px;
`;

export const SolutionMessage = styled.div`
	font-family: 'NanumSquareB';
	font-size: 40px;
	color: #222222;
`;

export const SubMessage = styled.div`
	margin-top: 120px;
	font-family: NanumSquareR;
	font-size: 20px;
	color: #000;
`;
