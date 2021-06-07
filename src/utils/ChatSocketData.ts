import dayjs from 'dayjs';

import { ChatDataType, ChatUpdateDataType, profileInfoDataType } from '../types/types';

export const newChatData = (
	id: number,
	inputValue: string | undefined,
	uploadImage: string | undefined,
	room: string,
	profileInfo: profileInfoDataType,
): ChatDataType => {
	const result = {
		id: id,
		text: inputValue,
		uploadImage: uploadImage,
		room: room,
		index: -1,
		createdAt: dayjs().toString(),
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
	dataId: number,
	message: string | undefined,
): ChatUpdateDataType => {
	const result = {
		room: room,
		index: index,
		id: dataId,
		message: message,
	};

	return result;
};

export const getChatDeleteData = (room: string, index: number, dataId: number): ChatUpdateDataType => {
	const result = {
		room: room,
		index: index,
		id: dataId,
	};
	return result;
};

export const getChatData = (
	room: string,
	profileInfo: profileInfoDataType,
	message: string,
	chatLength: number,
): ChatUpdateDataType => {
	const result = {
		room: room,
		name: profileInfo.name,
		message: message,
		chatLength: chatLength,
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
