import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { profileEditType } from '../types/types';
import { RootStateOrAny } from 'react-redux';

const localStorage_loginInfo = window.localStorage.getItem('loginInfo') as string;
const loginInfo = JSON.parse(localStorage_loginInfo);
const userAccessToken = loginInfo.accessToken;
const userLoginType = loginInfo.loginType;

// TODO: Thunk 실행
export const getProfileEdit = createAsyncThunk('profileInfo', async (data: profileEditType): Promise<void> => {
	console.log('thunk 요청 확인');
	const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/profile`, data, {
		headers: {
			authorization: `Bearer ${userAccessToken}`,
			loginType: userLoginType,
		},
	});
	console.log('thunk 응답 확인', response.data);
	return response.data;
});

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
	profileImage: '',
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
