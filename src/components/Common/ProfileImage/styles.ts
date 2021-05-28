import styled, { css } from 'styled-components';

export const UserProfileImage = styled.img<{ width: string; margin: string; radius: boolean }>`
	cursor: pointer;
	object-fit: cover;
	${({ theme }) => theme.align.flexCenter}
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};
	${props =>
		props.radius
			? css`
					border-radius: 100%;
			  `
			: `
		border-radius: 0;
	`}
`;

export const UserProfileDefault = styled.div<{ width: string; height: string; margin: string; radius: boolean }>`
	cursor: pointer;
	${({ theme }) => theme.align.flexCenter}
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};
	${props =>
		props.radius
			? css`
					border-radius: 100%;
			  `
			: `
		border-radius: 0;
	`}

	& > span {
		${({ theme }) => theme.align.flexCenter}
		font-family: 'NanumSquareR';
		color: #fff;
	}
`;
