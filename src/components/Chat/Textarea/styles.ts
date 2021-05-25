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

// --------------------TODO: 멘션 기능  --------------------

export const MentionsTextarea = styled(MentionsInput)`
	${({ theme }) => theme.align.flexVertical};
	outline: none;
	width: 100%;
	padding: 12px 0;
	font-family: NanumSquareR;
	font-size: 16px;

	& > strong {
		background: skyblue;
	}

	& > textarea {
		padding: 9px 10px !important;
		outline: none !important;
		border-radius: 4px !important;
		resize: none !important;
		line-height: 22px;
		border: none;
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
	width: 100%;
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
