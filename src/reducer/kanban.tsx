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
			const taskKey = String(Object.keys(state.taskItems).length);

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
		reorderTaskBox: (state, { payload }): void => {
			const { currentIndex, targetIndex } = payload;
			const targetBox = state.taskBox.splice(currentIndex, 1);
			state.taskBox.splice(targetIndex, 0, ...targetBox);
		},
		reorerTaskItem: (state, { payload }): void => {
			const { currentIndex, targetIndex, currentListIndex, targetListIndex } = payload;
			const currentTasks: string[] = state.taskBox[currentListIndex].tasks;
			const targetTasks: string[] = state.taskBox[targetListIndex].tasks;

			const current = currentTasks.splice(currentIndex, 1);
			targetTasks.splice(targetIndex, 0, ...current);
		},
	},
	extraReducers: {},
});

export const { addTaskBox, deleteTaskBox, addTaskItem, reorderTaskBox, reorerTaskItem } = kanbanDataSlice.actions;

export const kanbanDataSelector = (state: RootStateOrAny): kanbanDataType => state.kanbanDataSlice;
