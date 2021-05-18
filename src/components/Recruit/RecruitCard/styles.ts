import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegCommentDots } from 'react-icons/fa';

export const CardContainer = styled(Link)`
	width: 410px;
	margin: 20px;
	font-family: 'NanumSquareR';
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
	transition: 0.3s;
	border-radius: 3px;
	overflow: hidden;

	&:hover {
		transform: translateY(-10px);
	}
`;
export const CardImgContainer = styled.div`
	overflow: hidden;
	${({ theme }) => theme.align.flexCenter}
	width: 100%;
	height: 120px;

	& > img {
		width: 100%;
	}
`;

export const CardInfoContainer = styled.div`
	width: 100%;
	padding: 20px 30px;
`;

export const CardInfoTitle = styled.div`
	margin-bottom: 15px;
	font-family: 'NanumSquareB';
	font-size: 17px;
	color: #000;
`;

export const CardInfoWriter = styled.div`
	${({ theme }) => theme.align.flexVertical}
	margin-bottom: 15px;
	font-size: 14px;
	color: #888;

	& > span {
		${({ theme }) => theme.align.flexVertical}
	}
`;

export const CardViewIcon = styled(IoEyeOutline)`
	margin: 0 5px 0 15px;
`;

export const CardCommentIcon = styled(FaRegCommentDots)`
	font-size: 12px;
	margin: 0 5px;
`;

export const CardInfoContent = styled.div`
	height: 36px;
	margin-bottom: 30px;
	font-size: 16px;
	color: #666;
`;

export const CardInfoStackContainer = styled.div`
	height: 66px;
	margin-bottom: 20px;
`;

export const CardTimeStamp = styled.div`
	font-size: 14px;
	color: #888;
`;
