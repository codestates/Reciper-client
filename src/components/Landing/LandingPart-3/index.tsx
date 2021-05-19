import React from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import landingPart3_Test from '../../../images/landingPart3_Test.jpg';

import { ContentItem, ContentMessage, LandingThirdContainer, ContentsWrapper } from './styles';

const LandingThird = (): JSX.Element => {
	const animatedItem = {
		one: useScrollFadeIn({ direction: 'left', duration: 1, delay: 0 }),
		two: useScrollFadeIn({ direction: 'left', duration: 1, delay: 0.2 }),
		three: useScrollFadeIn({ direction: 'left', duration: 1, delay: 0.4 }),
	};

	return (
		<>
			<LandingThirdContainer>
				<div style={{ width: '70%' }}>
					<ContentMessage>여러분들만의 코드 레시피를 이렇게 만들어 보세요!</ContentMessage>
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
