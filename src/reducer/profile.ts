import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosRequest } from '../utils/axios';

import { profileInfoDataType } from '../types/types';
import { RootStateOrAny } from 'react-redux';

// TODO: Thunk 실행
export const getProfileInfo = createAsyncThunk('profileInfo', (): Promise<void> => {
	console.log('프로필 요청');
	return axiosRequest('get', '/profile');
});

// TODO: 초기 상태
const initialState: profileInfoDataType = {
	UpdatedAt: '',
	aboutMe: '',
	career: {
		office: '',
		job: '',
		period: '',
	},
	createdAt: '',
	email: '',
	stacks: [],
	gitId: '',
	id: null,
	isOpen: false,
	mobile: '',
	name: '',
	profileColor: '',
	uploadImage: '',
};

// TODO: slice 실행
export const profileInfoSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: {
		[getProfileInfo.fulfilled.type]: (state, { payload }: PayloadAction<profileInfoDataType>) => payload,
	},
});

export const getProfileInfoSelector = (state: RootStateOrAny): profileInfoDataType => state.profileInfoSlice;
