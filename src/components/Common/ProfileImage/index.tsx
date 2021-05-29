import React from 'react';
import { UserProfileDefault, UserProfileImage } from './styles';

/* TODO:
프로필은 유저 자신의 프로필 사진과 유저 관점에서 다른 사람의 프로필 사진, 두가지로 나뉜다.

프로필은 프로필 이미지를 변경하였을 경우 유저의 프로필 이미지를 보여주고, 
설정하지 않았으면 기본 프로필을 보여준다.

5/28 수정
radius 기본값 border-radius 100%;
radius 조절 가능; 

Props: {
  width
  height
	margin
	userNameSize (default: 16px)
  profileImage
  profileColor
  userName
}
*/

interface Props {
	width: string;
	height: string;
	margin: string;
	userNameSize: string;
	profileImage?: string;
	profileColor?: string;
	userName?: string;
	radius: string;
}

const ProfileImage = (props: Props): JSX.Element => {
	return (
		<>
			{props.profileImage ? (
				<UserProfileImage
					{...props}
					src={`${process.env.REACT_APP_SERVER_URL}/images/${props.profileImage}`}
					alt="사용자 이미지"
				/>
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
	margin: '0',
	userNameSize: '16px',
	radius: '100%',
};

export default ProfileImage;
