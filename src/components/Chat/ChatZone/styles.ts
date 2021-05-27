import styled from 'styled-components';

export const ChatZoneContainer = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
`;

export const ChatList = styled.section`
	width: 100%;
	margin-top: 20px;
	border-top: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const ChatDateHeader = styled.div`
	${({ theme }) => theme.align.flexHorizontal};
	position: sticky;
	top: 14px;
	flex: 1;
	width: 100%;

	& button {
		outline: none;
		position: relative;
		top: -14px;
		z-index: 10;
		height: 28px;
		line-height: 28px;
		padding: 0 16px;
		font-family: 'NanumSquareB';
		font-size: 14px;
		background: #fff;
		border: 1px solid ${({ theme }) => theme.color.lineColor};
		border-radius: 24px;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
	}
`;
