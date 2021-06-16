import React, { useEffect } from 'react';
import { getProfileInfo, getProfileInfoSelector } from '../../../reducer/profile';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { HiOutlinePencilAlt } from 'react-icons/hi';

import ProfileBottom from '../ProfileBottom';

import {
	ProfileContainer,
	ProfileTitle,
	ProfileImg,
	ProfileUserInfo,
	ProfileSubTitle,
	ProfileUserCard,
	ProfileUserInfoCard,
	InputWrapper,
} from './styles';
import ProfileImage from '../../Common/ProfileImage';

const UserProfile = (): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const { id, name, mobile, email, aboutMe, profileColor, uploadImage } = profileInfo;
	const history = useHistory();
	const dispatch = useDispatch();

	const onGoToEditPage = (): void => {
		// TODO: 유저 아이디로 구별해서 페이지 전환해야 함
		history.push(`/profile/${id}/edit`);
	};

	useEffect(() => {
		dispatch(getProfileInfo());
	}, []);

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
					<div style={{ backgroundColor: `${profileColor}` }}>
						{uploadImage ? (
							<ProfileImage
								width="100%"
								height="100%"
								profileImage={uploadImage}
								profileColor={profileColor}
								userName={name}
								userNameSize="140px"
							/>
						) : (
							<p>{name.slice(0, 1)}</p>
						)}
					</div>
				</ProfileImg>
				<ProfileUserInfoCard>
					<div>
						<InputWrapper>
							<ProfileSubTitle>이름</ProfileSubTitle>
							<ProfileUserInfo>{name ? name : <>{email.split('@')[0]}</>}</ProfileUserInfo>
						</InputWrapper>
					</div>
					<div>
						<InputWrapper>
							<ProfileSubTitle>전화번호</ProfileSubTitle>
							<ProfileUserInfo>
								{mobile ? (
									`${mobile.slice(0, 3)} - ${mobile.slice(3, 7)} - ${mobile.slice(7, 12)}`
								) : (
									<div>프로필을 설정해 주세요</div>
								)}
							</ProfileUserInfo>
						</InputWrapper>
					</div>
					<div>
						<InputWrapper>
							<ProfileSubTitle>이메일</ProfileSubTitle>
							<ProfileUserInfo>{email}</ProfileUserInfo>
						</InputWrapper>
					</div>
					<div>
						<InputWrapper>
							<ProfileSubTitle>한줄 소개</ProfileSubTitle>
							<ProfileUserInfo>{aboutMe ? aboutMe : <div>프로필을 설정해 주세요</div>}</ProfileUserInfo>
						</InputWrapper>
					</div>
				</ProfileUserInfoCard>
			</ProfileUserCard>
			<ProfileBottom profileInfo={profileInfo} />
		</ProfileContainer>
	);
};

export default UserProfile;
