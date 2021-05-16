import React, { MouseEventHandler, useCallback } from 'react';
import { getProfileInfoSelector } from '../../../reducer/profile';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { MenuContainer, MenuItem, UserMenu } from './styles';

interface Props {
	show: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	onClose: MouseEventHandler<HTMLDivElement>;
}

const HeaderUserMenu = ({ show, setShowModal, onClose }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const history = useHistory();

	const stopPropagation = useCallback(e => {
		e.stopPropagation();
		setShowModal(false);
	}, []);

	const onGoToProfile = (): void => {
		history.push(`/profile/${profileInfo.id}`);
	};

	const onGoToRecruitCreate = (): void => {
		history.push('/recruitcreate');
	};

	const onGoToProjectCreate = (): void => {
		history.push(`/project/${profileInfo.id}/create`);
	};

	const onGoToProject = (): void => {
		history.push(`/project/${profileInfo.id}`);
	};

	return (
		<>
			{show && (
				<UserMenu onClick={onClose}>
					<MenuContainer onClick={stopPropagation}>
						<MenuItem onClick={onGoToProfile}>프로필</MenuItem>
						<MenuItem onClick={onGoToRecruitCreate}>팀원 모집하기</MenuItem>
						<MenuItem onClick={onGoToProjectCreate}>새 레시피 만들기</MenuItem>
						<MenuItem onClick={onGoToProject}>레시피 바로가기</MenuItem>
						<MenuItem>구매내역</MenuItem>
						<MenuItem>고객센터</MenuItem>
						<MenuItem>로그아웃</MenuItem>
					</MenuContainer>
				</UserMenu>
			)}
		</>
	);
};

export default HeaderUserMenu;
