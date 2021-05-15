import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import LoginModal from '../../LoginModal';
import Modal from '../Modal';

import { HeaderContainer, HeaderRight, LoginBtn, Logo, Nav } from './styles';
import HeaderProfile from '../HeaderProfile';

const Header = (): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const localStorage_loginInfo = window.localStorage.getItem('loginInfo') as string;
	const { accessToken } = JSON.parse(localStorage_loginInfo);

	console.log('헤더에서 토큰 확인', accessToken);

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
						<HeaderProfile accessToken={accessToken} />
					</LoginBtn>
				</HeaderRight>
			</HeaderContainer>
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<LoginModal />
				</Modal>
			)}
		</>
	);
};
export default Header;
