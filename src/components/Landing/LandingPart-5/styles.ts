import styled from 'styled-components';
import { AiOutlineHome, AiOutlineLine } from 'react-icons/ai';
import { RiArrowLeftSFill } from 'react-icons/ri';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { BsImages } from 'react-icons/bs';

export const LandingFifthContainer = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 100%;
	min-height: 240vh;
	background-color: #24272c;
`;

export const ServiceMessage = styled.div`
	width: 40vw;
	margin-bottom: 80px;
	font-family: NanumSquareEB;
	font-size: 2.2vw;
	color: #fff;
	text-align: center;

	& > div {
		line-height: 2vw;
		margin-top: 1.2vw;
		font-family: 'NanumSquarB';
		font-size: 1.2vw;
	}
`;

export const ServiceBackground = styled.div`
	${({ theme }) => theme.align.flexHorizontal};
	width: 75vw;
	height: 100%;
	background-color: #1c1f3b;
	border-radius: 3px;
`;

export const ServiceMenu = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: column;
	width: 3vw;
	font-size: 2.5vw;
	color: #fff;
`;

export const ServiceMenuHome = styled(AiOutlineHome)`
	margin-top: 32px;
	font-size: 1.6vw;
`;

export const ServiceMenuLine = styled(AiOutlineLine)`
	font-size: 2.2vw;
`;

export const ServiceMenuChat = styled.div`
	${({ theme }) => theme.align.flexCenter};
	position: relative;
	padding: 1vw 0;
	font-size: 1.8vw;
`;

export const ServiceMenuKanban = styled.div`
	${({ theme }) => theme.align.flexCenter};
	padding: 1.5vw 0;
	font-size: 1.5vw;
`;

export const ServiceMenuCalendar = styled.div`
	${({ theme }) => theme.align.flexCenter};
	padding: 1.5vw 0;
	font-size: 1.2vw;
`;

export const ServiceChatArrow = styled(RiArrowLeftSFill)`
	position: absolute;
	left: 1.2vw;
	font-size: 2vw;
	color: #fff;
`;

export const ServiceContent = styled.div`
	width: 75vw;
	height: 100%;
	background-color: #fff;
	border-radius: 20px 3px 3px 0px;
`;

export const CommnetInitSetting = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: row;
	width: 28vw;
	min-height: 5vw;
	padding: 0.7vw;
	border-radius: 10px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

	& > img {
		width: 7vw;
		height: 7vw;
		border: 2px solid #eee;
		border-radius: 100%;
	}

	& > div {
		height: 5vw;
		margin-left: 1vw;
		font-family: NanumSquareR;

		& > div {
			margin-top: 8px;
		}
	}
`;

export const RightComment = styled(CommnetInitSetting)`
	margin: 8vw 0 0 40vw;
`;

export const LeftComment = styled(CommnetInitSetting)`
	margin: 8vw 0 0 4vw;
`;

export const ChatUserName = styled.span`
	margin-right: 12px;
	font-family: NanumSquareEB;
	font-size: 1.6vw;
	color: #555555;
`;

export const ChatCreateAt = styled.span`
	font-family: NanumSquareR;
	font-size: 0.8vw;
	color: #888888;
`;

export const ChatUserContent = styled.div`
	font-family: NanumSquareB;
	font-size: 1vw;
	color: #222222;
`;

export const ChatInputWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	padding: 20px 0;

	& > div {
		${({ theme }) => theme.align.flexVertical};
		justify-content: flex-end;
		width: 65vw;
		height: 5vh;
		margin-top: 4vw;
		padding: 0 8px;
		border: 1px solid ${({ theme }) => theme.color.lineColor};
		border-radius: 5px;
	}
`;

export const ChatSendWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 2vw;
	height: 2vw;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.color.lineColor};
`;

export const ChatUploadImage = styled(BsImages)`
	margin-right: 16px;
	width: 2vw;
	height: 2vw;
	color: #898585;
`;

export const ChatSendButton = styled(RiSendPlane2Fill)`
	font-size: 1.5vw;
	color: #fff;
`;
