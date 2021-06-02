import React, { useEffect, useState } from 'react';
import solo from '../../../images/solo.png';
import Parallax from 'react-rellax-wrapper';
import part2_1 from '../../../images/part2-1.png';
import part2_2 from '../../../images/part2-2.png';
import part2_3 from '../../../images/part2-3.png';

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
	CopyImageWrapper,
	SpeechBubbleWrapper,
} from '../LandingPart-2/styles';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

const LandingSecond = (): JSX.Element => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const animatedItem = {
		title: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.5 }),
		part2_1: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0 }),
		part2_2: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
		part2_3: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.4 }),
	};

	const onScroll = () => {
		setScrollPosition(window.pageYOffset);
		console.log('마우스 위치', window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<TopWrapper>
				<TopLeftMessage
					style={{
						opacity: `${scrollPosition > 1650 ? `0` : `1`}`,
						transition: `${scrollPosition > 1650 ? `0.5s` : `0`}`,
					}}
				>
					<Parallax speed={3}>
						<div style={{ opacity: `${(scrollPosition - 200) / 50}`, transition: '0.5s' }}>
							토이 프로젝트를 하고 싶은데 같이 할 사람을 찾고 계신가요?
						</div>
						<div style={{ opacity: `${(scrollPosition - 310) / 50}`, transition: '0.5s' }}>
							팀원들을 모집했는데 협업은 어디서 부터 해야할지 고민이신가요?
						</div>
						<div style={{ opacity: `${(scrollPosition - 410) / 50}`, transition: '0.5s' }}>
							넘치는 아이디어를 어디서 부터 시작해야 할지 고민이신가요?
						</div>
						<SolutionMessage style={{ opacity: `${(scrollPosition - 650) / 50}`, transition: '0.5s' }}>
							이제는 레시퍼에서 한 번에 해결하세요!
							<div style={{ opacity: `${(scrollPosition - 680) / 50}`, transition: '0.5s' }}>
								팀원들과 힘을 모아 각자의 코드로 하나의 프로젝트를 만들어 보세요!
							</div>
						</SolutionMessage>
					</Parallax>
				</TopLeftMessage>
				<ImageWrapper
					style={{
						opacity: `${scrollPosition < 630 ? `0` : `1`}`,
						display: `${scrollPosition > 1200 || scrollPosition < 150 ? `none` : `block`}`,
						position: 'fixed',
						top: '400px',
						left: '1113px',
						transition: '0.5s',
					}}
				>
					{/* scrollPosition > 1320 ||   */}
					<img src={solo} />
				</ImageWrapper>
			</TopWrapper>

			<BottomWrapper>
				<MessageWrapper>
					<MessageTitle {...animatedItem.title}>
						우리들에게 프로젝트는 하나의 <span>레시피</span>와 같습니다.
					</MessageTitle>
					<SubMessage style={{ opacity: `${(scrollPosition - 950) / 50}`, transition: '0.5s' }}>
						<div>결국 프로그래밍의 본질은 프로그램을 만드는 것 입니다.</div>
						<div>
							개발자들에게 코드는 재료와도 같습니다. 프로그램은 재료들을 모아 <br />
							하나의 완성된 레시피를 만드는 것과 유사합니다.
						</div>
						<div>
							토이 프로젝트는 즐겁게 프로그램을 만들자는 의미에서 생겨난 <br />
							개발자들만의 문화입니다.
						</div>
						<div>
							우리들의 목적은 다양한 사람들을 만나, 일정관리와 소통을 한 곳에서 <br />할 수 있도록 제공해주며,
						</div>
						<div>토이 프로젝트 문화를 발전시키는데에 있습니다.</div>
					</SubMessage>
				</MessageWrapper>
				<BottomImageWrapper>
					<SpeechBubbleWrapper>
						<img src={part2_1} style={{ opacity: `${(scrollPosition - 1050) / 50}`, transition: '0.5s' }} />
						<img src={part2_2} style={{ opacity: `${(scrollPosition - 1100) / 50}`, transition: '0.5s' }} />
						<img src={part2_3} style={{ opacity: `${(scrollPosition - 1150) / 50}`, transition: '0.5s' }} />
					</SpeechBubbleWrapper>
					<CopyImageWrapper
						style={{
							opacity: `${scrollPosition < 630 ? `0` : `1`}`,
							display: `${scrollPosition > 1200 || scrollPosition < 150 ? `block` : `none`}`,

							transition: '0.5s',
						}}
					>
						<img src={solo} />
					</CopyImageWrapper>
				</BottomImageWrapper>
			</BottomWrapper>
		</>
	);
};

export default LandingSecond;
