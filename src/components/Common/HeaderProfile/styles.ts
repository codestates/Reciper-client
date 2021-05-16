import styled from 'styled-components';

export const HeaderProfileImage = styled.img`
	cursor: pointer;
	${({ theme }) => theme.align.flexCenter}
	width: 30px;
	height: 30px;
	border-radius: 100%;

	& > span {
		${({ theme }) => theme.align.flexCenter}
		color: #fff;
	}
`;

export const HeaderProfileDefault = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexCenter}
	width: 30px;
	height: 30px;
	border-radius: 100%;

	& > span {
		${({ theme }) => theme.align.flexCenter}
		color: #fff;
	}
`;
