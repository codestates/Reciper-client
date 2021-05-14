import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getProfileInfo, getProfileInfoSelector } from '../../reducer/profile';

import { HiOutlinePencilAlt } from 'react-icons/hi';
import Modal from '../Common/Modal';

import StackTag from '../Common/StackTag';

import {
	ProfileContainer,
	ProfileTitle,
	Profile_Img,
	Profile_UserInfo,
	Profile_SubTitle,
	Profile_UserCard,
	Profile_UserInfoCard,
	UserDetailIntroCard,
	Profile_InProgressRecipe,
	Profile_SuccessRecipe,
	Profile_UserDetailInfo,
	Profile_UserRecipeInfo,
	Profile_RecipeCard,
	RecipeCard_Img,
	RecipeCard_Content,
	RecipeCard_title,
	RecipeCard_Description,
	Profile_UserImage,
} from './styles';
import Test from '../../images/card_test.png';

const UserProfile = (): JSX.Element => {
	const [showRecipeCard, setShowRecipeCard] = useState<boolean>(false);
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
			<Profile_UserCard>
				<Profile_Img>
					{profileInfo.profileImage !== '' ? (
						<div>
							<Profile_UserImage
								src={`${process.env.REACT_APP_SERVER_URL}/images/${profileInfo.profileImage}`}
								alt=""
							/>
						</div>
					) : (
						<div style={{ backgroundColor: `${profileInfo.profileColor}` }}>
							{profileInfo.name ? (
								<div style={{ margin: '45px', fontSize: '110px' }}>{profileInfo.name.slice(0, 1)}</div>
							) : (
								<div style={{ margin: '20px', fontSize: '130px' }}>{profileInfo.email.slice(0, 1)}</div>
							)}
						</div>
					)}
				</Profile_Img>
				<Profile_UserInfoCard>
					<div>
						<Profile_SubTitle>이름</Profile_SubTitle>
						<Profile_UserInfo>
							{profileInfo.name ? profileInfo.name : <div>{profileInfo.email.split('@')[0]}</div>}
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>전화번호</Profile_SubTitle>
						<Profile_UserInfo>
							{profileInfo.mobile ? profileInfo.mobile : <div>프로필을 설정해 주세요</div>}
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>이메일</Profile_SubTitle>
						<Profile_UserInfo>{profileInfo.email}</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>한줄 소개</Profile_SubTitle>
						<Profile_UserInfo>
							{profileInfo.aboutMe ? profileInfo.aboutMe : <div>프로필을 설정해 주세요</div>}
						</Profile_UserInfo>
					</div>
				</Profile_UserInfoCard>
			</Profile_UserCard>

			{/* TODO: 유저 Develop 정보 */}
			<UserDetailIntroCard>
				<Profile_UserDetailInfo>
					<div>
						<Profile_SubTitle>Github 아이디</Profile_SubTitle>
						<Profile_UserInfo>
							{profileInfo.gitId ? profileInfo.gitId : <div>프로필을 설정해 주세요</div>}
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>경력</Profile_SubTitle>
						{profileInfo.career ? (
							<>
								<Profile_UserInfo>
									<span>{profileInfo.career.office}</span>
								</Profile_UserInfo>
								<Profile_UserInfo>
									<span>{profileInfo.career.job}</span>
								</Profile_UserInfo>
								<Profile_UserInfo>
									<span>{profileInfo.career.period}</span>
								</Profile_UserInfo>
							</>
						) : (
							<Profile_UserInfo>
								<div>프로필을 설정해 주세요</div>
							</Profile_UserInfo>
						)}
					</div>
					<div>
						<Profile_SubTitle>사용 스택</Profile_SubTitle>
						<Profile_UserInfo>
							{profileInfo.stacks &&
								profileInfo.stacks.map((stack: string, index: number) => (
									<span key={index}>
										<StackTag>{stack}</StackTag>
									</span>
								))}
						</Profile_UserInfo>
					</div>
				</Profile_UserDetailInfo>

				{/* TODO: 유저 Recipe Card */}
				<Profile_UserRecipeInfo>
					<Profile_InProgressRecipe>
						<Profile_SubTitle>개발중인 레시피</Profile_SubTitle>
						<div>현재 개발중인 레시피가 없습니다.</div>
					</Profile_InProgressRecipe>

					<Profile_SuccessRecipe>
						<Profile_SubTitle>완성된 레시피</Profile_SubTitle>

						{/* TODO: Recipe Card */}
						<Profile_RecipeCard onClick={() => setShowRecipeCard(true)}>
							<RecipeCard_Img style={{ backgroundImage: `url(${Test})` }} />
							<RecipeCard_Content>
								<RecipeCard_title>
									Reciper
									<div>4명</div>
									<div>0423 ~ 0607</div>
								</RecipeCard_title>
								<RecipeCard_Description>
									하나의 웹 서비스 안에서 개발 동료도 찾고, 작업 공간도 같이 있는 웹 서비스를 개발했습니다. 만남과
									워크스페이스가 한 공간에 이루어지는 레시피에서 서비스를 즐겨보세요!
								</RecipeCard_Description>
							</RecipeCard_Content>
							{showRecipeCard && <Modal setShowModal={setShowRecipeCard}>테스트</Modal>}
						</Profile_RecipeCard>

						{/* TODO: 끝 */}
					</Profile_SuccessRecipe>
				</Profile_UserRecipeInfo>
			</UserDetailIntroCard>
		</ProfileContainer>
	);
};

export default UserProfile;
