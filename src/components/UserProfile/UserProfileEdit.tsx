import React from 'react';

import { useHistory } from 'react-router';
import Input from '../Common/Input';

import {
	ProfileContainer,
	ProfileTitle,
	Profile_Img,
	Profile_UserInfo,
	Profile_SubTitle,
	Profile_UserCard,
	Profile_UserInfoCard,
	UserDetailIntroCard,
	Profile_Stack,
	Profile_UserDetailInfo,
} from './styles';

const UserProfileEdit = (): JSX.Element => {
	const history = useHistory();

	const onGoToEditPage = () => {
		// TODO: 유저 아이디로 구별해서 페이지 전환해야 함
		history.push('/profile/:id');
	};

	return (
		<ProfileContainer>
			<ProfileTitle>
				<span>프로필 수정하기</span>
			</ProfileTitle>

			{/* TODO: 유저 개인 정보 */}
			<Profile_UserCard>
				<Profile_Img>
					<div>
						<div>이</div>
					</div>
					<span>삭제</span>
				</Profile_Img>

				<Profile_UserInfoCard>
					<div>
						<Profile_SubTitle>이름</Profile_SubTitle>
						<Profile_UserInfo>
							<Input placeholderText="이름을 입력하세요" changeEvent={() => console.log('')} />
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>전화번호</Profile_SubTitle>
						<Profile_UserInfo>
							<Input placeholderText="숫자만 입력하세요" changeEvent={() => console.log('')} />
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>이메일</Profile_SubTitle>
						<Profile_UserInfo>
							<Input placeholderText="이름을 입력하세요" changeEvent={() => console.log('')} />
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>한줄 소개</Profile_SubTitle>
						<Profile_UserInfo>
							<Input width="long" placeholderText="최대 20자 내로 적어주세요" changeEvent={() => console.log('')} />
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
							<Input placeholderText="아이디를 입력하세요" changeEvent={() => console.log('')} />
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>경력</Profile_SubTitle>
						<Profile_UserInfo>
							<span>
								<Input width="120px" placeholderText="회사 이름" changeEvent={() => console.log('')} />
							</span>
						</Profile_UserInfo>
						<Profile_UserInfo>
							<span>
								<Input width="120px" placeholderText="직무 (ex. 프론트엔드)" changeEvent={() => console.log('')} />
							</span>
						</Profile_UserInfo>
						<Profile_UserInfo>
							<span>
								<Input width="120px" placeholderText="경력 (ex. 1~3년)" changeEvent={() => console.log('')} />
							</span>
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>사용 가능 스택&nbsp;(최대 5개)</Profile_SubTitle>
						<Profile_UserInfo></Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>프로젝트 공개</Profile_SubTitle>
						<Profile_UserInfo></Profile_UserInfo>
					</div>
				</Profile_UserDetailInfo>
			</UserDetailIntroCard>

			{/* TODO: 끝 */}
		</ProfileContainer>
	);
};

export default UserProfileEdit;
