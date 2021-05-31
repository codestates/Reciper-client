import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosRequest } from '../utils/axios';

import { RootStateOrAny } from 'react-redux';

import { addRoomDataType, RoomNameType, RoomsListDataType } from '../types/types';

// TODO: Thunk 실행
// 조회
export const getRoomsListInfo = createAsyncThunk('chatRoomInfo', (roomValue: addRoomDataType): Promise<void> => {
	return axiosRequest('get', `/workspace/${roomValue.currentURL}/${roomValue.currentAddress}`);
});
// 생성
export const addRoom = createAsyncThunk('addRoom', (roomValue: addRoomDataType): Promise<RoomNameType | void> => {
	return axiosRequest('post', `/workspace/${roomValue.currentURL}/${roomValue.currentAddress}`, roomValue.roomName);
});
// 삭제
export const deleteRoom = createAsyncThunk('deleteRoom', (roomValue: addRoomDataType): Promise<RoomNameType | void> => {
	return axiosRequest(
		'delete',
		`/workspace/${roomValue.currentURL}/${roomValue.currentAddress}/${roomValue.roomName?.name}`,
	);
});
// 수정
export const editRoom = createAsyncThunk('editRoom', (roomValue: addRoomDataType): Promise<RoomNameType | void> => {
	return axiosRequest(
		'post',
		`/workspace/${roomValue.currentURL}/${roomValue.currentAddress}/${roomValue.roomName?.name}`,
		roomValue.changeName,
	);
});

// TODO: 초기 상태
const initialState: RoomsListDataType = {
	roomsList: [],
};

// TODO: slice 실행
export const roomsListInfoSlice = createSlice({
	name: 'roomsList',
	initialState,
	reducers: {
		resetRoomList: (state: RoomsListDataType): void => {
			state.roomsList = [];
		},
	},
	extraReducers: {
		[getRoomsListInfo.fulfilled.type]: (state, { payload }: PayloadAction<RoomsListDataType>) => payload,
		[addRoom.fulfilled.type]: (state, { payload }: PayloadAction<RoomsListDataType>) => payload,
		[deleteRoom.fulfilled.type]: (state, { payload }: PayloadAction<RoomsListDataType>) => payload,
		[editRoom.fulfilled.type]: (state, { payload }: PayloadAction<RoomsListDataType>) => payload,
	},
});

export const { resetRoomList } = roomsListInfoSlice.actions;

export const getroomsListSelector = (state: RootStateOrAny): RoomsListDataType => state.roomsListInfoSlice;
