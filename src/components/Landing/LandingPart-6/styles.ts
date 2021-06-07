import styled from 'styled-components';
import { HiCode } from 'react-icons/hi';

export const LandingSixthContainer = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	position: relative;
	width: 100%;
`;

export const LandingSixthTop = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 100%;
	padding-top: 150px;
`;

// ---------------- TODO: Card ----------------

export const TopContentsWrapper = styled.div`
	${({ theme }) => theme.align.flexHorizontal};
	align-items: flex-start;
	flex-direction: column;
	width: 80vw;
`;

export const TopMessage = styled.div`
	font-family: NanumSquareEB;
	font-size: 10vw;
	color: ${({ theme }) => theme.color.lineColor};
`;

export const TopPersonalCardWrapper = styled.div`
	${({ theme }) => theme.align.flexVertical};
`;

export const PersonalCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 9vw;
	height: 11vw;
	margin: 0 10px;
	border: 0.3px solid ${({ theme }) => theme.color.lineColor};

	& > div {
		${({ theme }) => theme.align.flexCenter};
	}
`;

export const PersonalAvatar = styled.div`
	height: 80%;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};
	& > img {
		object-fit: cover;
		width: 90%;
		height: 90%;
	}
`;

export const PersonalCode = styled(HiCode)`
	height: 100%;
	font-size: 3.5vw;
	color: #333333;
`;

// ---------------- TODO: SVG ----------------

export const SvgWrapper = styled.svg`
	position: relative;
	z-index: 5;
	width: 80vw;
`;

// ---------------- TODO: Bottom ----------------

export const LandingSixthBottom = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 100%;
	height: 50vw;
	margin-top: -28vw;
	background-color: #eeeff2;

	& > div {
		padding: 12px;
		font-family: NanumSquareEB;
		font-size: 10vw;
		color: #555555;
	}

	& > p {
		font-size: NanumSquareB;
		font-size: 1.5vw;
		color: #777777;
	}
`;
