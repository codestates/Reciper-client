import React, { useEffect, useState } from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import arrow from '../../../images/arrow.png';

import { Icon } from '@iconify/react';
import numberCircleOneBold from '@iconify/icons-ph/number-circle-one-bold';
import numberCircleTwoBold from '@iconify/icons-ph/number-circle-two-bold';
import numberCircleThreeBold from '@iconify/icons-ph/number-circle-three-bold';

import {
	ContentItemFirst,
	ContentMessage,
	LandingThirdContainer,
	ContentsWrapper,
	ContentSubMessage,
	ContentItemSecond,
	ContentItemThird,
	ArrowWrapper,
	NumberIconOne,
	NumberIconTwo,
	NumberIconThree,
} from './styles';

const LandingThird = (): JSX.Element => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const animatedItem = {
		numberOne: useScrollFadeIn({ direction: 'late-up', duration: 1, delay: 0.8 }),
		numberTwo: useScrollFadeIn({ direction: 'late-up', duration: 1, delay: 1.3 }),
		numberThree: useScrollFadeIn({ direction: 'late-up', duration: 1, delay: 1.8 }),
		listOne: useScrollFadeIn({ direction: 'right', duration: 1, delay: 0.5 }),
		listTwo: useScrollFadeIn({ direction: 'right', duration: 1, delay: 1.5 }),
		listThree: useScrollFadeIn({ direction: 'right', duration: 1, delay: 2 }),
	};

	const onScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<LandingThirdContainer>
				<div>
					<ContentMessage>여러분들만의 코드 레시피를 이렇게 만들어 보세요!</ContentMessage>
					<ContentSubMessage>
						함께 하고 싶은 팀원을 모집하고 만들고 싶은 프로젝트까지 레시퍼와 함께 하세요!
					</ContentSubMessage>
					<ArrowWrapper scrollPosition={scrollPosition}>
						<img src={arrow} />
						<div>
							<NumberIconOne {...animatedItem.numberOne}>
								<Icon icon={numberCircleOneBold} />
							</NumberIconOne>
							<NumberIconTwo {...animatedItem.numberTwo}>
								<Icon icon={numberCircleTwoBold} />
							</NumberIconTwo>
							<NumberIconThree {...animatedItem.numberThree}>
								<Icon icon={numberCircleThreeBold} />
							</NumberIconThree>
						</div>
					</ArrowWrapper>
					<div>
						<ContentsWrapper>
							<ContentItemFirst {...animatedItem.listOne}>
								<span>팀원을 모집하세요!</span>
								<p>
									레시퍼에서는 팀원을 직접 모집하거나, 마음에 드는 프로젝트에 참여할 수 있습니다. 팀원을 먼저
									찾아보세요.
								</p>
								<div />
							</ContentItemFirst>
							<ContentItemSecond {...animatedItem.listTwo}>
								<span>프로젝트를 생성해 보세요!</span>
								<p>어떤 프로젝트를 만들고 싶으신가요? 팀원들과 프로젝트 기획 논의를 해보세요.</p>
								<div />
							</ContentItemSecond>
							<ContentItemThird {...animatedItem.listThree}>
								<span>자! 이제는 여러분들만의 레시피를 만들 차례입니다!</span>
							</ContentItemThird>
						</ContentsWrapper>
					</div>
				</div>
			</LandingThirdContainer>
		</>
	);
};

export default LandingThird;
