import axios from 'axios';
import { ChangeEvent } from 'react';

const localStorage_loginInfo = window.localStorage.getItem('loginInfo') as string;
const loginInfo = JSON.parse(localStorage_loginInfo);
const userAccessToken = loginInfo.accessToken;
const userLoginType = loginInfo.loginType;

export const changeImage = async (e: ChangeEvent<HTMLInputElement>): Promise<string | undefined> => {
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
		return imageData;
	}
};

export const clickUploadImage = (currentRef: React.RefObject<HTMLInputElement>): void => {
	if (currentRef.current) {
		currentRef.current.click();
	}
};
