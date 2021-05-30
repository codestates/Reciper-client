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
	flex: 1;
	position: sticky;
	top: 14px;
	z-index: 10;
	width: 100%;

	& button {
		outline: none;
		position: relative;
		top: -14px;
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

export const DragOver = styled.div`
	${({ theme }) => theme.align.flexCenter}
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 1000;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	font-family: NanumSquareB;
	font-size: 40px;
`;
