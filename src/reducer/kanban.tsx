import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';
import { kanbanDataType, taskBoxDataType, taskDataType } from '../types/types';

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
		deleteTaskItem: (state, { payload }: PayloadAction<{ [key: string]: number }>): void => {
			const { targetListIndex, targetIndex } = payload;

			state.taskBox[targetListIndex].dragging = false;
			state.taskBox[targetListIndex].tasks.forEach(taskKey => {
				state.taskItems[taskKey].dragging = false;
			});
			const targetItem = state.taskBox[targetListIndex].tasks.splice(targetIndex, 1);
			delete state.taskItems[targetItem[0]];
		},
		reorderTaskBox: (
			state,
			{ payload }: PayloadAction<{ data: { [key: string]: number }; targetTask: string }>,
		): void => {
			const { currentIndex, targetIndex } = payload.data;
			const targetBox = state.taskBox.splice(currentIndex, 1);

			state.taskBox.splice(targetIndex, 0, ...targetBox);
		},
		reorderTaskItem: (state, { payload }: PayloadAction<{ [key: string]: number }>): void => {
			const { currentIndex, targetIndex, currentListIndex, targetListIndex } = payload;
			const currentTasks: string[] = state.taskBox[currentListIndex].tasks;
			const targetTasks: string[] = state.taskBox[targetListIndex].tasks;

			const current = currentTasks.splice(currentIndex, 1);
			targetTasks.splice(targetIndex, 0, ...current);
		},
		getSocketData: (state, { payload }: PayloadAction<kanbanDataType>): kanbanDataType => {
			return payload;
		},
		socketAddTaskBox: (state, { payload }: PayloadAction<taskBoxDataType>): void => {
			state.taskBox.push(payload);
		},
		socketAddTaskItem: (state, { payload }: PayloadAction<{ targetListIndex: number; task: taskDataType }>): void => {
			const { targetListIndex, task } = payload;
			const keys = Object.keys(state.taskItems);
			const taskKey = String(Number(keys[keys.length - 1]) + 1 || '0');

			state.taskBox[targetListIndex].tasks.push(taskKey);
			state.taskItems = { ...state.taskItems, [taskKey]: task };
		},
		editTaskBox: (state, { payload }) => {
			const { targetListIndex, title } = payload;

			state.taskBox[targetListIndex].taskBoxTitle = title;
		},
		editTaskDetail: (
			state,
			{ payload }: PayloadAction<{ targetListIndex: number; targetIndex: number; task: taskDataType }>,
		): void => {
			const { targetListIndex, targetIndex, task } = payload;
			const taskKey = state.taskBox[targetListIndex].tasks[targetIndex];

			state.taskItems = { ...state.taskItems, [taskKey]: task };
		},
		boxDragBlock: (state, { payload }: PayloadAction<{ targetListIndex: number; isDragging: boolean }>): void => {
			const { targetListIndex, isDragging } = payload;

			state.taskBox[targetListIndex].dragging = isDragging;
			state.taskBox[targetListIndex].tasks.forEach(taskKey => {
				state.taskItems[taskKey].dragging = isDragging;
			});
		},
		itemDragStart: (state, { payload }: PayloadAction<{ targetListIndex: number; isDragging: boolean }>) => {
			const { targetListIndex, isDragging } = payload;

			state.taskBox[targetListIndex].dragging = isDragging;
			state.taskBox[targetListIndex].tasks.forEach(taskKey => (state.taskItems[taskKey].dragging = isDragging));
		},
		itemDragEnd: (
			state,
			{
				payload,
			}: PayloadAction<{
				targetListIndex: number;
				currentListIndex: number;
				targetIndex: number;
				isDragging: boolean;
			}>,
		): void => {
			const { targetListIndex, currentListIndex, targetIndex, isDragging } = payload;
			const taskKey = state.taskBox[targetListIndex].tasks[targetIndex];

			state.taskBox[currentListIndex].dragging = isDragging;
			state.taskItems[taskKey].dragging = isDragging;
			state.taskBox[currentListIndex].tasks.forEach(taskKey => (state.taskItems[taskKey].dragging = isDragging));
		},
		itemEditBlock: (state, { payload }: PayloadAction<{ targetListIndex: number; isDragging: boolean }>): void => {
			const { targetListIndex, isDragging } = payload;

			state.taskBox[targetListIndex].dragging = isDragging;
			state.taskBox[targetListIndex].tasks.forEach(taskKey => (state.taskItems[taskKey].dragging = isDragging));
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
	editTaskBox,
	editTaskDetail,
	boxDragBlock,
	itemDragStart,
	itemDragEnd,
	itemEditBlock,
} = kanbanDataSlice.actions;

export const kanbanDataSelector = (state: RootStateOrAny): kanbanDataType => state.kanbanDataSlice;
