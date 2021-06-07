import React, { useEffect, useState } from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import LoginModal from '../../Common/LoginModal';
import Modal from '../../Common/Modal';
import { LandingEighthContainer, LoginButton, Message, MessageWrapper } from './styles';

const LandingEighth = (): JSX.Element => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

	const AnimatedItem = {
		message: useScrollFadeIn({ direction: 'late-up', duration: 1.2, delay: 0 }),
		button: useScrollFadeIn({ direction: 'late-up', duration: 0.8, delay: 0.5 }),
	};

	console.log(scrollPosition);
	const onScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<LandingEighthContainer>
			<MessageWrapper>
				<Message {...AnimatedItem.message}>새로운 가치를 창출할 때 성장은 이루어집니다</Message>
				<div {...AnimatedItem.button}>
					<LoginButton onClick={() => setShowLoginModal(true)}>바로 시작하기</LoginButton>
				</div>
			</MessageWrapper>
			{showLoginModal && (
				<Modal setShowModal={setShowLoginModal}>
					<LoginModal />
				</Modal>
			)}
		</LandingEighthContainer>
	);
};

export default LandingEighth;
