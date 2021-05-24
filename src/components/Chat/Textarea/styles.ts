import styled from 'styled-components';
import { MentionsInput } from 'react-mentions';
import { RiSendPlane2Fill } from 'react-icons/ri';

export const ChatArea = styled.div`
	display: flex;
	width: 100%;
	padding: 20px;
`;

export const ChatForm = styled.div`
	${({ theme }) => theme.align.flexVertical};
	width: 100%;
	padding: 0 12px;
	font-family: NanumSquareR;
	font-size: 14px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&.off > button {
		transition: 0.1s;
		background-color: transparent;
	}

	&.onValue > button {
		transition: 0.1s;
		background-color: ${({ theme }) => theme.color.pointColor};
	}
`;

export const MentionsTextarea = styled.input`
	outline: none;
	line-height: 22px;
	width: 100%;
	height: 44px;

	font-family: NanumSquareR;
	font-size: 14px;
`;

export const SendChatBox = styled.button`
	${({ theme }) => theme.align.flexCenter};
	width: 34px;
	height: 34px;
	border-radius: 3px;

	&.off > svg {
		transition: 0.1s;
		background-color: transparent;
		border: 0px;
		color: ${({ theme }) => theme.color.lineColor};
	}

	&.onValue > svg {
		transition: 0.1s;
		color: #fff;
	}
`;

export const SendChatButton = styled(RiSendPlane2Fill)`
	font-size: 20px;
`;
