import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
	width: 100%;
`;

export const CardContainer = styled(Link)`
	transition: 0.2s;
	width: 286px;
	margin: 10px;
	padding: 30px 20px 20px;
	font-family: 'NanumSquareR';
	border: 1px solid #e6e6e8;
	border-radius: 2px;

	&:hover {
		transform: scale(1.01);
		box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
	}
`;

export const ProjectImageWrap = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 100%;
	height: 70px;
`;

export const ProjectImage = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 40px;
	height: 40px;
	color: #fff;
	font-size: 20px;
	margin-bottom: 40px;
	background-color: #d44646;
	border-radius: 2px;
`;

export const ProjectName = styled.p`
	font-size: 18px;
	color: #000;
	margin-bottom: 10px;
`;

export const ProjectUrl = styled.p`
	padding-bottom: 10px;
	margin-bottom: 10px;
	font-size: 14px;
	color: #666;
	border-bottom: 1px solid #e6e6e8;
`;

export const ProjectEditLink = styled(Link)`
	font-size: 14px;
	color: #666;
`;
