import axios from 'axios';
import { ChangeEvent, Dispatch, DragEvent } from 'react';
import getLoginInfo from './getLoginInfo';

const { accessToken, loginType } = getLoginInfo();

export const changeImage = async (
	e: ChangeEvent<HTMLInputElement>,
	setState: Dispatch<React.SetStateAction<string>>,
): Promise<void> => {
	const formData = new FormData();

	if (e.target.files) {
		formData.append('file', e.target.files[0]);
		const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/postImage`, formData, {
			headers: {
				authorization: `Bearer ${accessToken}`,
				loginType,
			},
		});

		const imageData = response.data.uploadImage;
		setState(imageData);
	}
};

export const clickUploadImage = (currentRef: React.RefObject<HTMLInputElement>): void => {
	if (currentRef.current) {
		currentRef.current.click();
	}
};

export const onDragUploadImage = async (
	e: DragEvent<HTMLDivElement>,
	setDragOver: Dispatch<React.SetStateAction<boolean>>,
	setUploadImge: Dispatch<React.SetStateAction<string>>,
): Promise<void> => {
	const formData = new FormData();

	if (e.dataTransfer.items) {
		for (let i = 0; i < e.dataTransfer.items.length; i++) {
			if (e.dataTransfer.items[i].kind === 'file') {
				const file = e.dataTransfer.items[i].getAsFile();
				file ? formData.append('file', file) : null;
			}
		}
	} else {
		for (let i = 0; i < e.dataTransfer.files.length; i++) {
			formData.append('file', e.dataTransfer.files[i]);
		}
	}

	const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/postImage`, formData, {
		headers: {
			authorization: `Bearer ${accessToken}`,
			loginType,
		},
	});

	const imageData = response.data.uploadImage;
	setUploadImge(imageData);
};
