import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChatDataType } from '../types/types';
import { RootStateOrAny } from 'react-redux';

// TODO: 초기 상태
const initialState: ChatDataType[] = [{ name: '', message: '' }];

// TODO: slice 실행
export const chatInfoSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		getTotalChatInfo: (state, { payload }: PayloadAction<ChatDataType[]>) => payload,
	},
});

export const { getTotalChatInfo } = chatInfoSlice.actions;

export const getTotalChatSelector = (state: RootStateOrAny): ChatDataType[] => state.chatInfoSlice;
