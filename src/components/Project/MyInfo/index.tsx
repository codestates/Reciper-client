import React from 'react';
import { useSelector } from 'react-redux';
import { getProfileInfoSelector } from '../../../reducer/profile';
import ProfileImage from '../../Common/ProfileImage';
import {
	Container,
	MyEmail,
	MyInfoContainer,
	MyInfoContentWrap,
	MyName,
	MyProfileImage,
	MyProfileLink,
} from './styles';

const MyInfo = (): JSX.Element => {
	const { uploadImage, name, profileColor, id, email } = useSelector(getProfileInfoSelector);

	return (
		<Container>
			<MyInfoContainer>
				<MyProfileImage>
					<ProfileImage
						width="100%"
						height="100%"
						userNameSize="35px"
						profileImage={uploadImage}
						profileColor={profileColor}
						userName={name}
					/>
				</MyProfileImage>
				<MyInfoContentWrap>
					<MyName>{name}</MyName>
					<MyEmail>{email}</MyEmail>
					<MyProfileLink to={`/profile/${id}`}>프로필 설정</MyProfileLink>
				</MyInfoContentWrap>
			</MyInfoContainer>
		</Container>
	);
};

export default MyInfo;
