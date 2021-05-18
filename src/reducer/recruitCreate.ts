import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';

import { recruitCreateDataType } from '../types/types';
import { axiosRequest } from '../utils/axios';

export const postCreateData = createAsyncThunk('postCreateData', async (data: recruitCreateDataType): Promise<void> => {
	try {
		await axiosRequest('post', `/recruitBoard`, data).then(data => console.log(data));
	} catch (error) {
		console.log(error);
	}
});

const initialData: recruitCreateDataType = {
	name: '',
	simpleDesc: '',
	recruitMembers: [],
	requireStack: [],
	serviceStep: '',
	period: '',
	detailTitle: '',
	detailDesc: '',
	uploadImage: '',
};

export const recruitCreateSlice = createSlice({
	name: 'recruitCreate',
	initialState: {
		data: initialData,
		loading: false,
	},
	reducers: {
		writingAction: (state, { payload }) => {
			state.data = { ...state.data, ...payload };
		},
	},
	extraReducers: {
		[postCreateData.pending.type]: state => {
			state.loading = true;
		},
		[postCreateData.fulfilled.type]: state => {
			state.loading = false;
			location.href = '/recruit';
		},
	},
});

export const { writingAction } = recruitCreateSlice.actions;
export const getRecruitCreateSelector = (
	state: RootStateOrAny,
): { data: recruitCreateDataType; loading: boolean; move: boolean } => state.recruitCreateSlice;
