import React, { useState, KeyboardEvent } from 'react';
import { getProfileInfoSelector } from '../../reducer/profile';
import { getProfileEdit } from '../../reducer/profileEdit';

import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import useInput from '../../hooks/useInput';

import Button from '../Common/Button';
import Input from '../Common/Input';
import StackTag from '../Common/StackTag';
import ToggleButton from '../Common/ToggleButton';

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
	CurrentStack,
	StackMaximum,
	ToggleMessage,
} from './styles';

import { profileEditType } from '../../types/types';

const UserProfileEdit = (): JSX.Element => {
	const [stackName, onChangeStackName, setStackName] = useInput<string>('');
	const [stackBucket, setStackBucket] = useState<string[]>([]);
	const [isToggled, setIsToggled] = useState<boolean>(false);
	const history = useHistory();
	const dispatch = useDispatch();
	const profileInfo = useSelector(getProfileInfoSelector);

	const [name, onChangeName] = useInput<string>(profileInfo.name);
	const [mobile, onChangeMobile] = useInput<string>(profileInfo.mobile);
	const [about_me, onChangeAbout_me] = useInput<string>(profileInfo.about_me);
	const [git_id, onChangeGit_id] = useInput<string>(profileInfo.git_id);
	const [office, onChangeoffice] = useInput<string>(profileInfo.career.office);
	const [job, onChangeJob] = useInput<string>(profileInfo.career.job);
	const [period, onChangePeriod] = useInput<string>(profileInfo.career.period);

	const data: profileEditType = {
		name: name,
		mobile: mobile,
		git_id: git_id,
		career: {
			office: office,
			job: job,
			period: period,
		},
		isOpen: false,
		about_me: about_me,
		profile_image: '',
		stacks: [],
	};

	const onAddStack = (): void => {
		if (stackName.trim() === '') {
			setStackName('');
			return;
		}
		if (stackBucket.length > 4) {
			return;
		}
		setStackBucket([...stackBucket, stackName]);
		setStackName('');
	};

	const onDeleteStack = (index: number): void => {
		const currentStackBucket = stackBucket.slice();
		currentStackBucket.splice(index, 1);
		setStackBucket(currentStackBucket);
	};

	const onChangeProfileInfo = (): void => {
		// TODO: 프로필 갱신 요청하기
		dispatch(getProfileEdit(data));
		history.push(`/profile/${profileInfo.id}`);
	};

	const onImageUpload = (): void => {
		// TODO: 이미지 업로드 하기
	};

	const onResetImage = (): void => {
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
						<div>{profileInfo.name.slice(0, 1)}</div>
					</div>
					<span onClick={onResetImage}>삭제</span>
				</ProfileEdit_Img>

				<Profile_UserInfoCard>
					<div>
						<Profile_SubTitle>이름</Profile_SubTitle>
						<Profile_UserInfo>
							<Input placeholderText="이름을 입력하세요" initValue={name} changeEvent={onChangeName} />
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>전화번호</Profile_SubTitle>
						<Profile_UserInfo>
							<Input placeholderText="숫자만 입력하세요" initValue={mobile} changeEvent={onChangeMobile} />
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>이메일</Profile_SubTitle>
						<Profile_UserInfo>
							<Profile_UserEmail>{profileInfo.email}</Profile_UserEmail>
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>한줄 소개</Profile_SubTitle>
						<Profile_UserInfo>
							<Input
								width="long"
								placeholderText="최대 20자 내로 적어주세요"
								initValue={about_me}
								changeEvent={onChangeAbout_me}
							/>
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
							<Input placeholderText="아이디를 입력하세요" initValue={git_id} changeEvent={onChangeGit_id} />
						</Profile_UserInfo>
					</div>
					<div>
						<Profile_SubTitle>경력</Profile_SubTitle>
						<Profile_UserInfo>
							<span>
								<Input width="120px" placeholderText="회사 이름" initValue={office} changeEvent={onChangeoffice} />
							</span>
						</Profile_UserInfo>
						<Profile_UserInfo>
							<span>
								<Input
									width="120px"
									placeholderText="직무 (ex. 프론트엔드)"
									initValue={job}
									changeEvent={onChangeJob}
								/>
							</span>
						</Profile_UserInfo>
						<Profile_UserInfo>
							<span>
								<Input
									width="120px"
									placeholderText="경력 (ex. 1~3년)"
									initValue={period}
									changeEvent={onChangePeriod}
								/>
							</span>
						</Profile_UserInfo>
					</div>

					{/* TODO: 스택 추가하기 */}
					<div>
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
							{stackBucket.length > 4 ? <StackMaximum>5개 추가 완료</StackMaximum> : null}
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

					{/* TODO: 토글 버튼 */}
					<div>
						<Profile_SubTitle>프로젝트 공개</Profile_SubTitle>
						<Profile_UserInfo>
							<ToggleButton isToggled={isToggled} changeEvent={() => setIsToggled(!isToggled)}>
								{isToggled && <ToggleMessage>프로젝트를 공개합니다</ToggleMessage>}
							</ToggleButton>
						</Profile_UserInfo>
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
