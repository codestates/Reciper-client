import React, { MutableRefObject, useCallback, useEffect, useRef } from 'react';

interface Props {
	end: number;
	start: number;
	duration: number;
	delay: number;
}

interface returnType {
	ref: React.MutableRefObject<any>;
}

const useScrollCount = ({ end, start, duration }: Props): returnType => {
	const element = useRef();
	const observer: MutableRefObject<null | any> = useRef(null);
	const countTime = Math.abs(Math.floor(duration / (end - start)));

	const onScroll = useCallback(
		([entry]) => {
			const { current }: MutableRefObject<undefined | any> = element;

			// TODO: 화면이랑 교차 되는 시점에 시작한다.
			if (entry.isIntersecting) {
				let currentNumber = start;
				const counter = setInterval(() => {
					currentNumber += 100;
					current.innerHTML = currentNumber;

					if (currentNumber === end) {
						// TODO: count stop
						clearInterval(counter);
						if (observer.current !== null) {
							observer.current.disconnect(element.current);
						}
					}
				}, countTime);
			}
		},
		[end, start, element, countTime],
	);

	useEffect(() => {
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
