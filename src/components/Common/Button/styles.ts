import styled, { css } from 'styled-components';

export const ButtonTag = styled.button<{ size: string; backgroundColor: string; buttonType: string; margin: string }>`
	transition: 0.1s;
	height: 40px;
	margin: ${({ margin }) => margin};
	font-family: 'NanumSquareB';
	color: #fff;
	border-radius: 3px;

	${({ size }) =>
		size === 'small' &&
		css`
			width: 65px;
			font-size: 14px;
		`}

	${({ size }) =>
		size === 'medium' &&
		css`
			width: 107px;
			font-size: 16px;
		`}

  ${({ size }) =>
		size === 'large' &&
		css`
			width: 167px;
			font-size: 16px;
		`}
		${({ backgroundColor }) =>
		backgroundColor === 'basic'
			? css`
					background-color: #478bff;
					&:hover {
						background-color: #2569ee;
					}
			  `
			: `
		background-color: #F35656;
		&:hover {
			background-color: #c91b1b;
		}
		
		`}
    
  ${({ buttonType }) =>
		buttonType === 'cancel' &&
		css`
			color: ${({ theme }) => theme.color.lineColor};
			background-color: rgba(255, 255, 255, 0);
			border: 1px solid ${({ theme }) => theme.color.lineColor};

			&:hover {
				transition: 0.1s;
				color: ${({ theme }) => theme.color.warningColor};
				background-color: rgba(255, 255, 255, 0);
				border: 1px solid ${({ theme }) => theme.color.warningColor};
			}
		`}
`;
