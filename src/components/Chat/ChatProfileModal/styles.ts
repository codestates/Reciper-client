import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChatProfileModalWrapper = styled.div`
	position: absolute;
	top: 115px;
	bottom: 0;
	left: 372px;
	right: 0;
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

export const ProfileImage = styled.div``;

export const PrfileModalBottomWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 140px;
	padding: 12px 20px;
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
	dispaly: flex;
	align-items: center;
	height: 100%;

	& > div {
		margin-bottom: 6px;
	}
`;

export const GoToProfileLink = styled(Link)`
	color: ${({ theme }) => theme.color.pointColor};

	&:hover {
		color: ${({ theme }) => theme.hover.pointColorHover};
	}
`;
