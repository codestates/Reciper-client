import styled from 'styled-components';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { GoMention } from 'react-icons/go';
import { BsImages } from 'react-icons/bs';

export const ChatAreaContainer = styled.div`
	${({ theme }) => theme.align.flexVertical};
	width: 100%;
	padding: 20px;
`;

export const ChatArea = styled.div`
	display: flex;
	width: 100%;
	margin: 0 auto;
	padding: 4px 12px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;
`;

export const ChatForm = styled.div`
	${({ theme }) => theme.align.flexVertical};
	width: 100%;
	padding: 4px 0;
	font-family: NanumSquareR;
	font-size: 14px;
`;

export const ChatTextarea = styled.textarea`
	overflow-y: auto;
	${({ theme }) => theme.align.flexVertical};
	position: relative;
	resize: none;
	line-height: 26px;
	width: 100%;
	height: 26px;
	font-family: NanumSquareR;
	font-size: 18px;
`;

// --------------------TODO: 사진, 전송 컨테이너  --------------------

export const ChatContentsWrapper = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: row;
	height: 34px;

	&.off > button {
		transition: 0.2s;
		background-color: transparent;
	}

	&.onValue > button {
		transition: 0.2s;
		background-color: ${({ theme }) => theme.color.pointColor};
	}
`;

// --------------------TODO: 전송 버튼  --------------------

export const SendChatBox = styled.button`
	${({ theme }) => theme.align.flexCenter};
	width: 34px;
	height: 34px;
	border-radius: 3px;

	&.off > svg {
		transition: 0.1s;
		color: ${({ theme }) => theme.color.lineColor};
		background-color: transparent;
		border: 0px;
	}

	&.onValue > svg {
		transition: 0.1s;
		color: #fff;
	}
`;

export const SendChatButton = styled(RiSendPlane2Fill)`
	font-size: 20px;
`;

export const ChatMention = styled(GoMention)`
	cursor: pointer;
	margin-right: 4px;
	width: 34px;
	height: 34px;
	padding: 8px;
	color: #696565;
	border-radius: 4px;

	&:hover {
		color: #333333;
		background: #eee;
	}
`;

export const ChatImageUpload = styled(BsImages)`
	cursor: pointer;
	margin-right: 4px;
	width: 34px;
	height: 34px;
	padding: 8px;
	color: #696565;
	border-radius: 4px;

	&:hover {
		color: #333333;
		background: #eee;
	}
`;
