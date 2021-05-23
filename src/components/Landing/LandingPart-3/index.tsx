import React from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

import { ContentItem, ContentMessage, LandingThirdContainer, ContentsWrapper } from './styles';

const LandingThird = (): JSX.Element => {
	const animatedItem = {
		one: useScrollFadeIn({ direction: 'right', duration: 1, delay: 0 }),
		two: useScrollFadeIn({ direction: 'right', duration: 1, delay: 0.2 }),
		three: useScrollFadeIn({ direction: 'right', duration: 1, delay: 0.4 }),
	};

	return (
		<>
			<LandingThirdContainer>
				<div>
					<ContentMessage>여러분들만의 코드 레시피를 이렇게 만들어 보세요!</ContentMessage>
					<div>함께 하고 싶은 팀원을 모집하고 만들고 싶은 프로젝트까지 레시퍼와 함께 하세요!</div>
					<div>
						<ContentsWrapper>
							<ContentItem {...animatedItem.one}>
								리쿠르트 페이지
								<br />
								팀원들 모집하는 이미지
							</ContentItem>
							<ContentItem {...animatedItem.two}>
								프로젝트 생성 페이지
								<br />
								프로젝트 생성 이미지
							</ContentItem>
							<ContentItem {...animatedItem.three}>워크스페이스 이미지</ContentItem>
						</ContentsWrapper>
					</div>
				</div>
			</LandingThirdContainer>
		</>
	);
};

export default LandingThird;
