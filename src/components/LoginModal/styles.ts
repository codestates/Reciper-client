import styled from 'styled-components';
import { IoLogoGithub } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';

export const LoginModalContainer = styled.div`
	${({ theme }) => theme.align.positionCenter}
	width: 440px;
	padding: 50px;
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const LoginTitle = styled.p`
	font-family: 'NanumSquareR';
	font-size: 26px;
	margin-bottom: 20px;
`;

export const EmailLoginForm = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 100%;

	& > input {
		width: calc(100% - 65px);
		height: 40px;
		padding: 0 10px;
		font-family: 'NanumSquareR';
		border: 1px solid ${({ theme }) => theme.color.lineColor};
		border-right: none;
		border-radius: 3px 0 0 3px;

		&::placeholder {
			font-size: 14px;
			color: ${({ theme }) => theme.color.lineColor};
		}
	}
	& > button {
		transition: 0.1s;
		width: 65px;
		height: 40px;
		font-family: 'NanumSquareB';
		font-size: 14px;
		color: #fff;
		background-color: ${({ theme }) => theme.color.pointColor};
		border-radius: 0 3px 3px 0;

		&:hover {
			background-color: ${({ theme }) => theme.hover.pointColorHover};
		}
	}
`;

export const Line = styled.div`
	width: 100%;
	height: 1px;
	margin: 29.5px 0;
	background-color: ${({ theme }) => theme.color.lineColor};
`;

export const OAuthLoginFrom = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexVertical}
	width: 100%;
	height: 40px;
	font-family: 'NanumSquareR';
	font-size: 14px;

	border-radius: 3px;
`;

export const GoogleLoginBtn = styled(OAuthLoginFrom)`
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	margin-bottom: 10px;
`;
export const GithubLoginBtn = styled(OAuthLoginFrom)`
	margin-bottom: 50px;
	background-color: #374151;
	color: #fff;
`;

export const GoogleIcon = styled(FcGoogle)`
	width: 17px;
	height: 17px;
	margin: 0 10px;
`;
export const GithubIcon = styled(IoLogoGithub)`
	width: 17px;
	height: 17px;
	margin: 0 10px;
`;

export const LoginGuideText = styled.p`
	width: 100%;
	font-family: 'NanumSquareR';
	font-size: 14px;
	text-align: right;

	& > span {
		cursor: pointer;
		margin-left: 5px;
		color: ${({ theme }) => theme.color.pointColor};
	}
`;
