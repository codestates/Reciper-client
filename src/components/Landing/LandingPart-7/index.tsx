import React from 'react';
import useScrollCount from '../../../hooks/useScrollCount';
import Carousel from '../../Common/Carousel';
import { LandingSeventhContainer, UserCounter, UserCountWrapper } from './styles';

const LandingSeventh = (): JSX.Element => {
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
			<div>
				<Carousel />
			</div>
		</LandingSeventhContainer>
	);
};

export default LandingSeventh;
