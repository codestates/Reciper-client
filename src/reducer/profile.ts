import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosRequest } from '../utils/axios';

import { profileInfoDataType } from '../types/types';
import { RootStateOrAny } from 'react-redux';

// TODO: Thunk 실행
export const getProfileInfo = createAsyncThunk('profileInfo', (): Promise<void> => {
	return axiosRequest('get', '/profile');
});

// TODO: 초기 상태
const initialState: profileInfoDataType = {
	updatedAt: '',
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
	projectList: [],
};

// TODO: slice 실행
export const profileInfoSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		resetProfileState: (): profileInfoDataType => {
			const initialState: profileInfoDataType = {
				updatedAt: '',
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
				projectList: [],
			};

			return initialState;
		},
	},
	extraReducers: {
		[getProfileInfo.fulfilled.type]: (state, { payload }: PayloadAction<profileInfoDataType>): profileInfoDataType =>
			payload,
	},
});

export const { resetProfileState } = profileInfoSlice.actions;

export const getProfileInfoSelector = (state: RootStateOrAny): profileInfoDataType => state.profileInfoSlice;
