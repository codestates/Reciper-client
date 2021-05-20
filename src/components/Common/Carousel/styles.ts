import styled from 'styled-components';
import { default as Slider } from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const CarouselWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	max-width: 1800px;
	height: 800px;
	padding-top: 120px;
`;

export const CarouselContents = styled(Slider)`
	${({ theme }) => theme.align.flexCenter};

	width: 90%;
	height: 600px;
`;

export const CarouselItemWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	height: 600px;

	&: focus {
		outline: none;
	}
`;

export const CarouselItem = styled.div`
	overflow: hidden;
	height: 450px;
	padding: 52px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 5px;
`;

export const ItemName = styled.div`
	margin-bottom: 30px;
	font-family: NanumSquareB;
	font-size: 24px;
	color: #c6c6c8;

	& > span {
		color: ${({ theme }) => theme.color.pointColor};
	}
`;

export const ItemContent = styled.div`
	overflow: hidden;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-line-clamp: 7;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	line-height: 1.6em;
	height: 245px;
	font-family: NanumSquareR;
	font-size: 22px;
	color: #444242;
`;

export const ArrowBack = styled(IoIosArrowBack)`
	position: relative;
	right: 58px;
	bottom: 132px;
	transition: 0.3s;
	font-size: 80px;
	color: ${({ theme }) => theme.color.pointColor};

	&:hover {
		color: ${({ theme }) => theme.hover.pointColorHover};
	}
`;

export const ArrowForward = styled(IoIosArrowForward)`
	position: relative;
	bottom: 132px;
	transition: 0.3s;
	font-size: 80px;
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
	font-size: 16px;
`;

export const ViewMoreButtonIcon = styled(MdKeyboardArrowRight)`
	font-size: 20px;
`;
