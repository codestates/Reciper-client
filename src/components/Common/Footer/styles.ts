import { IoIosArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
	${({ theme }) => theme.align.flexCenter}
	flex-direction: column;
	width: 100%;
	min-height: 30vh;
	font-family: NanumSquareB;
	background: #eee;
`;

export const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 40%;
	margin-bottom: 1.5vw;
	padding: 1.8vw 0 1.2vw 0;
`;

export const LogoWrapper = styled.div`
	margin-top: -8px;
	font-family: 'Pacifico';
	font-size: 26px;
	color: ${({ theme }) => theme.color.pointColor};

	& > img {
		margin: 0 6px -6px 0;
	}
`;

export const Adress = styled.div`
	padding-top: 0.5vw;
	font-family: NanumSquareB;
	font-size: 0.7vw;
	color: #545959;
`;

export const AboutUs = styled.div`
	& > p {
		padding-bottom: 0.6vw;
	}

	& > a {
		${({ theme }) => theme.align.flexVertical}
		display: block;
		padding: 0.2vw 0;
		color: #545959;

		&:hover {
			color: ${({ theme }) => theme.color.pointColor};
		}
	}
`;

export const Contact = styled.div`
	& > p {
		padding-bottom: 0.6vw;
	}

	& > a {
		display: block;
		padding: 0.2vw 0;
		color: #545959;

		&:hover {
			color: ${({ theme }) => theme.color.pointColor};
		}
	}
`;

export const LinkArrow = styled(IoIosArrowRoundForward)`
	font-size: 20px;
`;

export const Copyright = styled.div`
	width: 40%;
	padding: 10px 0;
	color: #888;
	font-size: 0.7vw;
	text-align: center;
	border-top: 1px solid ${({ theme }) => theme.color.lineColor};
`;
