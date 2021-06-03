import styled from 'styled-components';
import { HiCode } from 'react-icons/hi';

export const LandingSixthContainer = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	position: relative;
	width: 100%;
	padding: 350px 0;
`;

export const LandingSixthTop = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	height: 2700px;
`;

// ---------------- TODO: Card ----------------

export const TopContentsWrapper = styled.div`
	${({ theme }) => theme.align.flexHorizontal};
	align-items: flex-start;
	flex-direction: column;
	margin-right: 580px;
`;

export const TopMessage = styled.div`
	font-family: NanumSquareEB;
	font-size: 160px;
	color: ${({ theme }) => theme.color.lineColor};
`;

export const TopPersonalCardWrapper = styled.div`
	${({ theme }) => theme.align.flexVertical};
`;

export const PersonalCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 160px;
	height: 220px;
	margin: 0 10px;
	border: 0.3px solid ${({ theme }) => theme.color.lineColor};

	& > div {
		${({ theme }) => theme.align.flexCenter};
	}
`;

export const PersonalAvatar = styled.div`
	height: 70%;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};

	& > img {
		object-fit: cover;
		width: 136px;
		height: 112px;
	}
`;

export const PersonalCode = styled(HiCode)`
	height: 80px;
	font-size: 72px;
	color: #333333;
`;

// ---------------- TODO: SVG ----------------

export const SvgWrapper = styled.svg`
	position: relative;
	z-index: 5;
	width: 1800px;
	height: 1800px;
`;

// ---------------- TODO: Bottom ----------------

export const LandingSixthBottom = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	position: absolute;
	bottom: 240px;
	width: 100%;
	min-height: 100vh;
	background-color: #eeeff2;

	& > div {
		padding: 12px;
		font-family: NanumSquareEB;
		font-size: 160px;
		color: #444444;
	}

	& > p {
		font-size: NanumSquareB;
		font-size: 24px;
		color: #777777;
	}
`;
