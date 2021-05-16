import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosRequest } from '../utils/axios';

import { profileEditType } from '../types/types';
import { RootStateOrAny } from 'react-redux';

// TODO: Thunk 실행
export const getProfileEdit = createAsyncThunk(
	'profileInfo',
	(data: profileEditType): Promise<void | profileEditType> => {
		return axiosRequest('post', '/profile', data);
	},
);

// TODO: 초기 상태
const initialState: profileEditType = {
	aboutMe: '',
	career: {
		office: '',
		job: '',
		period: '',
	},
	gitId: '',
	name: '',
	isOpen: false,
	mobile: '',
	stacks: [],
	uploadImage: '',
};

// TODO: slice 실행
export const profileEditInfoSlice = createSlice({
	name: 'profileEdit',
	initialState,
	reducers: {},
	extraReducers: {
		[getProfileEdit.fulfilled.type]: (state, { payload }: PayloadAction<profileEditType>) => payload,
	},
});

export const getProfileEditSelector = (state: RootStateOrAny): profileEditType => state.profileEditInfoSlice;
