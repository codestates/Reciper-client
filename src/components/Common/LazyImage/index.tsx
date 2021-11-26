import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Props {
	src: string;
	alt: string;
}

const LazyImage = ({ src, alt }: Props): JSX.Element => {
	const observeTarget = useRef<HTMLImageElement>(null);

	const onLoadImg = useCallback(
		([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			if (!entry.isIntersecting || !observeTarget.current) return;
			observer.unobserve(entry.target);

			observeTarget.current.src = src;
			observeTarget.current.alt = alt;
		},
		[observeTarget],
	);

	const onLoaded = useCallback(() => {
		if (!observeTarget.current) return;

		observeTarget.current.classList.remove('lazy');
	}, [observeTarget]);

	useEffect(() => {
		const observer = new IntersectionObserver(onLoadImg, { threshold: 0 });

		observer.observe(observeTarget.current as Element);
	}, [observeTarget]);

	return <Img className="lazy" ref={observeTarget} onLoad={onLoaded} />;
};

export default LazyImage;

const Img = styled.img`
	&.lazy {
		width: 100%;
		height: 150px;
		background-color: #d6d6d8;
	}
`;
