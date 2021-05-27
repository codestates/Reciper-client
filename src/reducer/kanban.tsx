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
			const keys = Object.keys(state.taskItems);
			const taskKey = String(Number(keys[keys.length - 1]) + 1 || '0');

			const taskItemFrame = {
				[taskKey]: {
					taskTitle,
					desc: '',
					taskColor,
					startDate: '',
					endDate: '',
					assignees: '',
					checkList: [],
					comment: [],
				},
			};

			state.taskBox[index].tasks.push(taskKey);
			state.taskItems = { ...state.taskItems, ...taskItemFrame };
		},
		deleteTaskBox: (state, { payload: index }: PayloadAction<number>): void => {
			state.taskBox[index].tasks.map(task => {
				delete state.taskItems[task];
			});

			state.taskBox.splice(index, 1);
		},
		deleteTaskItem: (state, { payload }) => {
			const { targetListIndex, targetIndex } = payload;

			const targetItem = state.taskBox[targetListIndex].tasks.splice(targetIndex, 1);
			delete state.taskItems[targetItem[0]];
		},
		reorderTaskBox: (state, { payload }): void => {
			const { currentIndex, targetIndex } = payload;
			const targetBox = state.taskBox.splice(currentIndex, 1);
			state.taskBox.splice(targetIndex, 0, ...targetBox);
		},
		reorderTaskItem: (state, { payload }): void => {
			const { currentIndex, targetIndex, currentListIndex, targetListIndex } = payload;
			const currentTasks: string[] = state.taskBox[currentListIndex].tasks;
			const targetTasks: string[] = state.taskBox[targetListIndex].tasks;

			const current = currentTasks.splice(currentIndex, 1);
			targetTasks.splice(targetIndex, 0, ...current);
		},
		getSocketData: (state, { payload }) => {
			console.log(payload);
			return payload;
		},
		socketAddTaskBox: (state, { payload }) => {
			state.taskBox.push(payload);
		},
		socketAddTaskItem: (state, { payload }) => {
			const { targetListIndex, task } = payload;
			const keys = Object.keys(state.taskItems);
			const taskKey = String(Number(keys[keys.length - 1]) + 1 || '0');

			state.taskBox[targetListIndex].tasks.push(taskKey);
			state.taskItems = { ...state.taskItems, [taskKey]: task };
		},
	},
	extraReducers: {},
});

export const {
	addTaskBox,
	deleteTaskBox,
	addTaskItem,
	reorderTaskBox,
	reorderTaskItem,
	getSocketData,
	socketAddTaskBox,
	socketAddTaskItem,
	deleteTaskItem,
} = kanbanDataSlice.actions;

export const kanbanDataSelector = (state: RootStateOrAny): kanbanDataType => state.kanbanDataSlice;

// taskBox[targetIndex].tasks.push(id)
// {
// 	taskBox: [
// 		{ taskBoxTitle: 'To Do', tasks: ['0', '1'] },
// 		{ taskBoxTitle: 'In Progress', tasks: ['2'] },
// 		{ taskBoxTitle: 'Done', tasks: [] },
// 	],
// 	taskItems: {
// 		'0': {
// 			taskTitle: 'Task 1',
// 			desc: '',
// 			taskColor: '#c41c4f',
// 			startDate: '5월 30일',
// 			endDate: '7월 01일',
// 			assigness: '',
// 			checkList: [],
// 			comment: [],
// 		},
// 		'1': {
// 			taskTitle: 'Task 2',
// 			desc: '',
// 			taskColor: '#478bff',
// 			startDate: '',
// 			endDate: '',
// 			assigness: '1',
// 			checkList: [],
// 			comment: [],
// 		},
// 		'2': {
// 			taskTitle: 'Task 3',
// 			desc: '',
// 			taskColor: '#00c875',
// 			startDate: '5월 24일',
// 			endDate: '6월 7일',
// 			assigness: '1',
// 			checkList: [],
// 			comment: [],
// 		},
// 	},
// };
