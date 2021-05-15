import React, { useEffect } from 'react';
import { getProfileInfo, getProfileInfoSelector } from '../../../reducer/profile';
import ProfileBottom from '../ProfileBottom';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { HiOutlinePencilAlt } from 'react-icons/hi';

import {
	ProfileContainer,
	ProfileTitle,
	ProfileImg,
	ProfileUserInfo,
	ProfileSubTitle,
	ProfileUserCard,
	ProfileUserInfoCard,
	ProfileUserImage,
} from './styles';

const UserProfile = (): JSX.Element => {
	const history = useHistory();
	const dispatch = useDispatch();
	const profileInfo = useSelector(getProfileInfoSelector);

	useEffect(() => {
		dispatch(getProfileInfo());
	}, []);

	const onGoToEditPage = (): void => {
		// TODO: 유저 아이디로 구별해서 페이지 전환해야 함
		history.push(`/profile/${profileInfo.id}/edit`);
	};

	return (
		<ProfileContainer>
			<ProfileTitle>
				<span>나의 프로필</span>
				<div onClick={onGoToEditPage}>
					<HiOutlinePencilAlt />
					&nbsp;프로필 수정
				</div>
			</ProfileTitle>

			{/* TODO: 유저 개인 정보 */}
			<ProfileUserCard>
				<ProfileImg>
					<div style={{ backgroundColor: `${profileInfo.profileColor}` }}>
						{profileInfo.profileImage ? (
							<ProfileUserImage src={`${process.env.REACT_APP_SERVER_URL}/images/${profileInfo.profileImage}`} alt="" />
						) : (
							<div>{profileInfo.name.slice(0, 1)}</div>
						)}
					</div>
				</ProfileImg>
				<ProfileUserInfoCard>
					<div>
						<ProfileSubTitle>이름</ProfileSubTitle>
						<ProfileUserInfo>
							{profileInfo.name ? profileInfo.name : <>{profileInfo.email.split('@')[0]}</>}
						</ProfileUserInfo>
					</div>
					<div>
						<ProfileSubTitle>전화번호</ProfileSubTitle>
						<ProfileUserInfo>
							{profileInfo.mobile ? profileInfo.mobile : <div>프로필을 설정해 주세요</div>}
						</ProfileUserInfo>
					</div>
					<div>
						<ProfileSubTitle>이메일</ProfileSubTitle>
						<ProfileUserInfo>{profileInfo.email}</ProfileUserInfo>
					</div>
					<div>
						<ProfileSubTitle>한줄 소개</ProfileSubTitle>
						<ProfileUserInfo>
							{profileInfo.aboutMe ? profileInfo.aboutMe : <div>프로필을 설정해 주세요</div>}
						</ProfileUserInfo>
					</div>
				</ProfileUserInfoCard>
			</ProfileUserCard>
			<ProfileBottom profileInfo={profileInfo} />
		</ProfileContainer>
	);
};

export default UserProfile;
