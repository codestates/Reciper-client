import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';
import { kanbanDataType } from '../types/types';

const initialState: kanbanDataType = {
	taskBox: [],
	taskItems: {},
};

export const kanbanDataSlice = createSlice({
	name: 'kanbanData',
	initialState,
	reducers: {
		addTaskBox: (state, { payload: taskBoxTitle }: PayloadAction<string>): void => {
			const taskBoxFrame = {
				taskBoxTitle,
				tasks: [],
			};

			state.taskBox.push(taskBoxFrame);
		},
		addTaskItem: (
			state,
			{
				payload: { taskTitle, index, taskColor },
			}: PayloadAction<{ taskTitle: string; index: number; taskColor: string }>,
		): void => {
			const taskKey = String(Object.keys(state.taskItems).length + 1);

			const taskItemFrame = {
				[taskKey]: {
					taskTitle,
					desc: '',
					taskColor,
					startDate: '',
					endDate: '',
					assigness: '',
					checkList: [],
				},
			};

			state.taskBox[index].tasks.push(taskKey);
			state.taskItems = { ...state.taskItems, ...taskItemFrame };
		},
		deleteTaskBox: (state, { payload: index }: PayloadAction<number>): void => {
			state.taskBox.splice(index, 1);
		},
	},
	extraReducers: {},
});

export const { addTaskBox, deleteTaskBox, addTaskItem } = kanbanDataSlice.actions;

export const kanbanDataSelector = (state: RootStateOrAny): kanbanDataType => state.kanbanDataSlice;
