import React, { useCallback, useLayoutEffect, useRef } from 'react';

interface Props {
	end: number;
	start: number;
	duration: number;
	delay: number;
}

interface returnType {
	ref: React.RefObject<HTMLDivElement>;
}

const useScrollCount = ({ end, start, duration }: Props): returnType => {
	const element = useRef<HTMLDivElement>(null);
	const countTime = Math.abs(Math.floor(duration / (end - start)));

	const onScroll: IntersectionObserverCallback = useCallback(
		([entry]) => {
			const { current }: React.RefObject<HTMLDivElement> = element;

			// TODO: 화면이랑 교차 되는 시점에 시작한다.
			if (entry.isIntersecting && current) {
				let currentNumber = start;
				const counter = setInterval(() => {
					currentNumber += 100;
					current.innerHTML = String(currentNumber);

					if (currentNumber === end) {
						// TODO: count stop
						clearInterval(counter);
					}
				}, countTime);
			}
		},
		[end, start, element, countTime],
	);

	useLayoutEffect(() => {
		let observer: IntersectionObserver;

		if (element.current) {
			observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
			// TODO: 옵져버 시작
			observer.observe(element.current as unknown as Element);
		}

		// TODO: 옵져버 중지
		return () => observer && observer.disconnect();
	}, [onScroll]);

	return {
		ref: element,
	};
};

export default useScrollCount;

useScrollCount.defaultProps = {
	delay: 0,
};
