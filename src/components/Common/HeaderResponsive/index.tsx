import React, { useCallback, useState } from 'react';
import { getProfileInfoSelector, resetProfileState } from '../../../reducer/profile';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { HeaderContainer, HamburgerButton, MenuItem } from './styled';
import { LogoWrapper, Logo } from '../Header/styles';

import ReciperLogo from '../../../images/Logo.png';
import Modal from '../Modal';
import LoginModal from '../LoginModal';

const HeaderResponsive = (): JSX.Element => {
	const { state } = useLocation<{ isLogged: boolean }>();
	const [showModal, setShowModal] = useState<boolean>(state ? state.isLogged : false);
	const loginSuccess = window.localStorage.getItem('loginSuccess');
	const dispatch = useDispatch();
	const history = useHistory();
	const { id, email } = useSelector(getProfileInfoSelector);

	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const onGoToRecruit = (): void => {
		history.push('/recruit');
	};

	const onGoToWorkspace = (): void => {
		history.push('/project');
	};

	const onGoToProfile = (): void => {
		history.push(`/profile/${id}`);
	};

	const onGoToRecruitCreate = (): void => {
		history.push('/recruitcreate');
	};

	const onGoToProjectCreate = (): void => {
		history.push(`/projectcreate`);
	};

	const onGoToProject = (): void => {
		history.push(`/project`);
	};

	const onLogout = (): void => {
		alert('정상적으로 로그아웃 되었습니다.');
		window.localStorage.clear();
		dispatch(resetProfileState());
		setShowModal(false);
		history.push(`/recruit`);
	};

	const onOpenMenu: React.MouseEventHandler<HTMLDivElement> = useCallback(e => {
		e.stopPropagation();
		setShowModal(true);
	}, []);

	return (
		<HeaderContainer openMenu={openMenu} useEmail={email}>
			<LogoWrapper to="/landing">
				<Logo src={ReciperLogo} />
				Reciper
			</LogoWrapper>
			<article>
				<MenuItem onClick={onGoToRecruit}>팀원모집</MenuItem>
				<MenuItem onClick={onGoToWorkspace}>레시피 프로젝트</MenuItem>
				{loginSuccess ? (
					<>
						<MenuItem onClick={onGoToProfile}>프로필</MenuItem>
						<MenuItem onClick={onGoToRecruitCreate}>팀원 모집하기</MenuItem>
						<MenuItem onClick={onGoToProjectCreate}>새 레시피 만들기</MenuItem>
						<MenuItem onClick={onGoToProject}>레시피 바로가기</MenuItem>
						<MenuItem onClick={onLogout}>로그아웃</MenuItem>
					</>
				) : (
					<MenuItem onClick={onOpenMenu}>로그인/회원가입</MenuItem>
				)}
			</article>
			<button onClick={() => setOpenMenu(!openMenu)}>
				<HamburgerButton />
			</button>
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<LoginModal />
				</Modal>
			)}
		</HeaderContainer>
	);
};

export default HeaderResponsive;
