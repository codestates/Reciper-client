import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, DragStart, Droppable, DropResult } from 'react-beautiful-dnd';
import { useHistory, useParams } from 'react-router';

import TaskBox from '../TaskBox';

import useInput from '../../../hooks/useInput';
import useSocket from '../../../hooks/useSocket';

import { kanbanDataType } from '../../../types/types';

import {
	addTaskBox,
	getSocketData,
	socketAddTaskBox,
	kanbanDataSelector,
	reorderTaskBox,
	reorderTaskItem,
	deleteTaskBox,
	socketAddTaskItem,
	deleteTaskItem,
	editTaskDetail,
	taskBoxBlock,
	taskItemBlock,
} from '../../../reducer/kanban';
import { projectInfoSelector } from '../../../reducer/projectInfo';

import { AddTaskBoxBtn, AddTaskBoxInput, Container, TaskBoxWrap } from './styles';

const KanbanConianer = (): JSX.Element => {
	const dispatch = useDispatch();
	const { projectUrl, part } = useParams<{ projectUrl: string; part: string }>();
	const history = useHistory();
	const currentAddress = history.location.pathname.split('/')[3];
	const { taskBox }: kanbanDataType = useSelector(kanbanDataSelector);
	const projectInfo = useSelector(projectInfoSelector);

	const [showAddTaskForm, setShowAddTask] = useState<boolean>(false);
	const [title, onChangeTitle, setTitle] = useInput<string>('');
	const [socket] = useSocket(projectUrl, currentAddress);

	useEffect(() => {
		console.log(projectInfo);
		socket?.on('getKanbanData', data => {
			dispatch(getSocketData(data));
		});
		socket?.on('addTaskBox', data => {
			dispatch(socketAddTaskBox(data));
		});

		socket?.on('deleteTaskBox', index => {
			dispatch(deleteTaskBox(index));
		});

		socket?.on('addTaskItem', data => {
			console.log('addTaskItem');
			dispatch(socketAddTaskItem(data));
		});

		socket?.on('deleteTaskItem', data => {
			console.log('deleteTaskItem');
			dispatch(deleteTaskItem(data));
		});

		socket?.on('boxMoving', data => {
			dispatch(reorderTaskBox(data));
		});

		socket?.on('taskMoving', data => {
			dispatch(reorderTaskItem(data));
		});

		socket?.on('editTaskItem', data => {
			dispatch(editTaskDetail(data));
		});

		socket?.on('taskBoxBlock', data => {
			dispatch(taskBoxBlock(data));
		});

		socket?.on('taskItemBlock', data => {
			console.log(data);
			dispatch(taskItemBlock(data));
		});

		socket?.emit('joinPart', part);
		socket?.emit('getKanbanData', part);

		return () => {
			socket?.emit('leavePart', part);
		};
	}, []);

	const onAddTaskBox = useCallback(() => {
		if (title.trim() === '') {
			return;
		}

		socket?.emit('addTaskBox', { title, index: taskBox.length, part });

		dispatch(addTaskBox(title));
		setTitle('');
		setShowAddTask(false);
	}, [title]);

	const onDragStart = (initial: DragStart): void => {
		const { source, draggableId, type } = initial;

		if (type === 'TaskBox') {
			const targetListIndex = source.index;
			const targetBox = document.querySelector(`.${draggableId}`);
			targetBox?.classList.add('dragging');

			socket?.emit('taskBoxBlock', { targetListIndex, isDragging: true });
		}

		if (type === 'TaskItem') {
			const targetListIndex = source.droppableId.split('-')[1];

			socket?.emit('taskItemBlock', { targetListIndex, targetIndex: source.index, isDragging: true });
		}
	};

	const onDragEnd = (result: DropResult): void => {
		const { type, source, destination } = result;

		if (!destination) {
			return;
		}

		if (type === 'TaskBox') {
			const currentIndex = source.index;
			const targetIndex = destination.index;
			const targetBox = document.querySelector(`.${result.draggableId}`);
			targetBox?.classList.remove('dragging');

			socket?.emit('boxMoving', { currentIndex, targetIndex, part, isDragging: false });
			dispatch(reorderTaskBox({ currentIndex, targetIndex }));
		}

		if (type === 'TaskItem') {
			const currentIndex = source.index;
			const targetIndex = destination.index;
			const currentListIndex = Number(source.droppableId.split('-')[1]);
			const targetListIndex = Number(destination.droppableId.split('-')[1]);

			socket?.emit('taskMoving', {
				currentIndex,
				targetIndex,
				currentListIndex,
				targetListIndex,
				part,
				isDragging: false,
			});
			dispatch(reorderTaskItem({ currentIndex, targetIndex, currentListIndex, targetListIndex }));
		}
	};

	return (
		<Container>
			<DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
				<Droppable droppableId="TaskBoxArea" type="TaskBox" direction="horizontal">
					{provided => (
						<TaskBoxWrap ref={provided.innerRef}>
							{taskBox.map((taskBox, index) => (
								<TaskBox key={`TaskBox-${index}`} socket={socket} taskBoxData={taskBox} index={index} />
							))}
							{provided.placeholder}
							{showAddTaskForm ? (
								<AddTaskBoxInput
									placeholder="+ 테스크 박스를 추가하세요"
									value={title}
									onChange={onChangeTitle}
									onKeyPress={e => e.key === 'Enter' && onAddTaskBox()}
									onBlur={onAddTaskBox}
								/>
							) : (
								<AddTaskBoxBtn onClick={() => setShowAddTask(true)}>+ 테스크 박스를 추가하세요</AddTaskBoxBtn>
							)}
						</TaskBoxWrap>
					)}
				</Droppable>
			</DragDropContext>
		</Container>
	);
};

export default KanbanConianer;
