import React, { useState } from 'react';

import { HiOutlinePencilAlt } from 'react-icons/hi';
import { useHistory } from 'react-router';
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
} from './styles';
import Test from '../../images/card_test.png';

const UserProfile = (): JSX.Element => {
	const [showRecipeCard, setShowRecipeCard] = useState<boolean>(false);
	const history = useHistory();

	const onGoToEditPage = (): void => {
		// TODO: 유저 아이디로 구별해서 페이지 전환해야 함
		history.push('/profile/:id/edit');
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
					<div>
						<div>이</div>
					</div>
				</Profile_Img>

				<Profile_UserInfoCard>
					<div>
						<Profile_SubTitle>이름</Profile_SubTitle>
						<Profile_UserInfo>이우성</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>전화번호</Profile_SubTitle>
						<Profile_UserInfo>010-1234-5678</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>이메일</Profile_SubTitle>
						<Profile_UserInfo>useong0830@gmail.com</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>한줄 소개</Profile_SubTitle>
						<Profile_UserInfo>React 위주로 개발합니다.</Profile_UserInfo>
					</div>
				</Profile_UserInfoCard>
			</Profile_UserCard>

			{/* TODO: 유저 Develop 정보 */}
			<UserDetailIntroCard>
				<Profile_UserDetailInfo>
					<div>
						<Profile_SubTitle>Github 아이디</Profile_SubTitle>
						<Profile_UserInfo>useonglee</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>경력</Profile_SubTitle>
						<Profile_UserInfo>
							<span>코드스테이츠</span>
						</Profile_UserInfo>
						<Profile_UserInfo>
							<span>프론트 엔드</span>
						</Profile_UserInfo>
						<Profile_UserInfo>
							<span>1~3년</span>
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>사용 스택</Profile_SubTitle>
						<Profile_UserInfo>
							<span>
								<StackTag>React</StackTag>
							</span>
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
