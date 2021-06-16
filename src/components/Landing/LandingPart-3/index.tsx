import React, { useEffect, useState } from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

import { Icon } from '@iconify/react';
import numberCircleOneBold from '@iconify/icons-ph/number-circle-one-bold';
import numberCircleTwoBold from '@iconify/icons-ph/number-circle-two-bold';
import numberCircleThreeBold from '@iconify/icons-ph/number-circle-three-bold';

import {
	ContentItem,
	ContentMessage,
	ContentItemTitle,
	LandingThirdContainer,
	ContentsWrapper,
	ContentSubMessage,
	ArrowWrapper,
	NumberIcon,
	ContentItemEmoji,
} from './styles';

const LandingThird = (): JSX.Element => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const animatedItem = {
		numberOne: useScrollFadeIn({ direction: 'late-up', duration: 1, delay: 0.8 }),
		numberTwo: useScrollFadeIn({ direction: 'late-up', duration: 1, delay: 1.3 }),
		numberThree: useScrollFadeIn({ direction: 'late-up', duration: 1, delay: 1.8 }),
		listOne: useScrollFadeIn({ direction: 'right', duration: 0.2, delay: 0 }),
		listTwo: useScrollFadeIn({ direction: 'right', duration: 0.5, delay: 0.2 }),
		listThree: useScrollFadeIn({ direction: 'right', duration: 0.5, delay: 0.4 }),
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
						함께 하고 싶은 팀원을 모집하고 만들고 싶은 프로젝트까지 레시퍼와 함께 하세요<p>🙌</p>
					</ContentSubMessage>
					<ArrowWrapper scrollPosition={scrollPosition}>
						<img src={`${process.env.REACT_APP_SERVER_URL}/images/arrow.png`} />
						<div>
							<NumberIcon {...animatedItem.numberOne}>
								<Icon icon={numberCircleOneBold} />
							</NumberIcon>
							<NumberIcon {...animatedItem.numberTwo}>
								<Icon icon={numberCircleTwoBold} />
							</NumberIcon>
							<NumberIcon {...animatedItem.numberThree}>
								<Icon icon={numberCircleThreeBold} />
							</NumberIcon>
						</div>
					</ArrowWrapper>
					<div>
						<ContentsWrapper>
							<ContentItem {...animatedItem.listOne}>
								<ContentItemEmoji>👫</ContentItemEmoji>
								<ContentItemTitle>팀원을 모집하세요!</ContentItemTitle>
								<p>
									레시퍼에서는 팀원을 직접 모집하거나, 마음에 드는 프로젝트에 참여할 수 있습니다. 팀원을 먼저
									찾아보세요.
								</p>
								<img src={`${process.env.REACT_APP_SERVER_URL}/images/introCard1.gif`} />
							</ContentItem>
							<ContentItem {...animatedItem.listTwo}>
								<ContentItemEmoji>📂</ContentItemEmoji>
								<ContentItemTitle>프로젝트를 생성해 보세요!</ContentItemTitle>
								<p>
									팀원을 모집하셨나요? 그러면 멋진 아이디어로 프로젝트를 생성해 보세요! 어떤 프로젝트를 만들고
									싶으신가요?
								</p>
								<img src={`${process.env.REACT_APP_SERVER_URL}/images/introCard2.gif`} />
							</ContentItem>
							<ContentItem {...animatedItem.listThree}>
								<ContentItemEmoji>🎉</ContentItemEmoji>
								<ContentItemTitle>이제는 여러분들만의 레시피를 만들 차례입니다!</ContentItemTitle>
								<p>{'프로젝트를 생성하셨군요! 이제 팀원들과 즐겁게 프로젝트를 진행하는 일만 남았습니다! :)'} </p>
								<img src={`${process.env.REACT_APP_SERVER_URL}/images/introCard3.gif`} />
							</ContentItem>
						</ContentsWrapper>
					</div>
				</div>
			</LandingThirdContainer>
		</>
	);
};

export default LandingThird;
