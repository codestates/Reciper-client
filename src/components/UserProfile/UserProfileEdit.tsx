import React, { useState, KeyboardEvent, ChangeEvent, useEffect, useRef } from 'react';
import { getProfileInfo, getProfileInfoSelector } from '../../reducer/profile';
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
	Profile_UserImage,
} from './styles';

import { profileEditType } from '../../types/types';
import axios from 'axios';

const UserProfileEdit = (): JSX.Element => {
	const [stackName, onChangeStackName, setStackName] = useInput<string>('');
	const [stackBucket, setStackBucket] = useState<string[]>([]);
	const [isToggled, setIsToggled] = useState<boolean>(false);
	const [image, setImage] = useState<string>('');
	const history = useHistory();
	const dispatch = useDispatch();
	const profileInfo = useSelector(getProfileInfoSelector);
	const imageInput = useRef<HTMLInputElement>(null);

	const [name, onChangeName] = useInput<string>(profileInfo.name);
	const [mobile, onChangeMobile] = useInput<string>(profileInfo.mobile);
	const [aboutMe, onChangeAbout_me] = useInput<string>(profileInfo.aboutMe);
	const [gitId, onChangeGit_id] = useInput<string>(profileInfo.gitId);
	const [office, onChangeoffice] = useInput<string>(profileInfo.career.office);
	const [job, onChangeJob] = useInput<string>(profileInfo.career.job);
	const [period, onChangePeriod] = useInput<string>(profileInfo.career.period);

	useEffect(() => {
		dispatch(getProfileInfo());
	}, []);

	const data: profileEditType = {
		name: name,
		mobile: mobile,
		gitId: gitId,
		career: {
			office: office,
			job: job,
			period: period,
		},
		isOpen: false,
		aboutMe: aboutMe,
		profileImage: image,
		stacks: [...stackBucket],
	};
	console.log('data', data);

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

	// TODO: 이미지 업로드 연습하는 부분
	const localStorage_loginInfo = window.localStorage.getItem('loginInfo') as string;
	const loginInfo = JSON.parse(localStorage_loginInfo);
	const userAccessToken = loginInfo.accessToken;
	const userLoginType = loginInfo.loginType;

	const onChnageImage = async (e: ChangeEvent<HTMLInputElement>) => {
		const formData = new FormData();
		if (e.target.files) {
			formData.append('file', e.target.files[0]);
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/profile`, formData, {
				headers: {
					authorization: `Bearer ${userAccessToken}`,
					loginType: userLoginType,
				},
			});
			const imageData = response.data.profileImage as string;
			setImage(imageData);
			console.log('이미지 확인', imageData);
		}
	};

	const onUploadImage = (): void => {
		if (imageInput.current) {
			imageInput.current.click();
		}
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
				<ProfileEdit_Img>
					{/* TODO: 이미지 요청 테스트중 */}
					<form encType="multipart/form-data">
						<input
							type="file"
							accept="image/jpg,image/png,/image/jpeg"
							name="file"
							hidden
							onChange={onChnageImage}
							ref={imageInput}
						/>
					</form>
					{profileInfo.profileImage !== '' ? (
						<div onClick={onUploadImage}>
							<Profile_UserImage src={`${process.env.REACT_APP_SERVER_URL}/images/${image}`} alt="" />
						</div>
					) : (
						<div style={{ backgroundColor: `${profileInfo.profileColor}` }} onClick={onUploadImage}>
							{profileInfo.name ? (
								<div style={{ margin: '45px', fontSize: '110px' }}>{profileInfo.name.slice(0, 1)}</div>
							) : (
								<div style={{ margin: '20px', fontSize: '130px' }}>{profileInfo.email.slice(0, 1)}</div>
							)}
						</div>
					)}

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
								initValue={aboutMe}
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
							<Input placeholderText="아이디를 입력하세요" initValue={gitId} changeEvent={onChangeGit_id} />
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
