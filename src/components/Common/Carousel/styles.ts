import styled from 'styled-components';
import { default as Slider } from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const CarouselWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	max-width: 100vw;
	height: 30vw;
	padding-bottom: 2vw;
`;

export const CarouselContents = styled(Slider)`
	${({ theme }) => theme.align.flexCenter};
	width: 90vw;
	height: 30vw;
`;

export const CarouselItemWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};

	&: focus {
		outline: none;
	}
`;

export const CarouselItem = styled.div`
	overflow: hidden;
	padding: 2.4vw;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 5px;
`;

export const ItemName = styled.div`
	margin-bottom: 30px;
	font-family: NanumSquareB;
	font-size: 1.3vw;
	color: #c6c6c8;

	& > span {
		margin-left: 4px;
		color: ${({ theme }) => theme.color.pointColor};
	}
`;

export const ItemContent = styled.div`
	overflow: hidden;
	display: -webkit-box;
	word-wrap: normal;
	-webkit-line-clamp: 7;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	line-height: 1.8vw;
	font-family: NanumSquareR;
	font-size: 1.1vw;
	color: #444242;
`;

export const ArrowBack = styled(IoIosArrowBack)`
	position: relative;

	bottom: 5vw;
	transition: 0.3s;
	width: 3vw;
	font-size: 4vw;
	color: ${({ theme }) => theme.color.pointColor};

	&:hover {
		color: ${({ theme }) => theme.hover.pointColorHover};
	}
`;

export const ArrowForward = styled(IoIosArrowForward)`
	position: relative;
	bottom: 5vw;
	transition: 0.3s;
	width: 3vw;
	font-size: 4vw;
	color: ${({ theme }) => theme.color.pointColor};

	&:hover {
		color: ${({ theme }) => theme.hover.pointColorHover};
	}
`;

export const ViewMoreButton = styled.div`
	${({ theme }) => theme.align.flexVertical};
	justify-content: flex-end;
	cursor: pointer;
	margin-top: 12px;
	font-family: NanumSquareB;
	color: ${({ theme }) => theme.hover.pointColorHover};
	text-align: right;.
	font-size: 1.2vw;
`;

export const ViewMoreButtonIcon = styled(MdKeyboardArrowRight)``;

// -------------------TODO: 더 보기 모달창-------------------

export const ViewMoreContainer = styled.div`
	${({ theme }) => theme.align.positionCenter}
	width: 32vw;
	padding: 4vw;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const ViewMoreName = styled.div`
	margin-bottom: 1.8vw;
	font-family: NanumSquareB;
	font-size: 1.5vw;
	color: #c6c6c8;

	& > span {
		margin-left: 4px;
		color: ${({ theme }) => theme.color.pointColor};
	}
`;

export const ViewMoreContent = styled.div`
	line-height: 1.6em;
	font-family: NanumSquareR;
	font-size: 1.1vw;
	color: #444242;
`;

export const ModalCloseButton = styled(IoMdClose)`
	cursor: pointer;
	position: absolute;
	right: 60px;
	top: 40px;
	font-size: 1.2vw;
	color: #b6b6b8;

	&:hover {
		background-color: #e6e6e8;
		border-radius: 5px;
	}
`;
