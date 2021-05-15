import React, { useState, useEffect, useRef } from 'react';
import { getProfileInfo, getProfileInfoSelector } from '../../../reducer/profile';
import useInput from '../../../hooks/useInput';
import ProfileEditBottom from '../ProfileEditBottom';
import { changeImage, clickUploadImage } from '../../../utils/imageUpload';

import { useDispatch, useSelector } from 'react-redux';

import Input from '../../Common/Input';

import {
	ProfileContainer,
	ProfileTitle,
	ProfileEditImg,
	ProfileUserInfo,
	ProfileSubTitle,
	ProfileUserCard,
	ProfileUserInfoCard,
	ProfileUserImage,
} from '../../UserProfile/ProfileTop/styles';

const UserProfileEdit = (): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const dispatch = useDispatch();

	const imageInput = useRef<HTMLInputElement>(null);
	const [image, setImage] = useState<string>(profileInfo.profileImage);
	const [name, onChangeName] = useInput<string>(profileInfo.name);
	const [mobile, onChangeMobile] = useInput<string>(profileInfo.mobile);
	const [aboutMe, onChangeAbout_me] = useInput<string>(profileInfo.aboutMe);
	const [stackBucket, setStackBucket] = useState<string[]>(profileInfo.stacks);

	useEffect(() => {
		dispatch(getProfileInfo());
		setImage(profileInfo.profileImage);
		setStackBucket(profileInfo.stacks);
	}, [profileInfo.profileImage, profileInfo.stacks]);

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
				<ProfileEditImg>
					{/* TODO: 이미지 요청 테스트중 */}
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
						{image ? (
							<ProfileUserImage src={`${process.env.REACT_APP_SERVER_URL}/images/${image}`} alt="" />
						) : (
							<div>{profileInfo.name.slice(0, 1)}</div>
						)}
					</div>
					<span onClick={onResetImage}>기본 이미지로 변경</span>
				</ProfileEditImg>

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
						<ProfileUserInfo>{profileInfo.email}</ProfileUserInfo>
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
