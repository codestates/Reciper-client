import styled, { css } from 'styled-components';

export const InputTag = styled.input<{ width: string; height: string; margin: string }>`
	padding: 0 10px;
	margin: ${({ margin }) => margin};
	font-family: 'NanumSquareR';
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&::placeholder {
		color: ${({ theme }) => theme.color.lineColor};
	}

	${({ width }) =>
		width === 'short'
			? css`
					width: 250px;
			  `
			: css`
					width: 100%;
			  `}

	${({ height }) =>
		height === 'short'
			? css`
					height: 32px;
					font-size: 13px;
			  `
			: css`
					height: 40px;
					font-size: 16px;
			  `}
`;
