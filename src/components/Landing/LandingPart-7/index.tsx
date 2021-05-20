import React from 'react';
import useScrollCount from '../../../hooks/useScrollCount';
import Carousel from '../../Common/Carousel';
import { LandingSeventhContainer, UserCounter, UserCountWrapper, UserReviewWrapper } from './styles';

const LandingSeventh = (): JSX.Element => {
	// const end = Number(String(Date.now()).slice(-2)) + 138226;
	const countUserNumber = useScrollCount({ end: 168226, start: 107826, duration: 3500, delay: 0 });
	return (
		<LandingSeventhContainer>
			<UserCountWrapper>
				<div>
					현재 <UserCounter {...countUserNumber} />
					명의 레시퍼분들과 함께
				</div>
				<div>서로의 미래를 만들어 가고 있습니다</div>
			</UserCountWrapper>
			<UserReviewWrapper>
				<Carousel />
			</UserReviewWrapper>
		</LandingSeventhContainer>
	);
};

export default LandingSeventh;
