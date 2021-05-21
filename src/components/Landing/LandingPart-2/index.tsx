import React, { useEffect, useState } from 'react';
import solo from '../../../images/solo.png';
import Parallax from 'react-rellax-wrapper';

import {
	TopWrapper,
	BottomWrapper,
	TopLeftMessage,
	ImageWrapper,
	SolutionMessage,
	SubMessage,
} from '../LandingPart-2/styles';

const LandingSecond = (): JSX.Element => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

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
					<Parallax speed={5}>
						<div style={{ opacity: `${(scrollPosition - 400) / 50}`, transition: '0.5s' }}>
							토이 프로젝트를 하고 싶은데 같이 할 사람을 찾고 계신가요?
						</div>
						<div style={{ opacity: `${(scrollPosition - 510) / 50}`, transition: '0.5s' }}>
							팀원들과 협업을 어디서 해야할지 막막 하시다구요?
						</div>
					</Parallax>
				</TopLeftMessage>

				<ImageWrapper
					style={{
						display: `${scrollPosition > 2000 || scrollPosition < 100 ? `none` : `block`}`,
						position: 'relative',
						bottom: '700px',
						opacity: `${scrollPosition > 1750 || scrollPosition < 740 ? `0` : `1`}`,
						transition: '0.3s',
					}}
				>
					<Parallax speed={-10}>
						<img src={solo}></img>
					</Parallax>
				</ImageWrapper>
			</TopWrapper>

			<BottomWrapper>
				<div>
					<SolutionMessage style={{ opacity: `${(scrollPosition - 1560) / 50}`, transition: '0.5s' }}>
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
