import React, { useEffect, useRef, useState } from 'react';
import solo from '../../../images/solo.png';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

import Rellax from 'rellax';

import {
	TopWrapper,
	BottomWrapper,
	TopLeftMessage,
	ImageWrapper,
	SolutionMessage,
	SubMessage,
} from '../LandingPart-2/styles';

const LandingSecond = (): JSX.Element => {
	const rellaxRef = useRef<HTMLDivElement>(null);
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const onScroll = () => {
		setScrollPosition(window.pageYOffset);
		console.log('마우스 위치', window.pageYOffset);
	};

	useEffect(() => {
		if (rellaxRef.current) {
			new Rellax(rellaxRef.current, {
				speed: -6,
			});
		}

		window.addEventListener('scroll', onScroll);
		// 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const animation = useScrollFadeIn({ direction: 'late-up', duration: 2, delay: 0 });

	return (
		<>
			<TopWrapper>
				<TopLeftMessage
					ref={rellaxRef}
					style={{
						opacity: `${scrollPosition > 1695 ? `0` : `1`}`,
						transition: `${scrollPosition > 1695 ? `0.5s` : `0`}`,
					}}
				>
					<div style={{ opacity: `${(scrollPosition - 400) / 50}`, transition: '0.5s' }}>
						토이 프로젝트를 하고 싶은데 같이 할 사람을 찾고 계신가요?
					</div>
					<div style={{ opacity: `${(scrollPosition - 510) / 50}`, transition: '0.5s' }}>
						팀원들과 협업을 어디서 해야할지 막막 하시다구요?
					</div>
				</TopLeftMessage>

				<ImageWrapper
					style={{
						display: `${scrollPosition > 3000 ? `none` : `block`}`,
						position: 'fixed',
						top: '200px',
						right: '220px',
						opacity: `${scrollPosition > 1760 || scrollPosition < 780 ? `0` : `1`}`,
						transition: '0.5s',
					}}
				>
					<img src={solo} {...animation}></img>
				</ImageWrapper>
			</TopWrapper>

			<BottomWrapper>
				<div>
					<SolutionMessage style={{ opacity: `${(scrollPosition - 1560) / 50}`, transition: '1s' }}>
						이제는 레시퍼에서 한 번에 해결하세요!
					</SolutionMessage>
					<SubMessage>
						<div>팀원들과 힘을 모아 각자의 코드로 하나의 레시피를 만들어 보세요!</div>
						<br />
						<div>
							우리들에게 프로젝트는 하나의 <span>레시피</span>와 같습니다.
						</div>
						<br />
						<div>코딩 친구와 협업 스킬을 한 곳에서 !</div>
					</SubMessage>
				</div>
			</BottomWrapper>
		</>
	);
};

export default LandingSecond;
