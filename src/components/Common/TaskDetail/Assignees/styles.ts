import styled from 'styled-components';
import ProfileImage from '../../ProfileImage';

export const AssigneesWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	position: relative;
	margin-bottom: 20px;
	width: 49%;
	font-family: 'NanumSquareR';
`;

export const Title = styled.p`
	width: 80px;
	font-family: 'NanumSquareB';
	font-size: 16px;
`;

export const MemberWrap = styled.div`
	display: flex;
`;

export const MemberImage = styled(ProfileImage)`
	position: absolute;
	right: 0;
`;

export const AddMemberBtn = styled.button`
	${({ theme }) => theme.align.flexCenter}
	transition: 0.1s;
	width: 25px;
	height: 25px;
	margin-right: 10px;
	font-size: 20px;
	color: #a6a6a8;
	background-color: #e6e6e8;
	border-radius: 100%;

	&:hover {
		background-color: #dfdfdf;
		color: #a0a0a0;
	}
`;
