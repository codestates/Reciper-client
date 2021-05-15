import axios from 'axios';
import { ChangeEvent } from 'react';

const localStorage_loginInfo = window.localStorage.getItem('loginInfo') as string;
const { accessToken, loginType } = JSON.parse(localStorage_loginInfo);

export const changeImage = async (
	e: ChangeEvent<HTMLInputElement>,
	setState: React.Dispatch<React.SetStateAction<string>>,
): Promise<void> => {
	const formData = new FormData();

	if (e.target.files) {
		formData.append('file', e.target.files[0]);
		const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/profile`, formData, {
			headers: {
				authorization: `Bearer ${accessToken}`,
				loginType,
			},
		});

		const imageData = response.data.profileImage;
		setState(imageData);
	}
};

export const clickUploadImage = (currentRef: React.RefObject<HTMLInputElement>): void => {
	if (currentRef.current) {
		currentRef.current.click();
	}
};
