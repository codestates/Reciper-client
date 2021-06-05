import React, { useState, useEffect, useRef } from 'react';
import { getProfileInfoSelector } from '../../../reducer/profile';
import useInput from '../../../hooks/useInput';
import { changeImage, clickUploadImage } from '../../../utils/imageUpload';

import { useSelector } from 'react-redux';

import Input from '../../Common/Input';
import ProfileImage from '../../Common/ProfileImage';
import ProfileEditBottom from '../ProfileEditBottom';

import {
	ProfileContainer,
	ProfileTitle,
	ProfileUserInfo,
	ProfileSubTitle,
	ProfileUserCard,
	ProfileUserInfoCard,
	ProfileImg,
} from '../../UserProfile/ProfileTop/styles';
import { ProfileImageUploadButton, ProfileImageUploadWrapper, ProfileUserEmail } from './styles';

const UserProfileEdit = (): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const imageInput = useRef<HTMLInputElement>(null);
	const [image, setImage] = useState<string>(profileInfo.uploadImage);
	const [name, onChangeName] = useInput<string>(profileInfo.name);
	const [mobile, onChangeMobile] = useInput<string>(profileInfo.mobile);
	const [aboutMe, onChangeAboutMe] = useInput<string>(profileInfo.aboutMe);
	const [stackBucket, setStackBucket] = useState<string[]>(profileInfo.stacks);

	// TODO: 이미지 리셋 하기
	const onResetImage = (): void => {
		setImage('');
	};

	useEffect(() => {
		setImage(profileInfo.uploadImage);
		setStackBucket(profileInfo.stacks);
	}, [profileInfo.uploadImage]);

	return (
		<ProfileContainer>
			<ProfileTitle>
				<span>프로필 수정하기</span>
			</ProfileTitle>

			{/* TODO: 유저 개인 정보 */}
			<ProfileUserCard>
				<ProfileImg>
					{/* TODO: 이미지 요청 */}
					<form encType="multipart/form-data">
						<input
							type="file"
							accept="image/jpg,image/png,/image/jpeg"
							name="file"
							hidden
							onChange={e => changeImage(e, setImage)}
							ref={imageInput}
						/>
					</form>
					<div
						onClick={() => {
							clickUploadImage(imageInput);
						}}
					>
						<ProfileImageUploadWrapper>
							<ProfileImageUploadButton>
								<span>이미지 업로드</span>
							</ProfileImageUploadButton>
							<ProfileImage
								width="100%"
								height="100%"
								profileImage={image}
								profileColor={profileInfo.profileColor}
								userName={profileInfo.name}
								userNameSize="120px"
							/>
						</ProfileImageUploadWrapper>
					</div>
					{image && <span onClick={onResetImage}>기본 이미지로 변경</span>}
				</ProfileImg>

				<ProfileUserInfoCard>
					<div>
						<ProfileSubTitle>이름</ProfileSubTitle>
						<ProfileUserInfo>
							<Input
								width="long"
								height="long"
								placeholderText="이름을 입력하세요"
								initValue={name}
								changeEvent={onChangeName}
							/>
						</ProfileUserInfo>
					</div>
					<div>
						<ProfileSubTitle>전화번호</ProfileSubTitle>
						<ProfileUserInfo>
							<Input
								width="long"
								height="long"
								placeholderText="ex) 010-1234-5678"
								initValue={mobile}
								changeEvent={onChangeMobile}
							/>
						</ProfileUserInfo>
					</div>
					<div>
						<ProfileSubTitle>이메일</ProfileSubTitle>
						<ProfileUserInfo>
							<ProfileUserEmail>{profileInfo.email}</ProfileUserEmail>
						</ProfileUserInfo>
					</div>
					<div>
						<ProfileSubTitle>한줄 소개</ProfileSubTitle>
						<ProfileUserInfo>
							<Input
								width="long"
								height="long"
								placeholderText="최대 20자 내로 적어주세요"
								initValue={aboutMe}
								changeEvent={onChangeAboutMe}
							/>
						</ProfileUserInfo>
					</div>
				</ProfileUserInfoCard>
			</ProfileUserCard>
			<ProfileEditBottom
				profileInfo={profileInfo}
				name={name}
				mobile={mobile}
				aboutMe={aboutMe}
				image={image}
				stackBucket={stackBucket}
				setStackBucket={setStackBucket}
			/>
		</ProfileContainer>
	);
};

export default UserProfileEdit;
