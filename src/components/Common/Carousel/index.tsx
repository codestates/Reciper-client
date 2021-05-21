import React, { CSSProperties, MouseEventHandler, useState } from 'react';
import dummyData from './dummyData';

import {
	CarouselContents,
	CarouselItem,
	CarouselItemWrapper,
	CarouselWrapper,
	ArrowBack,
	ArrowForward,
	ItemName,
	ItemContent,
	ViewMoreButton,
	ViewMoreButtonIcon,
	ModalContainer,
	Dimed,
	ViewMoreContainer,
	ViewMoreName,
	ViewMoreContent,
} from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props: {
	className?: string;
	style?: CSSProperties;
	onClick?: MouseEventHandler<HTMLDivElement>;
}): JSX.Element => {
	const { className, style, onClick } = props;

	return (
		<div
			className={className}
			style={{
				...style,
				zIndex: 1,
			}}
			onClick={onClick}
		>
			<ArrowForward />
		</div>
	);
};

const PrevArrow = (props: {
	className?: string;
	style?: CSSProperties;
	onClick?: MouseEventHandler<HTMLDivElement>;
}): JSX.Element => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				zIndex: 1,
			}}
			onClick={onClick}
		>
			<ArrowBack />
		</div>
	);
};

const Carousel = (): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [centerCard, setCenterCard] = useState<number>(0);

	const Settings = {
		className: 'center',
		centerMode: true,
		arrows: true,
		focusOnSelect: true,
		infinite: true,
		draggable: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		// autoplaySpeed: 4000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current: number, next: number) => setCenterCard(next),
	};

	return (
		<CarouselWrapper>
			<CarouselContents {...Settings}>
				{dummyData.map((dummy, index: number) => (
					<CarouselItemWrapper key={index}>
						<CarouselItem
							style={{
								transform: `${index === centerCard ? 'scale(1)' : 'scale(0.8)'}`,
								opacity: `${index === centerCard ? '1' : '0.5'}`,
								transition: '0.3s',
								boxShadow: 'rgb(24 71 23 / 15%) 0px 5px 25px',
							}}
						>
							<ItemName>
								{dummy.name} <span>레시퍼님</span>
							</ItemName>
							<ItemContent>{dummy.content}</ItemContent>
							<ViewMoreButton onClick={() => setShowModal(true)}>
								더 보기
								<ViewMoreButtonIcon />
							</ViewMoreButton>
						</CarouselItem>
					</CarouselItemWrapper>
				))}
			</CarouselContents>
			{showModal && (
				<ModalContainer>
					<Dimed onClick={() => setShowModal(false)}>
						<ViewMoreContainer>
							<ViewMoreName></ViewMoreName>
							<ViewMoreContent></ViewMoreContent>
						</ViewMoreContainer>
					</Dimed>
				</ModalContainer>
			)}
		</CarouselWrapper>
	);
};

export default Carousel;
