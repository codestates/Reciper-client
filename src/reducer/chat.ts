import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';

import { ChatDataType } from '../types/types';

// TODO: 초기 상태
const initialState: ChatDataType[] = [
	// {
	// 	id: -1,
	// 	text: '',
	// 	uploadImage: '',
	// 	room: '',
	// 	index: -1,
	// 	writer: {
	// 		id: null,
	// 		name: '',
	// 		email: '',
	// 		mobile: '',
	// 		gitId: '',
	// 		career: {
	// 			office: '',
	// 			job: '',
	// 			period: '',
	// 		},
	// 		aboutMe: '',
	// 		uploadImage: '',
	// 		profileColor: '',
	// 		createdAt: '',
	// 		updatedAt: '',
	// 	},
	// 	createdAt: '',
	// 	project: undefined,
	// 	foundChat: undefined,
	// 	chat: undefined,
	// },
];

// TODO: slice 실행
export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		getAllMessages: (state, { payload }: PayloadAction<ChatDataType[]>) => {
			return [...payload, ...state];
		},
		sendMessages: (state, { payload }: PayloadAction<ChatDataType[]>) => {
			return [...state, ...payload];
		},
	},
});

export const { getAllMessages, sendMessages } = chatSlice.actions;

export const getChatDataSelector = (state: RootStateOrAny): ChatDataType[] => state.chatSlice;
