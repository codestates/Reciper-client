import styled from 'styled-components';

export const LandingEighthContainer = styled.div`
	width: 100%;
	height: 110vh;
	font-family: NanumSquareEB;
	background-color: #222222;
`;

export const MessageWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 100%;
	height: 100%;
	font-size: 3vw;
	color: #fff;
`;

export const Message = styled.div`
	${({ theme }) => theme.align.flexCenter};
	transition: 0.5s;
	margin-bottom: 4vw;
`;

export const LoginButton = styled.button`
	${({ theme }) => theme.align.flexCenter};
	width: 12vw;
	heigth: 30vw;
	padding: 0.6vw;
	font-family: NanumSquareEB;
	font-size: 1.4vw;
	color: #111;
	background-color: #fff;
	border-radius: 4px;

	& > p {
		margin-top: 0.2vw;
	}

	&:hover {
		color: #000;
		background-color: #c6c6c8;
	}
`;
