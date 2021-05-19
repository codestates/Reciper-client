import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
	width: 100%;
`;

export const MyInfoContainer = styled.div`
	display: flex;
	width: 920px;
	padding-top: 132px;
	margin-bottom: 40px;
`;

export const MyProfileImage = styled.div`
	width: 80px;
	height: 80px;
	margin: 0 20px 0 10px;
`;

export const MyInfoContentWrap = styled.div`
	font-family: 'NanumSquareR';
`;

export const MyName = styled.p`
	font-family: 'NanumSquareB';
	font-size: 26px;
	margin-bottom: 12px;
`;

export const MyEmail = styled.p`
	font-size: 14px;
	margin-bottom: 5px;
`;

export const MyProfileLink = styled(Link)`
	font-size: 14px;
`;
