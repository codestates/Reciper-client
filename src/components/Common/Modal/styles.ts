import styled from 'styled-components';

export const Modalcontainer = styled.div`
	${({ theme }) => theme.align.positionCenter}
	position: fixed;
	z-index: 100;
`;

export const Dimed = styled.div`
	width: 100vw;
	height: 100vh;
	margin-top: -1px;
	background-color: rgba(0, 0, 0, 0.3);
`;
