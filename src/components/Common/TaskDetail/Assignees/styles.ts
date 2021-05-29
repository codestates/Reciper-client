import styled from 'styled-components';
import ProfileImage from '../../ProfileImage';

export const AssigneesWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	position: relative;
	margin-right: 20px;
	width: 50%;
	font-family: 'NanumSquareR';
`;

export const Title = styled.p`
	font-family: 'NanumSquareB';
	font-size: 16px;
`;

export const MemberWrap = styled.div`
	position: relative;
	display: flex;
`;

export const MemberImage = styled(ProfileImage)`
	position: absolute;
	right: 0;
`;

export const AddMemberBtn = styled.button`
	${({ theme }) => theme.align.flexCenter}
	width: 25px;
	height: 25px;
	margin-right: 10px;
	font-size: 20px;
	color: #a6a6a8;
	background-color: #e6e6e8;
	border-radius: 100%;
`;
