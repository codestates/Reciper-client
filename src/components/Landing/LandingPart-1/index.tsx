import React, { useEffect, useRef, useState } from 'react';
import BackToTop from '../../../images/BackToTop.gif';

import {
	LandingFirstContainer,
	FreeExpButton,
	MainMessage,
	SubMessage,
	ContentsWrapper,
	BackToTopButton,
	Dimed,
} from './styles';

const LandingFirst = (): JSX.Element => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const BackToTopRef = useRef<HTMLDivElement>(null);

	const onScroll = (): void => {
		setScrollPosition(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// TODO: 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onLogin = () => {
		// TODO: 무료체험 버튼 클릭시 모달창?
		console.log('');
	};

	return (
		<>
			<LandingFirstContainer ref={BackToTopRef}>
				<Dimed>
					<BackToTopButton
						style={{
							opacity: `${scrollPosition > 100 ? `1` : `0`}`,
							color: `${
								(scrollPosition > 100 && scrollPosition < 2325) || (scrollPosition > 5875 && scrollPosition < 10184)
									? `#000`
									: `#fff`
							}`,
							transition: '0.3s',
						}}
						onClick={(): void => {
							if (BackToTopRef.current) {
								BackToTopRef.current.scrollIntoView({
									behavior: 'smooth',
								});
							}
						}}
					>
						<img src={BackToTop} />
						<p>맨위로</p>
					</BackToTopButton>
					<ContentsWrapper>
						<MainMessage>토이 프로젝트의 에센셜</MainMessage>
						<SubMessage>동료와 작업공간을 한 곳에서 만나보세요</SubMessage>
						<FreeExpButton>
							<button onClick={onLogin}>
								<p>무료 체험하기</p>
							</button>
						</FreeExpButton>
					</ContentsWrapper>
				</Dimed>
			</LandingFirstContainer>
		</>
	);
};

export default LandingFirst;
