import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosRequest } from '../utils/axios';

import { RootStateOrAny } from 'react-redux';

import { RoomsListDataType } from '../types/types';

// TODO: Thunk 실행
export const getRoomsListInfo = createAsyncThunk('chatRoomInfo', (projectURL: string): Promise<void> => {
	return axiosRequest('get', `/workspace/${projectURL}/chat`);
});

// TODO: 초기 상태
const initialState: RoomsListDataType = {
	roomsList: ['General'],
};

// TODO: slice 실행
export const roomsListInfoSlice = createSlice({
	name: 'roomsList',
	initialState,
	reducers: {},
	extraReducers: {
		[getRoomsListInfo.fulfilled.type]: (state, { payload }: PayloadAction<RoomsListDataType>) => payload,
	},
});

export const getroomsListSelector = (state: RootStateOrAny): RoomsListDataType => state.roomsListInfoSlice;

// const { text, writer, room, project } = chat;
// const { id, name, email, mobile, gitId, career, aboutMe, uploadImage, profileColor, createdAt, updatedAt } =
// 	writer;

// return {
// 	text: text,
// 	room: room,
// 	project: project,
// 	writer: {
// 		id: id,
// 		name: name,
// 		email: email,
// 		mobile: mobile,
// 		gitId: gitId,
// 		career: career,
// 		aboutMe: aboutMe,
// 		uploadImage: uploadImage,
// 		profileColor: profileColor,
// 		createdAt: createdAt,
// 		updatedAt: updatedAt,
// 	},
// };
