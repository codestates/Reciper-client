import React, { useEffect, useState } from 'react';
import useScrollCount from '../../../hooks/useScrollCount';
import Carousel from '../../Common/Carousel';
import {
	LandingSeventhContainer,
	UserContentWrapper,
	UserCounter,
	UserCountMessage,
	WingLeft,
	WingRightWrapper,
	WingRight,
	WingLeftWrapper,
} from './styles';

const LandingSeventh = (): JSX.Element => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const countUserNumber = useScrollCount({ end: 168226, start: 107826, duration: 3500, delay: 0 });

	const onScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<LandingSeventhContainer>
			<UserContentWrapper>
				<WingLeftWrapper scrollPosition={scrollPosition}>
					<WingLeft />
				</WingLeftWrapper>
				<UserCountMessage>
					<div>
						현재 <UserCounter {...countUserNumber} />
						명의 레시퍼분들과 함께
					</div>
					<div>서로의 미래를 만들어 가고 있습니다</div>
				</UserCountMessage>
				<WingRightWrapper scrollPosition={scrollPosition}>
					<WingRight />
				</WingRightWrapper>
			</UserContentWrapper>
			<div>
				<Carousel />
			</div>
		</LandingSeventhContainer>
	);
};

export default LandingSeventh;
