import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';
import { RecruitDetailDataType } from '../types/types';
import { axiosRequest } from '../utils/axios';

export const getDetailData = createAsyncThunk('getDetailData', (params: string) => {
	return axiosRequest('get', `/recruitBoard/${params}`);
});

export const deleteDetailData = createAsyncThunk('deleteDetailData', (params: string) => {
	return axiosRequest('delete', `/recruitBoard/${params}`);
});

export const addCommentData = createAsyncThunk(
	'postAddCommentData',
	(payload: { params: string; data: { body: string } }) => {
		return axiosRequest('post', `/recruitBoardComment/${payload.params}`, payload.data);
	},
);

export const deleteCommentData = createAsyncThunk('deleteCommentData', (payload: { params: string; id: number }) => {
	return axiosRequest('delete', `/recruitBoardComment/${payload.params}/${payload.id}`);
});

const initialData: RecruitDetailDataType = {
	commentCount: 0,
	commentsList: [
		{
			id: 0,
			body: '',
			createdAt: '',
			updatedAt: '',
			writer: {
				aboutMe: '',
				career: '',
				createdAt: '',
				email: '',
				gitId: '',
				id: 0,
				isOpen: false,
				mobile: '',
				name: '',
				profileColor: '',
				updatedAt: '',
				uploadImage: '',
			},
		},
	],
	createdAt: '',
	detailDesc: '',
	detailTitle: '',
	id: 0,
	name: '',
	period: '',
	recruitMembers: [{ position: '', career: '', personnel: '', deadline: '' }],
	requireStack: [],
	serviceStep: '',
	simpleDesc: '',
	stacks: [{ id: 0, name: '' }],
	updatedAt: '',
	uploadImage: '',
	view: 0,
	writer: {
		aboutMe: '',
		career: '',
		createdAt: '',
		email: '',
		gitId: '',
		id: 0,
		isOpen: false,
		mobile: '',
		name: '',
		profileColor: '',
		updatedAt: '',
		uploadImage: '',
	},
};

export const recruitDetailSlice = createSlice({
	name: 'recruitDetail',
	initialState: { data: initialData, loading: false },
	reducers: {},
	extraReducers: {
		[getDetailData.pending.type]: state => {
			state.loading = true;
		},
		[getDetailData.fulfilled.type]: (state, { payload }) => {
			state.data = payload;
			state.loading = false;
		},
		[deleteDetailData.fulfilled.type]: () => {
			location.href = '/recruit';
		},
		[addCommentData.fulfilled.type]: (state, { payload }) => {
			state.data = payload;
		},
		[deleteCommentData.fulfilled.type]: (state, { payload }) => {
			state.data = payload;
		},
	},
});

export const getRecruitDetailSelector = (
	state: RootStateOrAny,
): { data: RecruitDetailDataType; loading: boolean; move: boolean } => state.recruitDetailSlice;
