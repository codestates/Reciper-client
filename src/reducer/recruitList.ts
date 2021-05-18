import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';
import { RecruitListDataType } from '../types/types';
import { axiosRequest } from '../utils/axios';

export const getListData = createAsyncThunk(
	'getListData',
	({ order, sort, stacks }: { order: number; sort: string; stacks: string[] }) => {
		return axiosRequest('post', `/filterRecruitList/${order}/${sort}`, { searchStacksList: stacks });
	},
);

interface recruitListSliceInintialType {
	data: {
		boardList: RecruitListDataType[];
		isEnd: boolean;
	};
	loading: boolean;
}

const initialState: recruitListSliceInintialType = {
	data: {
		boardList: [],
		isEnd: true,
	},
	loading: false,
};

export const recruitListSlice = createSlice({
	name: 'createSlice',
	initialState,
	reducers: {},
	extraReducers: {
		[getListData.pending.type]: state => {
			state.loading = true;
		},
		[getListData.fulfilled.type]: (state, { payload }) => {
			state.data.boardList.push(payload.boardList);
			state.data.isEnd = payload.isEnd;
			state.loading = false;
		},
	},
});

export const listDataSelector = (
	state: RootStateOrAny,
): { data: { isEnd: boolean; boardList: RecruitListDataType[] }; loading: boolean } => state.recruitListSlice;
