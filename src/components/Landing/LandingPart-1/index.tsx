import React, { useCallback, useEffect, useRef, useState } from 'react';

import LoginModal from '../../Common/LoginModal';
import Modal from '../../Common/Modal';
import { useSelector } from 'react-redux';
import { getProfileInfoSelector } from '../../../reducer/profile';
import { Link } from 'react-router-dom';

import {
	LandingFirstContainer,
	FreeExpButton,
	MainMessage,
	SubMessage,
	ContentsWrapper,
	BackToTopButton,
	Dimed,
	BackToTopButtonWrapper,
	BackToTopIcon,
} from './styles';

const LandingFirst = (): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);

	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
	const BackToTopRef = useRef<HTMLDivElement>(null);

	const onScroll = useCallback((): void => {
		setScrollPosition(window.pageYOffset);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// TODO: 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<LandingFirstContainer
				ref={BackToTopRef}
				style={{
					background: `no-repeat center/cover url(${process.env.REACT_APP_SERVER_URL}/images/LandingMain2.webp)`,
				}}
			>
				<Dimed>
					<BackToTopButtonWrapper
						style={{
							opacity: `${scrollPosition > 100 ? `1` : `0`}`,
							transition: '0.3s',
						}}
						onClick={(): void => {
							if (BackToTopRef.current) {
								BackToTopRef.current.scrollIntoView({
									behavior: 'smooth',
								});
							}
						}}
					>
						<BackToTopButton>
							<BackToTopIcon />
						</BackToTopButton>
					</BackToTopButtonWrapper>
					<ContentsWrapper>
						<MainMessage>토이 프로젝트의 에센셜</MainMessage>
						<SubMessage>동료와 작업공간을 한 곳에서 만나보세요</SubMessage>
						<FreeExpButton>
							{profileInfo.isOpen ? (
								<button>
									<Link to="/project">레시피 바로가기</Link>
								</button>
							) : (
								<button onClick={() => setShowLoginModal(true)}>
									<p>빠른 시작</p>
								</button>
							)}
						</FreeExpButton>
					</ContentsWrapper>
				</Dimed>
				{showLoginModal && (
					<Modal setShowModal={setShowLoginModal}>
						<LoginModal />
					</Modal>
				)}
			</LandingFirstContainer>
		</>
	);
};

export default LandingFirst;
