import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';
import { projectInfoDataType } from '../types/types';
import { axiosRequest } from '../utils/axios';

export const getProjectInfo = createAsyncThunk('getProjectInfo', async (projectURL: string) => {
	return await axiosRequest('get', `/project/${projectURL}`);
});

const initialState: projectInfoDataType = {
	id: 0,
	name: '',
	projectURL: '',
	members: [
		{
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
	],
};

export const projectInfoSlice = createSlice({
	name: 'projectInfo',
	initialState,
	reducers: {},
	extraReducers: {
		[getProjectInfo.fulfilled.type]: (state, { payload }) => {
			const { id, name, members, projectURL } = payload;

			return { id, name, members, projectURL };
		},
	},
});

export const {} = projectInfoSlice.actions;

export const projectInfoSelector = (state: RootStateOrAny): projectInfoDataType => state.projectInfoSlice;
