import styled from 'styled-components';
import { BiArrowToTop } from 'react-icons/bi';

export const LandingFirstContainer = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 100%;
	min-height: 100vh;
`;

export const Dimed = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 100%;
	height: 100vh;
	background-color: rgba(255, 255, 255, 0.5);
`;

export const ContentsWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 100%;
`;

export const MainMessage = styled.div`
	${({ theme }) => theme.align.flexCenter};
	margin-bottom: 1.1vw;
	font-family: NanumSquareEB;
	font-size: 4.5vw;
	color: #343434;
`;

export const SubMessage = styled.div`
	${({ theme }) => theme.align.flexCenter};
	margin-bottom: 7.5vw;
	font-family: NanumSquareB;
	font-size: 2.1vw;
	color: #343434;
`;

export const FreeExpButton = styled.div`
	${({ theme }) => theme.align.flexCenter};

	& > button {
		${({ theme }) => theme.align.flexCenter};
		cursor: pointer;
		position: relative;
		z-index: 8;
		transition: 0.3s;
		width: 11vw;
		height: 3.2vw;
		color: #fff;
		font-family: NanumSquareEB;
		font-size: 22px;		
		background-color: #545454;
		border-radius: 5px;

		& > a {
			margin-top: 0.2vw;
			color: #fff;
		}

		& > p {
			margin-top: 0.2vw;
		}

		&:hover {
			color: #ddd;
			background-color: #343434;
		}
	}
`;

// ----------------TODO: 맨 위로 가기 버튼----------------

export const BackToTopButtonWrapper = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	position: fixed;
	right: 2vw;
	bottom: 4vh;
	z-index: 99;
	width: 60px;
	hieght: 60px;

	& > img {
		width: 100%;
		transform: rotate(180deg);
	}

	& > p {
		margin-top: 4px;
		font-family: NanumSquareB;
		font-size: 14px;
	}
`;

export const BackToTopButton = styled.div`
	${({ theme }) => theme.align.flexCenter};
	padding: 8px;
	color: #555555;
	background-color: #fff;
	box-shadow: rgb(0 0 0 / 18%) 0px 2px 4px;
	border-radius: 50%;

	&:hover {
		color: #fff;
		background-color: ${({ theme }) => theme.color.pointColor};
	}
`;

export const BackToTopIcon = styled(BiArrowToTop)`
	font-size: 24px;
`;
