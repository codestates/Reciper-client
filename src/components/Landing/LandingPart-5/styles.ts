import styled from 'styled-components';
import { BiCalendarCheck } from 'react-icons/bi';
import { BsKanban, BsChatDots } from 'react-icons/bs';
import { TiHomeOutline } from 'react-icons/ti';
import { AiOutlineLine } from 'react-icons/ai';
import { RiArrowLeftSFill } from 'react-icons/ri';
import { RiSendPlane2Fill } from 'react-icons/ri';

export const LandingFifthContainer = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 100%;
	min-height: 180vh;
	padding: 20px 60px 140px 60px;
	background-color: #24272c;
`;

export const ServiceMessage = styled.div`
	margin-bottom: 80px;
	font-family: NanumSquareB;
	font-size: 40px;
	color: #fff;
	text-align: center;

	& > div {
		margin-top: 20px;
		font-size: 28px;
	}
`;

export const ServiceBackground = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 1400px;
	height: 1040px;
	background-color: #1c1f3b;
	border-radius: 3px;
`;

export const ServiceMenu = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: column;
	width: 80px;
	height: 1040px;
	margin-top: 28px;
	font-size: 28px;
	color: #fff;
`;

export const ServiceMenuHome = styled(TiHomeOutline)`
	margin-top: 10px;
	font-size: 32px;
`;

export const ServiceMenuLine = styled(AiOutlineLine)``;

export const ServiceMenuCalendar = styled(BiCalendarCheck)`
	margin: 10px 0;
	font-size: 34px;
`;

export const ServiceMenuKanban = styled(BsKanban)`
	margin: 10px 0;
`;

export const ServiceMenuChat = styled(BsChatDots)`
	margin: 10px 0;
`;

export const ServiceArrowWrapper = styled.span`
	margin-top: -52px;
`;

export const ServiceChatArrow = styled(RiArrowLeftSFill)`
	margin-left: 74px;
	font-size: 40px;
	color: #fff;
`;

export const ServiceContent = styled.div`
	width: 1320px;
	height: 1040px;

	background-color: #fff;
	border-radius: 20px 3px 3px 3px;
`;

export const CommnetInitSetting = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: row;
	width: 600px;
	min-height: 132px;
	padding: 12px;
	border-radius: 10px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

	& > img {
		width: 108px;
		height: 108px;
	}

	& > div {
		height: 108px;
		margin-left: 16px;
		font-family: NanumSquareR;

		& > div {
			margin-top: 8px;
		}
	}
`;

export const RightComment = styled(CommnetInitSetting)`
	margin: 150px 0 0 680px;
`;

export const LeftComment = styled(CommnetInitSetting)`
	margin: 150px 0 0 40px;
`;

export const ChatUserName = styled.span`
	font-family: NanumSquareB;
	font-size: 28px;
	margin-right: 12px;
`;

export const ChatCreateAt = styled.span`
	font-family: NanumSquareR;
	font-size: 16px;
	color: #888888;
`;

export const ChatUserContent = styled.div`
	font-family: NanumSquareR;
	font-size: 20px;
	color: #222222;
`;

export const ChatInputWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};

	& > div {
		${({ theme }) => theme.align.flexVertical};
		justify-content: flex-end;
		width: 1260px;
		height: 50px;
		margin-top: 100px;

		border: 1px solid ${({ theme }) => theme.color.lineColor};
	}
`;

export const ChatSendWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 40px;
	height: 40px;
	margin-right: 4px;
	background-color: ${({ theme }) => theme.color.lineColor};
`;

export const ChatSendButton = styled(RiSendPlane2Fill)`
	font-size: 24px;
	color: #fff;
`;
