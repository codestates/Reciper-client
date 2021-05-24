import styled from 'styled-components';

export const ChatWrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 8px 20px;

	& > div {
		margin-right: 12px;
	}

	&:hover {
		background: #eee;
	}
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

export const ChatContent = styled.p`
	margin-top: 8px;
	font-family: NanumSquareR;
	font-size: 16px;
`;
