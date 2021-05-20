import styled from 'styled-components';
import maintest from '../../../images/maintest.jpg';

export const LandingFirstContainer = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 100%;
	min-height: 100vh;
	background: no-repeat center/cover url(${maintest});
`;

export const ContentsWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter}
	flex-direction: column;
	width: 100%;
`;

export const MainMessage = styled.div`
	${({ theme }) => theme.align.flexCenter}
	margin-bottom: 10px;
	font-family: NanumSquareEB;
	font-size: 80px;
	color: #fff;
`;

export const SubMessage = styled.div`
	${({ theme }) => theme.align.flexCenter}
	margin-bottom: 80px;
	font-family: NanumSquareB;
	font-size: 30px;
	color: #545454;
`;

export const FreeExpButton = styled.div`
	${({ theme }) => theme.align.flexCenter}

	& > button {
		cursor: pointer;
		position: relative;
		z-index: 8;
		transition: 0.3s;
		width: 200px;
		height: 60px;
		font-family: NanumSquareEB;
		font-size: 20px;
		color: #fff;
		background-color: ${({ theme }) => theme.color.pointColor};
		border-radius: 4px;

		&:hover {
			background-color: ${({ theme }) => theme.hover.pointColorHover};
		}
	}
`;
