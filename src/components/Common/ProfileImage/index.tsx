import React from 'react';
import { useSelector } from 'react-redux';
import { getProfileInfoSelector } from '../../../reducer/profile';
import { UserProfileDefault, UserProfileImage } from './styles';

/* TODO:
프로필은 유저 자신의 프로필 사진과 유저 관점에서 다른 사람의 프로필 사진, 두가지로 나뉜다.

프로필은 프로필 이미지를 변경하였을 경우 유저의 프로필 이미지를 보여주고, 
설정하지 않았으면 기본 프로필을 보여준다.

Props: {
  width
  height
  profileImage
  profileColor
  userName
}
*/

interface Props {
	width: string;
	height: string;
	profileImage?: string;
	profileColor?: string;
	userName?: string;
	userNameSize?: string;
}

const ProfileImage = (props: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);

	return (
		<>
			{profileInfo.uploadImage ? (
				<UserProfileImage {...props} src={`${process.env.REACT_APP_SERVER_URL}/images/${props.profileImage}`} alt="" />
			) : (
				<UserProfileDefault {...props} style={{ backgroundColor: `${props.profileColor}` }}>
					<span style={{ fontSize: `${props.userNameSize}` }}>{props.userName?.slice(0, 1)}</span>
				</UserProfileDefault>
			)}
		</>
	);
};

ProfileImage.defaultProps = {
	width: '30px',
	height: '30px',
};

export default ProfileImage;
