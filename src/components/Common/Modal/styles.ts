import styled, { css } from 'styled-components';

export const Modalcontainer = styled.div`
	${({ theme }) => theme.align.positionCenter}
	position: fixed;
	z-index: 100;
`;

export const Dimed = styled.div<{ backgroundColor: boolean }>`
	width: 100vw;
	height: 100vh;
	margin-top: -1px;
	${props =>
		props.backgroundColor
			? css`
					background-color: rgba(0, 0, 0, 0.3);
			  `
			: `
			background-color: transparent;
	`}
`;
