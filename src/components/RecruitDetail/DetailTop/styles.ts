import styled from 'styled-components';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegCommentDots } from 'react-icons/fa';

export const DetailTopContainer = styled.div`
	padding: 0 20px 40px;
	text-align: center;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const DetailTopTitle = styled.h1`
	font-family: 'NanumSquareB';
	font-size: 40px;
	margin-bottom: 10px;
`;

export const DetailTopInfo = styled.div`
	${({ theme }) => theme.align.flexCenter}
	margin-bottom: 20px;
	font-size: 14px;
	color: #888;
	& > span {
		${({ theme }) => theme.align.flexVertical}
		margin-right: 10px;
	}
`;

export const DetailSimpleIntro = styled.p`
	font-size: 16px;
`;

export const DetailViewIcon = styled(IoEyeOutline)`
	margin-right: 5px;
`;
export const DetailCommentIcon = styled(FaRegCommentDots)`
	margin-right: 5px;
`;
