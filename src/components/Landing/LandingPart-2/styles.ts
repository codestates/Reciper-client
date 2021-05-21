import styled from 'styled-components';

export const TopWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	align-items: start;
	width: 100%;
	min-height: 800px;
`;

export const TopLeftMessage = styled.div`
	${({ theme }) => theme.align.flexHorizontal};
	align-items: flex-end;
	width: 50%;
	height: 800px;
	font-family: 'NanumSquareB';
	font-size: 30px;
	color: #777777;

	& > div {
		line-height: 52px;
	}
`;

export const ImageWrapper = styled.div`
	height: 800px;

	& > img {
		width: 100%;
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
		margin-bottom: 100px;
	}
`;

export const SolutionMessage = styled.div`
	font-family: 'NanumSquareEB';
	font-size: 40px;
	color: #555555;
`;

export const SubMessage = styled.div`
	margin-top: 120px;
	font-family: NanumSquareB;
	font-size: 20px;
	color: #888888;

	& div {
		& span {
			padding: 3px;
			color: #fff;
			background-color: ${({ theme }) => theme.color.pointColor};
			border-radius: 4px;
		}
	}
`;
