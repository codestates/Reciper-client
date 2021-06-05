import React from 'react';

import InprogressRecipe from '../InProgressRecipe';

import StackTag from '../../Common/StackTag';

import { ProfileUserInfo, ProfileSubTitle } from '../ProfileTop/styles';
import {
	UserDetailIntroCard,
	ProfileUserDetailInfo,
	ProfileCareer,
	ProfileStacks,
	StacksContainer,
	ProfileInProgressRecipe,
	ProfileSuccessRecipe,
	ProfileUserRecipeInfo,
} from './styles';

import { profileInfoDataType } from '../../../types/types';
import DoneRecipe from '../DoneRecipe';

interface Props {
	profileInfo: profileInfoDataType;
}

const ProfileBottom = ({ profileInfo }: Props): JSX.Element => {
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
						{profileInfo.career.office ? (
							<>
								<ProfileUserInfo>
									<ProfileCareer>{profileInfo.career.office}</ProfileCareer>
									<ProfileCareer>{profileInfo.career.job}</ProfileCareer>
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
						{profileInfo.stacks.length ? (
							<ProfileUserInfo>
								<StacksContainer>
									{profileInfo.stacks &&
										profileInfo.stacks.map((stack: string, index: number) => (
											<ProfileStacks key={index}>
												<StackTag>{stack}</StackTag>
											</ProfileStacks>
										))}
								</StacksContainer>
							</ProfileUserInfo>
						) : (
							<ProfileUserInfo>
								<div>프로필을 설정해 주세요</div>
							</ProfileUserInfo>
						)}
					</div>
				</ProfileUserDetailInfo>

				{/* TODO: 유저 진행중인 Recipe Card */}
				<ProfileUserRecipeInfo>
					<ProfileInProgressRecipe>
						<ProfileSubTitle>개발중인 레시피</ProfileSubTitle>
						<InprogressRecipe projectList={profileInfo.projectList} isOpen={profileInfo.isOpen} />
					</ProfileInProgressRecipe>

					<ProfileSuccessRecipe>
						<ProfileSubTitle>완성된 레시피</ProfileSubTitle>
						{/* TODO: 완료 Recipe Card */}
						<DoneRecipe isOpen={profileInfo.isOpen} />
					</ProfileSuccessRecipe>
				</ProfileUserRecipeInfo>
			</UserDetailIntroCard>
		</>
	);
};

export default ProfileBottom;
