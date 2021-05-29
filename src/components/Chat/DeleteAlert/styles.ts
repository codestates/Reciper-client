import styled from 'styled-components';

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
