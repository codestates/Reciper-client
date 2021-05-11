import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderRight, LoginBtn, Logo, Nav, Profile } from './styles';

const Header = (): JSX.Element => {
	return (
		<HeaderContainer>
			<Logo href="#">Reciper</Logo>
			<HeaderRight>
				<Nav>
					<Link to="/recruit">팀원모집</Link>
					<Link to="/project">레시피 프로젝트</Link>
				</Nav>
				<LoginBtn>로그인/회원가입</LoginBtn>
				{/* <Profile>W</Profile> */}
			</HeaderRight>
		</HeaderContainer>
	);
};
export default Header;
