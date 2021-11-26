import React, { useCallback, useEffect, useState } from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import LazyImage from '../../Common/LazyImage';

import {
	TopWrapper,
	BottomWrapper,
	TopLeftMessage,
	ImageWrapper,
	SolutionMessage,
	SubMessage,
	MessageWrapper,
	MessageTitle,
	BottomImageWrapper,
	NaviImageWrapper,
	SpeechBubbleWrapper,
	LandingSecondContainer,
} from '../LandingPart-2/styles';

const LandingSecond = (): JSX.Element => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const animatedItem = {
		questions: useScrollFadeIn({ direction: 'up', duration: 0.5, delay: 0.5 }),
		navigation: useScrollFadeIn({ direction: 'up', duration: 0.5, delay: 0 }),
	};

	const onScroll = useCallback(() => {
		setScrollPosition(window.pageYOffset);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<LandingSecondContainer>
			<TopWrapper>
				<TopLeftMessage
					style={{
						opacity: `${scrollPosition > 1650 ? `0` : `1`}`,
						transition: `${scrollPosition > 1650 ? `0.5s` : `0`}`,
					}}
				>
					<div>
						<div style={{ opacity: `${(scrollPosition - 200) / 50}`, transition: '0.5s' }}>
							토이 프로젝트를 하고 싶은데 같이 할 사람을 찾고 계신가요?
						</div>
						<div style={{ opacity: `${(scrollPosition - 310) / 50}`, transition: '0.5s' }}>
							팀원들을 모집했는데 협업은 어디서 부터 해야할지 고민이신가요?
						</div>
						<div style={{ opacity: `${(scrollPosition - 410) / 50}`, transition: '0.5s' }}>
							넘치는 아이디어를 어디서 부터 시작해야 할지 고민이신가요?
						</div>
						<SolutionMessage style={{ opacity: `${(scrollPosition - 700) / 50}`, transition: '0.5s' }}>
							이제는 레시퍼에서 한 번에 해결하세요!
							<div style={{ opacity: `${(scrollPosition - 730) / 50}`, transition: '0.5s' }}>
								팀원모집부터 협업 툴까지 모두 제공합니다!
							</div>
						</SolutionMessage>
					</div>
				</TopLeftMessage>

				<ImageWrapper {...animatedItem.questions}>
					<LazyImage src={`${process.env.REACT_APP_SERVER_URL}/images/questions.svg`} alt="질문 이미지" />
				</ImageWrapper>
			</TopWrapper>

			<BottomWrapper>
				<div>
					<MessageWrapper>
						<MessageTitle style={{ opacity: `${(scrollPosition - 1000) / 50}`, transition: '0.5s' }}>
							우리들에게 프로젝트는 하나의 <span>레시피</span>와 같습니다.
						</MessageTitle>
						<SubMessage style={{ opacity: `${(scrollPosition - 1050) / 50}`, transition: '0.5s' }}>
							<div>결국 프로그래밍의 본질은 프로그램을 만드는 것 입니다.</div>
							<div>개발자들에게 코드는 재료와도 같습니다.</div>
							<div>
								프로그램은 재료 들을 모아 하나의 완성된 레시피를 <br />
								만드는 것과 유사합니다.
							</div>
							<div>
								토이 프로젝트는 즐겁게 프로그램을 만들자는 의미에서 생겨
								<br />난 개발자들만의 문화입니다.
							</div>
							<div>
								우리들의 목적은 다양한 사람들을 만나, 일정관리와 소통을
								<br /> 한 곳에서 할 수 있도록 제공해주며,
							</div>
							<div>토이 프로젝트 문화를 발전시키는데에 있습니다.</div>
						</SubMessage>
					</MessageWrapper>
					<BottomImageWrapper>
						<SpeechBubbleWrapper scrollPosition={scrollPosition}>
							<LazyImage src={`${process.env.REACT_APP_SERVER_URL}/images/part2-1.png`} alt="Speech Bubble 이미지" />
							<LazyImage src={`${process.env.REACT_APP_SERVER_URL}/images/part2-2.png`} alt="Speech Bubble 이미지" />
							<LazyImage src={`${process.env.REACT_APP_SERVER_URL}/images/part2-3.png`} alt="Speech Bubble 이미지" />
						</SpeechBubbleWrapper>
						<NaviImageWrapper {...animatedItem.navigation}>
							<LazyImage src={`${process.env.REACT_APP_SERVER_URL}/images/navigation.svg`} alt="안내 이미지" />
						</NaviImageWrapper>
					</BottomImageWrapper>
				</div>
			</BottomWrapper>
		</LandingSecondContainer>
	);
};

export default LandingSecond;
