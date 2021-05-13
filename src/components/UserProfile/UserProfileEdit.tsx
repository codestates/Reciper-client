import React, { useState, KeyboardEvent } from 'react';

import { BsArrowRepeat } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { useHistory } from 'react-router';

import useInput from '../../hooks/useInput';
import Button from '../Common/Button';
import Input from '../Common/Input';
import StackTag from '../Common/StackTag';

import {
	ProfileContainer,
	ProfileTitle,
	ProfileEdit_Img,
	Profile_UserInfo,
	Profile_SubTitle,
	Profile_UserCard,
	Profile_UserInfoCard,
	UserDetailIntroCard,
	Profile_UserDetailInfo,
	Profile_UserEmail,
	EditButton,
	AddStackContainer,
	StackClear,
	StackCancel,
	CurrentStack,
} from './styles';

const UserProfileEdit = (): JSX.Element => {
	const [stackName, onChangeStackName, setStackName] = useInput<string>('');
	const [stackBucket, setStackBucket] = useState<string[]>([]);
	const history = useHistory();

	const onAddStack = () => {
		if (stackName.trim() === '') {
			setStackName('');
			return;
		}
		setStackBucket([...stackBucket, stackName]);
		setStackName('');
	};

	const onDeleteStack = (index: number) => {
		const currentStackBucket = stackBucket.slice();
		currentStackBucket.splice(index, 1);
		setStackBucket(currentStackBucket);
	};

	const onChangeProfileInfo = () => {
		// TODO: 프로필 갱신 요청하기
		history.push('/profile/:id');
	};

	const onImageUpload = () => {
		// TODO: 이미지 업로드 하기
	};

	const onResetImage = () => {
		// TODO: 이미지 리셋 하기
	};

	return (
		<ProfileContainer>
			<ProfileTitle>
				<span>프로필 수정하기</span>
			</ProfileTitle>

			{/* TODO: 유저 개인 정보 */}
			<Profile_UserCard>
				<ProfileEdit_Img onClick={onImageUpload}>
					<div>
						<div>이</div>
					</div>
					<span onClick={onResetImage}>삭제</span>
				</ProfileEdit_Img>

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
							<Profile_UserEmail>useong0830@gmail.com</Profile_UserEmail>
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
						{/* TODO: 스택 추가하기 */}
						<Profile_SubTitle>
							사용 스택
							<br />
							(최대 5개)
						</Profile_SubTitle>
						<Profile_UserInfo>
							<Input
								placeholderText="사용 가능한 스택을 'enter'키로 추가하세요"
								initValue={stackName}
								changeEvent={onChangeStackName}
								keyEvent={(e: KeyboardEvent) => e.key === 'Enter' && onAddStack()}
							/>
							<AddStackContainer>
								{stackBucket.map((stack: string, index: number) => (
									<CurrentStack key={index}>
										<StackTag>{stack}</StackTag>
										<IoMdClose onClick={() => onDeleteStack(index)} />
									</CurrentStack>
								))}
							</AddStackContainer>
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>프로젝트 공개</Profile_SubTitle>
						<Profile_UserInfo></Profile_UserInfo>
					</div>
				</Profile_UserDetailInfo>
			</UserDetailIntroCard>

			{/* TODO: 프로필 변경하기 */}
			<EditButton>
				<Button size="medium" clickEvent={onChangeProfileInfo}>
					프로필 변경
				</Button>
			</EditButton>

			{/* TODO: 끝 */}
		</ProfileContainer>
	);
};

export default UserProfileEdit;
