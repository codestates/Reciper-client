import styled from 'styled-components';

export const UserProfileImage = styled.img<{ width: string; height: string }>`
	cursor: pointer;
	${({ theme }) => theme.align.flexCenter}
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: 100%;
`;

export const UserProfileDefault = styled.div<{ width: string; height: string }>`
	cursor: pointer;
	${({ theme }) => theme.align.flexCenter}
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: 100%;

	& > span {
		${({ theme }) => theme.align.flexCenter}
		font-family: 'NanumSquareR';
		color: #fff;
	}
`;
