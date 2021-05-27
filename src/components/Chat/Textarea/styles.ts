import styled from 'styled-components';
import { MentionsInput } from 'react-mentions';
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
	padding: 4px 12px;
	font-family: NanumSquareR;
	font-size: 14px;
`;

// --------------------TODO: 멘션, 사진, 전송 컨테이너  --------------------

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

// --------------------TODO: 멘션 기능  --------------------

export const MentionsTextarea = styled(MentionsInput)`
	outline: none;
	width: 100%;
	font-family: NanumSquareR;
	font-size: 18px;

	& > div {
		margin-top: -4px;
	}

	& > strong {
		background: skyblue;
	}

	& > textarea {
		outline: none;
		resize: none !important;
		line-height: 22px;
		height: 44px;
		padding: 9px 10px !important;
		border: none;
		border-radius: 4px;
	}

	& > ul {
		overflow-y: auto;
		width: 150px;
		max-height: 200px;
		padding: 9px 10px;
		background: #fff;
		border: 1px solid lightgray;
		border-radius: 4px;
	}
`;

export const MentionList = styled.button<{ focus: boolean }>`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: column;
	width: 32px;
	padding: 12px 10px;
	font-size: 20px;
	color: rgb(28, 29, 28);
	background: transparent;
	border: none;
	border-radius: 3px;

	& > div {
		display: flex;
		flex-direction: row;
		margin-bottom: 8px;

		& img {
			margin-right: 12px;
		}
	}

	${({ focus }) =>
		focus &&
		`
	display: flex;
	align-items: center;
	font-family: NanumSquareR;
	color: #333333;
	background: #f6f6f8;
`};
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
