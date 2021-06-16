import React, { useState } from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import LoginModal from '../../Common/LoginModal';
import Modal from '../../Common/Modal';
import { LandingEighthContainer, LoginButton, Message, MessageWrapper } from './styles';

const LandingEighth = (): JSX.Element => {
	const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

	const AnimatedItem = {
		message: useScrollFadeIn({ direction: 'late-up', duration: 1.2, delay: 0 }),
		button: useScrollFadeIn({ direction: 'late-up', duration: 0.8, delay: 0.5 }),
	};

	return (
		<LandingEighthContainer>
			<MessageWrapper>
				<Message {...AnimatedItem.message}>새로운 가치를 창출할 때 성장은 이루어집니다</Message>
				<div {...AnimatedItem.button}>
					<LoginButton onClick={() => setShowLoginModal(true)}>
						<p>바로 시작하기</p>
					</LoginButton>
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
