import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';
import { kanbanDataType } from '../types/types';

const kanbaninitialState: kanbanDataType = {
	taskBox: [],
	taskItems: {},
};

export const kanbanDataSlice = createSlice({
	name: 'kanbanData',
	initialState: kanbaninitialState,
	reducers: {
		addTaskBox: (state, { payload: taskBoxTitle }: PayloadAction<string>): void => {
			const taskBoxFrame = {
				taskBoxTitle,
				tasks: [],
				dragging: false,
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
					assignees: [],
					checkList: [],
					comment: [],
					dragging: false,
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
			const { currentIndex, targetIndex, isDragging } = payload;
			const targetBox = state.taskBox.splice(currentIndex, 1);

			state.taskBox.splice(targetIndex, 0, ...targetBox);
			state.taskBox[targetIndex].dragging = isDragging;
		},
		reorderTaskItem: (state, { payload }): void => {
			const { currentIndex, targetIndex, currentListIndex, targetListIndex, isDragging } = payload;
			const currentTasks: string[] = state.taskBox[currentListIndex].tasks;
			const targetTasks: string[] = state.taskBox[targetListIndex].tasks;

			const current = currentTasks.splice(currentIndex, 1);
			targetTasks.splice(targetIndex, 0, ...current);

			const taskKey = state.taskBox[targetListIndex].tasks[targetIndex];
			state.taskItems[taskKey].dragging = isDragging;
		},
		getSocketData: (state, { payload }) => {
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
		editTaskDetail: (state, { payload }) => {
			const { targetListIndex, targetIndex, task, isDragging } = payload;
			const taskKey = state.taskBox[targetListIndex].tasks[targetIndex];

			state.taskItems = { ...state.taskItems, [taskKey]: task };
			state.taskItems[taskKey] = isDragging;
		},
		taskBoxBlock: (state, { payload }) => {
			const { targetListIndex, isDragging } = payload;

			state.taskBox[targetListIndex].dragging = isDragging;
			state.taskBox[targetListIndex].tasks.forEach(taskKey => {
				state.taskItems[taskKey].dragging = isDragging;
			});
		},
		taskItemBlock: (state, { payload }) => {
			const { targetListIndex, targetIndex, isDragging } = payload;
			const taskKey = state.taskBox[targetListIndex].tasks[targetIndex];

			state.taskItems[taskKey].dragging = isDragging;
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
	editTaskDetail,
	taskBoxBlock,
	taskItemBlock,
} = kanbanDataSlice.actions;

export const kanbanDataSelector = (state: RootStateOrAny): kanbanDataType => state.kanbanDataSlice;
