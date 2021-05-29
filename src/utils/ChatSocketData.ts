import dayjs from 'dayjs';

import { ChatDataType, ChatUpdateDataType, profileInfoDataType } from '../types/types';

export const newChatData = (
	inputValue: string | undefined,
	uploadImage: string | undefined,
	room: string,
	profileInfo: profileInfoDataType,
): ChatDataType => {
	let newChatDate = dayjs();
	newChatDate = newChatDate.subtract(9, 'hour');

	const result = {
		id: null,
		text: inputValue,
		uploadImage: uploadImage,
		room: room,
		createdAt: newChatDate.toString(),
		writer: {
			id: profileInfo.id,
			name: profileInfo.name,
			email: profileInfo.email,
			mobile: profileInfo.mobile,
			gitId: profileInfo.gitId,
			career: profileInfo.career,
			aboutMe: profileInfo.aboutMe,
			uploadImage: profileInfo.uploadImage,
			profileColor: profileInfo.profileColor,
			createdAt: profileInfo.createdAt,
			updatedAt: profileInfo.updatedAt,
		},
	};
	return result;
};

export const getChatEditData = (
	room: string,
	index: number,
	id: number,
	message: string | undefined,
): ChatUpdateDataType => {
	const result = {
		room: room,
		index: index,
		id: id,
		message: message,
	};

	return result;
};

export const getChatDeleteData = (room: string, index: number, id: number): ChatUpdateDataType => {
	const result = {
		room: room,
		index: index,
		id: id,
	};

	return result;
};

export const getChatData = (room: string, profileInfo: profileInfoDataType, message: string): ChatUpdateDataType => {
	const result = {
		room: room,
		name: profileInfo.name,
		message: message,
	};

	return result;
};

export const getChatUploadImageData = (
	room: string,
	profileInfo: profileInfoDataType,
	uploadImage: string,
): ChatUpdateDataType => {
	const result = {
		room: room,
		name: profileInfo.name,
		uploadImage: uploadImage,
	};

	return result;
};
