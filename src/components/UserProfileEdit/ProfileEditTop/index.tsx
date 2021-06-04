import React, { useState, useEffect, useRef } from 'react';
import { getProfileInfoSelector } from '../../../reducer/profile';
import useInput from '../../../hooks/useInput';
import ProfileEditBottom from '../ProfileEditBottom';
import { changeImage, clickUploadImage } from '../../../utils/imageUpload';

import { useSelector } from 'react-redux';

import Input from '../../Common/Input';

import {
	ProfileContainer,
	ProfileTitle,
	ProfileUserInfo,
	ProfileSubTitle,
	ProfileUserCard,
	ProfileUserInfoCard,
	ProfileUserEmail,
	ProfileImageUploadButton,
	ProfileImageUploadWrapper,
	ProfileImg,
} from '../../UserProfile/ProfileTop/styles';
import ProfileImage from '../../Common/ProfileImage';

const UserProfileEdit = (): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const imageInput = useRef<HTMLInputElement>(null);
	const [image, setImage] = useState<string>(profileInfo.uploadImage);
	const [name, onChangeName] = useInput<string>(profileInfo.name);
	const [mobile, onChangeMobile] = useInput<string>(profileInfo.mobile);
	const [aboutMe, onChangeAbout_me] = useInput<string>(profileInfo.aboutMe);
	const [stackBucket, setStackBucket] = useState<string[]>(profileInfo.stacks);

	useEffect(() => {
		setImage(profileInfo.uploadImage);
		setStackBucket(profileInfo.stacks);
	}, [profileInfo.uploadImage]);

	const onResetImage = (): void => {
		// TODO: 이미지 리셋 하기
		setImage('');
	};

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
						style={{ backgroundColor: `${profileInfo.profileColor}` }}
						onClick={() => {
							clickUploadImage(imageInput);
						}}
					>
						<ProfileImageUploadWrapper>
							<ProfileImageUploadButton>
								<span>이미지 업로드</span>
							</ProfileImageUploadButton>
							{image ? (
								<ProfileImage width="100%" height="100%" profileImage={image} profileColor={profileInfo.profileColor} />
							) : (
								<span>{profileInfo.name.slice(0, 1)}</span>
							)}
						</ProfileImageUploadWrapper>
					</div>
					<span onClick={onResetImage}>기본 이미지로 변경</span>
				</ProfileImg>

				<ProfileUserInfoCard>
					<div>
						<ProfileSubTitle>이름</ProfileSubTitle>
						<ProfileUserInfo>
							<Input placeholderText="이름을 입력하세요" initValue={name} changeEvent={onChangeName} />
						</ProfileUserInfo>
					</div>
					<div>
						<ProfileSubTitle>전화번호</ProfileSubTitle>
						<ProfileUserInfo>
							<Input placeholderText="숫자만 입력하세요" initValue={mobile} changeEvent={onChangeMobile} />
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
								placeholderText="최대 20자 내로 적어주세요"
								initValue={aboutMe}
								changeEvent={onChangeAbout_me}
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
