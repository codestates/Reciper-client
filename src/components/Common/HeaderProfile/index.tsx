import React from 'react';
import { getProfileInfoSelector } from '../../../reducer/profile';

import { useSelector } from 'react-redux';
import { HeaderProfileImage, HeaderProfileDefault } from './styles';
import ProfileImage from '../ProfileImage';

interface Props {
	loginSuccess: string | null;
}

const HeaderProfile = ({ loginSuccess }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);

	return (
		<>
			{loginSuccess ? (
				<div>
					<ProfileImage
						profileImage={profileInfo.uploadImage}
						profileColor={profileInfo.profileColor}
						userName={profileInfo.name}
					/>
				</div>
			) : (
				<>로그인/회원가입</>
			)}
		</>

		// TODO: 테스트모드
		// <>테스트</>
	);
};

export default HeaderProfile;
