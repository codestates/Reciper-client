import React, { MouseEventHandler, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ProfileImage from '../ProfileImage';
import LoginModal from '../../LoginModal';
import HeaderUserMenu from '../HeaderUserMenu';
import Modal from '../Modal';

import ReciperLogo from '../../../images/Logo.png';

import { getProfileInfoSelector } from '../../../reducer/profile';

import { HeaderContainer, HeaderRight, LoginBtn, LogoWrapper, Nav, Logo } from './styles';

interface Props {
	isScrollBackground: boolean;
	isScrollShadow: boolean;
	isScrollTransition: boolean;
	isLineColor: boolean;
}

const Header = ({ isScrollBackground, isScrollShadow, isScrollTransition, isLineColor }: Props): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const loginSuccess = window.localStorage.getItem('loginSuccess');
	const { uploadImage, name, profileColor } = useSelector(getProfileInfoSelector);

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
				<LogoWrapper to="/landing">
					<Logo src={ReciperLogo} />
					Reciper
				</LogoWrapper>
				<HeaderRight>
					<Nav isLineColor={isLineColor}>
						<Link to="/recruit">팀원모집</Link>
						<Link to="/project">레시피 프로젝트</Link>
					</Nav>
					<LoginBtn onClick={() => setShowModal(true)}>
						{loginSuccess ? (
							<div>
								<ProfileImage profileImage={uploadImage} profileColor={profileColor} userName={name} />
							</div>
						) : (
							<>로그인/회원가입</>
						)}
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
