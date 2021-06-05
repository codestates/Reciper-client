import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';

import { recruitCreateDataType } from '../types/types';
import { axiosRequest } from '../utils/axios';

export const postCreateData = createAsyncThunk('postCreateData', async (data: recruitCreateDataType): Promise<void> => {
	try {
		await axiosRequest('post', `/recruitBoard`, data);
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
		successLoading: state => {
			state.loading = false;
		},
	},
	extraReducers: {
		[postCreateData.pending.type]: state => {
			state.loading = false;
		},
		[postCreateData.fulfilled.type]: state => {
			state.loading = true;
		},
	},
});

export const { writingAction, successLoading } = recruitCreateSlice.actions;
export const getRecruitCreateSelector = (state: RootStateOrAny): { data: recruitCreateDataType; loading: boolean } =>
	state.recruitCreateSlice;
