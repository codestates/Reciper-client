import React, { useState } from 'react';
import Modal from '../../Common/Modal';
import StackTag from '../../Common/StackTag';
import Test from '../../../images/card_test.png';

import {
	ProfileUserInfo,
	ProfileSubTitle,
	UserDetailIntroCard,
	ProfileInProgressRecipe,
	ProfileSuccessRecipe,
	ProfileUserDetailInfo,
	ProfileUserRecipeInfo,
	ProfileRecipeCard,
	RecipeCardImg,
	RecipeCardContent,
	RecipeCardtitle,
	RecipeCardDescription,
	ProfileCareer,
	ProfileStacks,
} from '../ProfileTop/styles';

import { profileInfoDataType } from '../../../types/types';

interface Props {
	profileInfo: profileInfoDataType;
}

const ProfileBottom = ({ profileInfo }: Props): JSX.Element => {
	const [showRecipeCard, setShowRecipeCard] = useState<boolean>(false);

	return (
		<>
			<UserDetailIntroCard>
				<ProfileUserDetailInfo>
					<div>
						<ProfileSubTitle>Github 아이디</ProfileSubTitle>
						<ProfileUserInfo>
							{profileInfo.gitId ? profileInfo.gitId : <div>프로필을 설정해 주세요</div>}
						</ProfileUserInfo>
					</div>
					<div>
						<ProfileSubTitle>경력</ProfileSubTitle>
						{profileInfo.career ? (
							<>
								<ProfileUserInfo>
									<ProfileCareer>{profileInfo.career.office}</ProfileCareer>
								</ProfileUserInfo>
								<ProfileUserInfo>
									<ProfileCareer>{profileInfo.career.job}</ProfileCareer>
								</ProfileUserInfo>
								<ProfileUserInfo>
									<ProfileCareer>{profileInfo.career.period}</ProfileCareer>
								</ProfileUserInfo>
							</>
						) : (
							<ProfileUserInfo>
								<div>프로필을 설정해 주세요</div>
							</ProfileUserInfo>
						)}
					</div>
					<div>
						<ProfileSubTitle>사용 스택</ProfileSubTitle>
						<ProfileUserInfo>
							{profileInfo.stacks &&
								profileInfo.stacks.map((stack: string, index: number) => (
									<ProfileStacks key={index}>
										<StackTag>{stack}</StackTag>
									</ProfileStacks>
								))}
						</ProfileUserInfo>
					</div>
				</ProfileUserDetailInfo>

				{/* TODO: 유저 Recipe Card */}
				<ProfileUserRecipeInfo>
					<ProfileInProgressRecipe>
						<ProfileSubTitle>개발중인 레시피</ProfileSubTitle>
						<div>현재 개발중인 레시피가 없습니다.</div>
					</ProfileInProgressRecipe>

					<ProfileSuccessRecipe>
						<ProfileSubTitle>완성된 레시피</ProfileSubTitle>

						{/* TODO: Recipe Card */}
						<ProfileRecipeCard onClick={() => setShowRecipeCard(true)}>
							<RecipeCardImg style={{ backgroundImage: `url(${Test})` }} />
							<RecipeCardContent>
								<RecipeCardtitle>
									Reciper
									<div>4명</div>
									<div>0423 ~ 0607</div>
								</RecipeCardtitle>
								<RecipeCardDescription>
									하나의 웹 서비스 안에서 개발 동료도 찾고, 작업 공간도 같이 있는 웹 서비스를 개발했습니다. 만남과
									워크스페이스가 한 공간에 이루어지는 레시피에서 서비스를 즐겨보세요!
								</RecipeCardDescription>
							</RecipeCardContent>
							{showRecipeCard && <Modal setShowModal={setShowRecipeCard}>테스트</Modal>}
						</ProfileRecipeCard>

						{/* TODO: 끝 */}
					</ProfileSuccessRecipe>
				</ProfileUserRecipeInfo>
			</UserDetailIntroCard>
		</>
	);
};

export default ProfileBottom;