import styled from 'styled-components';

export const UserProfileImage = styled.img<{ width: string; margin: string; radius: string }>`
	cursor: pointer;
	object-fit: cover;
	-webkit-user-drag: none;
	${({ theme }) => theme.align.flexCenter}
	min-width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};
	border-radius: ${({ radius }) => radius};
`;

export const UserProfileDefault = styled.div<{ width: string; height: string; margin: string; radius: string }>`
	cursor: pointer;
	${({ theme }) => theme.align.flexCenter}
	min-width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};
	border-radius: ${({ radius }) => radius};

	& > span {
		${({ theme }) => theme.align.flexCenter}
		font-family: 'NanumSquareR';
		color: #fff;
	}
`;
