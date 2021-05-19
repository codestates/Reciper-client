import styled from 'styled-components';

export const LandingSixthContainer = styled.div`
	width: 100%;
`;

export const LandingSixthTop = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
`;

export const SvgWrapper = styled.svg`
	position: relative;
	z-index: 5;
	width: 1800px;
	height: 2300px;
`;

export const LandingSixthBottom = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	position: relative;
	bottom: 500px;
	width: 100%;
	min-height: 100vh;
	background-color: #eeeff2;
`;
