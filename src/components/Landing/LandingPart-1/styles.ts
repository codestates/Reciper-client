import styled from 'styled-components';
import langdingTestImage from '../../../images/landingTestImage.png';

export const LandingFirstContainer = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 100%;
	min-height: 100vh;
	background: no-repeat center/cover url(${langdingTestImage});
`;

export const ContentsWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter}
	flex-direction: column;
	width: 100%;
`;

export const MainMessage = styled.div`
	${({ theme }) => theme.align.flexCenter}
	margin-bottom: 10px;
	font-family: NanumSquareB;
	font-size: 80px;
	color: #fff;
`;

export const SubMessage = styled.div`
	${({ theme }) => theme.align.flexCenter}
	margin-bottom: 40px;
	font-family: NanumSquareR;
	font-size: 30px;
	color: #545454;
`;

export const FreeExpButton = styled.div`
	${({ theme }) => theme.align.flexCenter}
`;
