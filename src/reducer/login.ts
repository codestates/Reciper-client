import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';
import axios from 'axios';

import { loginDataType, loginRequestType, loginResponseDataType } from '../types/types';

export const loginRequest = createAsyncThunk(
	'loginRequest',
	async ({ data, endpoint }: { data: loginRequestType; endpoint: string }) => {
		const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/${endpoint}`, data);
		return response.data;
	},
);

const initialState: loginDataType = {
	success: false,
	data: {
		accessToken: '',
		email: '',
		loginType: '',
	},
};

export const loginSlice = createSlice({
	name: 'loginSlice',
	initialState,
	reducers: {},
	extraReducers: {
		[loginRequest.pending.type]: state => {
			state.success = false;
		},
		[loginRequest.fulfilled.type]: (state, { payload }: PayloadAction<loginResponseDataType>) => {
			state.success = true;
			state.data = payload;
		},
	},
});

export const loginSelector = (state: RootStateOrAny): loginDataType => state.loginSlice;
