import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, DragStart, Droppable, DropResult } from 'react-beautiful-dnd';

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
} from '../../../reducer/kanban';

import { AddTaskBoxBtn, AddTaskBoxInput, Container, TaskBoxWrap } from './styles';
import Modal from '../../Common/Modal';
import TaskDetail from '../../Common/TaskDetail';
import { useHistory, useParams } from 'react-router';

const KanbanConianer = (): JSX.Element => {
	const dispatch = useDispatch();
	const { projectUrl, part } = useParams<{ projectUrl: string; part: string }>();
	const history = useHistory();
	const currentAddress = history.location.pathname.split('/')[3];
	const { taskBox }: kanbanDataType = useSelector(kanbanDataSelector);

	const [showAddTaskForm, setShowAddTask] = useState<boolean>(false);
	const [title, onChangeTitle, setTitle] = useInput<string>('');
	const [showModal, setShowModal] = useState<boolean>(false);
	const [targetTask, setTargetTask] = useState<string>('');
	const [socket] = useSocket(projectUrl, currentAddress);

	useEffect(() => {
		socket?.on('getKanbanData', data => {
			console.log('getKan');
			console.log(data);
			dispatch(getSocketData(data));
		});
		socket?.on('addTaskBox', data => {
			console.log('addTaskBox');
			dispatch(socketAddTaskBox(data));
		});

		socket?.on('deleteTaskBox', index => {
			console.log('deleteTaskBox');
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

		socket?.emit('joinPart', part);
		socket?.emit('getKanbanData', part);
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
		console.log(initial);
		if (initial.type === 'TaskBox') {
			const targetBox = document.querySelector(`.${initial.draggableId}`);
			targetBox?.classList.add('dragging');
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

			socket?.emit('boxMoving', { currentIndex, targetIndex, part });
			dispatch(reorderTaskBox({ currentIndex, targetIndex }));
		}

		if (type === 'TaskItem') {
			const currentIndex = source.index;
			const targetIndex = destination.index;
			const currentListIndex = Number(source.droppableId.split('-')[1]);
			const targetListIndex = Number(destination.droppableId.split('-')[1]);

			socket?.emit('taskMoving', { currentIndex, targetIndex, currentListIndex, targetListIndex, part });
			dispatch(reorderTaskItem({ currentIndex, targetIndex, currentListIndex, targetListIndex }));
		}
	};

	const openModalHooks = (task: string) => {
		setShowModal(true);
		setTargetTask(task);
	};

	return (
		<Container>
			<DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
				<Droppable droppableId="TaskBoxArea" type="TaskBox" direction="horizontal">
					{provided => (
						<TaskBoxWrap ref={provided.innerRef}>
							{taskBox.map((taskBox, index) => (
								<TaskBox
									key={`TaskBox-${index}`}
									socket={socket}
									taskBoxData={taskBox}
									index={index}
									openModalHooks={openModalHooks}
								/>
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
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<TaskDetail targetTask={targetTask} socket={socket} setShowModal={setShowModal} />
				</Modal>
			)}
		</Container>
	);
};

export default KanbanConianer;

// const [kanbanData, setKanbanData] = useState<kanbanDataType>({
// 	taskBox: [{ title: '', tasks: ['0'] }],
// 	taskItem: {
// 		'0': { title: '', desc: '', taskColor: '', startDate: '', endData: '', assigness: '', checkList: [] },
// 	},
// });
