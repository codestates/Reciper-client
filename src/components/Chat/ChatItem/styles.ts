import styled, { css } from 'styled-components';

export const ChatWrapper = styled.div<{ isSameSender: boolean }>`
	width: 100%;
	padding: 8px 20px;

	& > div {
		margin-right: 12px;
	}

	&:hover {
		background: #eee;
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

export const ChatProfileImageWrapper = styled.div<{ isSameSender: boolean }>`
	${props =>
		props.isSameSender
			? css`
					display: none;
			  `
			: `
		display: block;
	`}
`;

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
