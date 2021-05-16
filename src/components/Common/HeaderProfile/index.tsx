import React from 'react';
import { getProfileInfoSelector } from '../../../reducer/profile';

import { useSelector } from 'react-redux';
import { HeaderProfileImage, HeaderProfileDefault } from './styles';

interface Props {
	accessToken: string;
}

const HeaderProfile = ({ accessToken }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);

	return (
		<>
			{accessToken ? (
				<div>
					{profileInfo.uploadImage ? (
						<HeaderProfileImage src={`${process.env.REACT_APP_SERVER_URL}/images/${profileInfo.uploadImage}`} alt="" />
					) : (
						<HeaderProfileDefault style={{ backgroundColor: `${profileInfo.profileColor}` }}>
							<span>{profileInfo.name.slice(0, 1)}</span>
						</HeaderProfileDefault>
					)}
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
