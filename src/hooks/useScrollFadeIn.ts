import { useRef, useEffect, useCallback } from 'react';

interface Props {
	direction: string;
	duration: number;
	delay: number;
}

interface returnType {
	ref: React.MutableRefObject<any>;
	style: InitialStyleType;
}

interface InitialStyleType {
	opacity: number;
	transform?: string;
}

const useScrollFadeIn = ({ direction, duration, delay }: Props): returnType => {
	const element = useRef();

	const onDirection = (name: string) => {
		switch (name) {
			case 'up':
				return 'translate3d(0, 20%, 0)';
			case 'late-up':
				return 'translate3d(0, 50%, 0)';
			case 'down':
				return 'translate3d(0, -50%, 0)';
			case 'left':
				return 'translate3d(50%, 0, 0)';
			case 'short-left':
				return 'translate3d(30%, 0, 0)';
			case 'right':
				return 'translate3d(-50%, 0, 0)';
			default:
				return;
		}
	};

	const onScroll = useCallback(
		([entry]) => {
			const { current }: React.MutableRefObject<any> = element;
			if (entry.isIntersecting) {
				current.style.transitionProperty = 'all';
				current.style.transitionDuration = `${duration}s`;
				current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
				current.style.transitionDelay = `${delay}s`;
				current.style.opacity = 1;
				current.style.transform = 'translate3d(0, 0, 0)';
			}
		},
		[delay, duration],
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
		style: { opacity: 0, transform: onDirection(direction) },
	};
};

export default useScrollFadeIn;

useScrollFadeIn.defaultProps = {
	direction: 'up',
	duration: 1,
	delay: 0,
};
