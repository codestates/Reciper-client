import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosRequest } from '../utils/axios';

import { RootStateOrAny } from 'react-redux';

import { addRoomDataType, RoomNameType, RoomsListDataType } from '../types/types';

// TODO: Thunk 실행
// 조회
export const getRoomsListInfo = createAsyncThunk('chatRoomInfo', (roomValue: addRoomDataType): Promise<void> => {
	return axiosRequest('get', `/workspace/${roomValue.currentURL}/${roomValue.currentRoom}`);
});
// 생성
export const addRoom = createAsyncThunk('addRoom', (roomValue: addRoomDataType): Promise<RoomNameType | void> => {
	return axiosRequest('post', `/workspace/${roomValue.currentURL}/${roomValue.currentRoom}`, roomValue.roomName);
});
// 삭제
export const deleteRoom = createAsyncThunk('deleteRoom', (roomValue: addRoomDataType): Promise<RoomNameType | void> => {
	return axiosRequest(
		'delete',
		`/workspace/${roomValue.currentURL}/${roomValue.currentRoom}/${roomValue.roomName?.name}`,
	);
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
		[addRoom.fulfilled.type]: (state, { payload }: PayloadAction<RoomsListDataType>) => payload,
		[deleteRoom.fulfilled.type]: (state, { payload }: PayloadAction<RoomsListDataType>) => payload,
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
