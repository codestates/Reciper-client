import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';
import { REQUEST_STATE, getRecruitDataPayload, recruitSliceState } from '../types/types';

export const getRecruitData = createAsyncThunk(
	'getRecruitData',
	async ({ order, sortValue, stacks = [] }: getRecruitDataPayload) => {
		const response = await axios.post(
			`${process.env.REACT_APP_SERVER_URL}/filterRecruitList/${order}/${sortValue || '최신순'}`,
			{
				searchStacksList: stacks,
			},
		);
		return response.data;
	},
);

const initialState: recruitSliceState = {
	requsetState: REQUEST_STATE.PENDING,
	error: '',
	isEnd: false,
	isEmpty: false,
	recruitList: [],
	stacks: [],
	sortValue: '최신순',
};

export const recruitSlice = createSlice({
	name: 'recruit',
	initialState,
	reducers: {
		resetList: state => {
			state.isEnd = false;
			state.error = '';
			state.recruitList = [];
		},
		setStack: (state, action) => {
			const isDuplicate = state.stacks.includes(action.payload);

			if (isDuplicate) return;

			state.stacks = [...state.stacks, action.payload];
		},
		removeStack: (state, action) => {
			state.stacks.splice(action.payload, 1);
		},
		resetStack: state => {
			state.stacks = [];
		},
		setSort: (state, action) => {
			state.sortValue = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getRecruitData.pending, state => {
				state.requsetState = REQUEST_STATE.PENDING;
				state.isEmpty = false;
			})
			.addCase(getRecruitData.fulfilled, (state, action) => {
				state.requsetState = REQUEST_STATE.SUCCESS;
				state.isEnd = action.payload.isEnd;
				state.recruitList = [...state.recruitList, ...action.payload.boardList];

				if (!state.recruitList.length) state.isEmpty = true;
			})
			.addCase(getRecruitData.rejected, (state, action) => {
				state.requsetState = REQUEST_STATE.FAILED;
				state.isEmpty = true;
				console.error(action.error.stack);
			});
	},
});

export const { resetList, setStack, removeStack, resetStack, setSort } = recruitSlice.actions;
export const recruitSelector = (state: RootStateOrAny): recruitSliceState => state.recruitSlice;
