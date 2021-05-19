import React, { MouseEventHandler, useCallback, useState } from 'react';
import ReciperLogo from '../../../images/Logo.png';

import { Link } from 'react-router-dom';

import LoginModal from '../../LoginModal';
import Modal from '../Modal';

import { HeaderContainer, HeaderRight, LoginBtn, LogoWrapper, Nav, Logo } from './styles';
import HeaderProfile from '../HeaderProfile';
import HeaderUserMenu from '../HeaderUserMenu';

interface Props {
	isScrollBackground: boolean;
	isScrollShadow: boolean;
	isScrollTransition: boolean;
	isLineColor: boolean;
}

const Header = ({ isScrollBackground, isScrollShadow, isScrollTransition, isLineColor }: Props): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const loginSuccess = window.localStorage.getItem('loginSuccess');

	const onCloseMenu: MouseEventHandler<HTMLDivElement> = useCallback(e => {
		e.stopPropagation();
		setShowModal(false);
	}, []);

	return (
		<>
			<HeaderContainer
				isScrollBackground={isScrollBackground}
				isScrollShadow={isScrollShadow}
				isScrollTransition={isScrollTransition}
			>
				<LogoWrapper href="http://localhost:3000/landing">
					<Logo src={ReciperLogo} />
					Reciper
				</LogoWrapper>
				<HeaderRight>
					<Nav isLineColor={isLineColor}>
						<Link to="/recruit">팀원모집</Link>
						<Link to="/project">레시피 프로젝트</Link>
					</Nav>
					<LoginBtn onClick={() => setShowModal(true)}>
						<HeaderProfile loginSuccess={loginSuccess} />
					</LoginBtn>
				</HeaderRight>
			</HeaderContainer>
			{showModal &&
				(loginSuccess ? (
					<HeaderUserMenu show={showModal} setShowModal={setShowModal} onClose={onCloseMenu} />
				) : (
					<Modal setShowModal={setShowModal}>
						<LoginModal />
					</Modal>
				))}
		</>
	);
};
export default Header;

Header.defaultProps = {
	isScrollBackground: 'false',
	isScrollShadow: 'false',
	isScrollTransition: 'false',
	isLineColor: 'false',
};
