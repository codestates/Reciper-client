import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const InviteMemberWrap = styled.div`
	${({ theme }) => theme.align.positionCenter}
	width: 540px;
	padding: 50px;
	background-color: #fff;
	font-family: 'NanumSquareR';
	border-radius: 3px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.p`
	font-family: 'NanumSquareB';
	font-size: 25px;
	margin-bottom: 30px;
`;

export const InfoText = styled.p`
	font-family: 'NanumSquareB';
	font-size: 18px;
	margin-bottom: 20px;
`;

export const StateMessage = styled.p`
	font-size: 14px;
	height: 16px;
	margin: 5px 0;
	padding: 0 10px;
	color: ${({ theme }) => theme.color.warningColor};
`;

export const InviteList = styled.div`
	overflow: auto;
	width: 100%;
	max-height: 200px;
	margin-bottom: 20px;

	&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 50px;
	}
`;

export const InviteItemEmail = styled.p`
	font-size: 14px;
`;

export const DeleteInviteItem = styled(IoCloseOutline)`
	font-size: 14px;
	color: #888;
`;

export const SuccessText = styled.p`
	color: ${({ theme }) => theme.color.pointColor};
`;

export const InviteBtnWrap = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
`;
