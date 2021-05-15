import React from 'react';
import { getProfileInfoSelector } from '../../../reducer/profile';

import { useSelector } from 'react-redux';
import { HeaderProfileImage, HeaderProfileDefault } from './styles';

interface Props {
	accessToken: string;
}

const HeaderProfile = ({ accessToken }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);

	console.log('유저 정보 확인', profileInfo);
	// 프로필 이미지, 컬러 분기처리

	return (
		<>
			{accessToken ? (
				<>
					{profileInfo.profileImage ? (
						<HeaderProfileImage src={`${process.env.REACT_APP_SERVER_URL}/images/${profileInfo.profileImage}`} alt="" />
					) : (
						<HeaderProfileDefault style={{ backgroundColor: `${profileInfo.profileColor}` }}>
							<span>{profileInfo.name.slice(0, 1)}</span>
						</HeaderProfileDefault>
					)}
				</>
			) : (
				<>로그인/회원가입</>
			)}
		</>
	);
};

export default HeaderProfile;
