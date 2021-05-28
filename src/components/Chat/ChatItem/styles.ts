import styled, { css } from 'styled-components';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';

export const ChatWrapper = styled.div<{ isSameSender: boolean }>`
	position: relative;
	width: 100%;
	padding: 8px 20px;

	& > div {
		margin-right: 12px;
	}

	&:hover {
		background: #eee;
	}

	&:hover > span {
		opacity: 1;
	}

	${props =>
		props.isSameSender
			? css`
					display: flex;
					${({ theme }) => theme.align.flexVertical};
			  `
			: `
		display: flex;
	`}
`;

// ------------------TODO: 채팅 수정 및 삭제 버튼 모달 ------------------

export const ChatUpdateModal = styled.span`
	opacity: 0;
	${({ theme }) => theme.align.flexCenter};
	flex-direction: row;
	position: absolute;
	top: -16px;
	right: 40px;
	z-index: 10;
	width: 80px;
	height: 30px;
	background-color: #fff;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 30px;
`;

export const ChatEditbutton = styled(HiOutlinePencil)`
	cursor: pointer;
	margin: 0 2px;
	font-size: 22px;
	color: #555555;

	&:hover {
		color: ${({ theme }) => theme.color.pointColor};
	}
`;

export const ChatDeleteButton = styled(HiOutlineTrash)`
	cursor: pointer;
	margin: 0 2px;
	font-size: 22px;
	color: #555555;

	&:hover {
		color: ${({ theme }) => theme.color.warningColor};
	}
`;

export const ChatProfileImageWrapper = styled.div<{ isSameSender: boolean }>`
	position: relative;
	${props =>
		props.isSameSender
			? css`
					display: none;
			  `
			: `
		display: block;
	`}
`;

// ------------------TODO: 채팅 디테일 ------------------

export const ChatUserInfoWrapper = styled.div<{ isSameSender: boolean }>`
	${props =>
		props.isSameSender
			? css`
					display: none;
			  `
			: `
		display: block;
	`}
`;

export const ChatUserId = styled.span`
	margin-right: 8px;
	font-family: NanumSquareB;
	font-size: 16px;
`;

export const ChatCreatedAt = styled.span`
	font-family: NanumSquareB;
	font-size: 13px;
	color: #888888;
`;

export const ChatContent = styled.p<{ isSameSender: boolean }>`
	margin-top: 8px;
	font-family: NanumSquareR;
	font-size: 16px;

	${props =>
		props.isSameSender
			? css`
					margin: 0px 0px 0px 52px;
			  `
			: `
			margin-top: 8px;
	`}
`;

export const ChatNowDateHover = styled.span<{ isSameSender: boolean }>`
	opacity: 0;
	position: absolute;
	left: 4px;
	font-family: NanumSquareR;
	font-size: 13px;
	color: #6b6b6b;
	${props =>
		props.isSameSender
			? css`
					display: block;
			  `
			: `
		display: none;
`}
`;

// ------------------TODO: 채팅 삭제 시 모달 ------------------

export const ChatDeleteAlert = styled.div`
	${({ theme }) => theme.align.positionCenter}
	padding: 30px;
	background-color: #fff;
	border-radius: 3px;

	& > div {
		font-family: NanumSquareB;
		font-size: 20px;
		margin-bottom: 8px;
	}

	& > p {
		font-family: NanumSquareR;
		font-size: 16px;
		margin-bottom: 16px;
	}
`;

export const AlertChatItem = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: row;
	width: 440px;
	height: 80px;
	padding: 12px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const AlertChatItemUserInfoWrapper = styled.div`
	margin-left: 12px;
`;

export const AlertChatContent = styled.div`
	margin-top: 4px;
	font-family: NanumSquareR;
	font-size: 16px;
`;

export const AlertButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const AlertChatDeleteButton = styled.button`
	width: 65px;
	hegiht: 40px;
	margin-left: 12px;
	font-family: 'NanumSquareB';
	font-size: 14px;
	color: #fff;
	background-color: ${({ theme }) => theme.color.warningColor};
	border-radius: 3px;

	&:hover {
		transition: 0.1s;
		color: #ddd;
		background-color: #c91b1b;
	}
`;
