import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';

import { ChatDataType, editChatType } from '../types/types';

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
		sendMessage: (state, { payload }: PayloadAction<ChatDataType[]>) => {
			return [...state, ...payload];
		},
		deleteMessage: (state, { payload }: PayloadAction<number>) => {
			const copyState = [...state];
			copyState.splice(payload, 1);
			return [...copyState];
		},
		editMessage: (state, { payload }: PayloadAction<editChatType>) => {
			const copyState = [...state];
			if (payload.chat) {
				copyState.splice(payload.index, 1, payload.chat);
			}
			return [...copyState];
		},
		changeRoom: () => initialState,
	},
});

export const { getAllMessages, sendMessage, deleteMessage, editMessage, changeRoom } = chatSlice.actions;

export const getChatDataSelector = (state: RootStateOrAny): ChatDataType[] => state.chatSlice;
