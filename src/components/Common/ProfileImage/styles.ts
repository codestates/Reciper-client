import styled from 'styled-components';

export const UserProfileImage = styled.img<{ width: string; margin: string }>`
	cursor: pointer;
	object-fit: cover;
	${({ theme }) => theme.align.flexCenter}
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};
	border-radius: 100%;
`;

export const UserProfileDefault = styled.div<{ width: string; height: string; margin: string }>`
	cursor: pointer;
	${({ theme }) => theme.align.flexCenter}
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};
	border-radius: 100%;

	& > span {
		${({ theme }) => theme.align.flexCenter}
		font-family: 'NanumSquareR';
		color: #fff;
	}
`;
