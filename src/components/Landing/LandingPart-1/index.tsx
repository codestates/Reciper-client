import React from 'react';

import Button from '../../Common/Button';

import { LandingFirstContainer, FreeExpButton, MainMessage, SubMessage, ContentsWrapper } from './styles';

const LandingFirst = (): JSX.Element => {
	const onLogin = () => {
		// TODO: 무료체험 버튼 클릭시 모달창?
		console.log('');
	};

	return (
		<>
			<LandingFirstContainer>
				<ContentsWrapper>
					<MainMessage>토이 프로젝트의 에센셜</MainMessage>
					<SubMessage>동료와 작업공간을 한 곳에서 만나보세요</SubMessage>
					<FreeExpButton>
						<button onClick={onLogin}>무료 체험하기</button>
					</FreeExpButton>
				</ContentsWrapper>
			</LandingFirstContainer>
		</>
	);
};

export default LandingFirst;
