import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../Common/Header';
import LandingFirst from '../LandingPart-1';
import LandingSecond from '../LandingPart-2';
import LandingThird from '../LandingPart-3';
import LandingFourth from '../LandingPart-4';
import LandingFifth from '../LandingPart-5';
import LandingSixth from '../LandingPart-6';
import LandingSeventh from '../LandingPart-7';
import LandingEighth from '../LandingPart-8';

const LandingHome = (): JSX.Element => {
	const [isScroll, setIsScroll] = useState<boolean>(false);

	const onScrollEvent = useCallback(() => {
		if (window.pageYOffset > 0) {
			setIsScroll(true);
		}
		if (window.pageYOffset === 0) {
			setIsScroll(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('mousewheel', onScrollEvent);
		return () => {
			// TODO: 메모리 누수 방지
			window.removeEventListener('mousewheel', onScrollEvent);
		};
	}, []);

	/* TODO:
	1번째: 메인 화면
	2번째: 문제 제시
	3번째: 서비스 소개
	추가 GIF
	4번째: 캘린더, 칸반보드 소개
	5번째: 채팅 소개
	6번째: 핵심 글귀
	7번째: 웹사이트 평가
	8번째: 마무리 및 로그인 버튼
	*/

	return (
		<>
			<Header
				isScrollBackground={isScroll}
				isScrollShadow={isScroll}
				isScrollTransition={isScroll}
				isLineColor={isScroll}
			/>
			<LandingFirst />
			<LandingSecond />
			<LandingThird />
			<LandingFourth />
			<LandingFifth />
			<LandingSixth />
			<LandingSeventh />
			<LandingEighth />
		</>
	);
};

export default LandingHome;
