import React, { MouseEventHandler, useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

import LoginModal from '../../LoginModal';
import Modal from '../Modal';

import { HeaderContainer, HeaderRight, LoginBtn, Logo, Nav } from './styles';
import HeaderProfile from '../HeaderProfile';
import HeaderUserMenu from '../HeaderUserMenu';

const Header = (): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const loginSuccess = window.localStorage.getItem('loginSuccess');

	const onCloseMenu: MouseEventHandler<HTMLDivElement> = useCallback(e => {
		e.stopPropagation();
		setShowModal(false);
	}, []);

	return (
		<>
			<HeaderContainer>
				<Logo href="#">Reciper</Logo>
				<HeaderRight>
					<Nav>
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

			{/* TODO: 테스트 모드 */}
			{/* {showModal && (
				<Modal setShowModal={setShowModal}>
					<LoginModal />
				</Modal>
			)} */}
		</>
	);
};
export default Header;
