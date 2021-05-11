import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../../LoginModal';
import Modal from '../Modal';
import { HeaderContainer, HeaderRight, LoginBtn, Logo, Nav, Profile } from './styles';

const Header = (): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<>
			<HeaderContainer>
				<Logo href="#">Reciper</Logo>
				<HeaderRight>
					<Nav>
						<Link to="/recruit">팀원모집</Link>
						<Link to="/project">레시피 프로젝트</Link>
					</Nav>
					<LoginBtn onClick={() => setShowModal(true)}>로그인/회원가입</LoginBtn>
					{/* <Profile>W</Profile> */}
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
