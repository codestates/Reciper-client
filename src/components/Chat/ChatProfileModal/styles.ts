import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChatProfileModalWrapper = styled.div`
	overflow: hidden;
	width: 240px;
	height: 330px;
	font-family: NanumSquareR;
	background-color: #fff;
	border: 1px solid #a6a6a6;
	border-radius: 4px;
	box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
`;

export const ProfileModalTopWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 100%;
	height: 180px;
	background-color: #eee;
`;

export const PrfileModalBottomWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 150px;
	padding: 20px 20px;
	background-color: #fff;
	color: #333333;
`;

export const ProfileModalUserName = styled.div`
	margin-bottom: 6px;
	font-family: NanumSquareB;
	font-size: 24px;
	color: #333333;
`;

export const ProfileModalUserAboutMe = styled.div`
	margin-bottom: 20px;
	color: #333333;
`;

export const LinkWrapper = styled.div`
	${({ theme }) => theme.align.flexVertical};
	justify-content: space-between;
	width: 100%;
	height: 100%;
	font-family: NanumSquareB;
`;

export const GoToProfileLink = styled(Link)`
	width: 100%;
	padding: 8px;
	color: #333333;
	text-align: center;
	background-color: #fff;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 4px;

	&:hover {
		transition: 0.1s;
		color: #eee;
		background-color: ${({ theme }) => theme.color.pointColor};
		border: none;
	}
`;

export const ProfileModalLink = styled(Link)`
	width: 95px;
	padding: 8px;
	color: #333333;
	text-align: center;
	background-color: #fff;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 4px;

	&:hover {
		transition: 0.1s;
		color: #eee;
		background-color: ${({ theme }) => theme.color.pointColor};
		border: none;
	}
`;
