import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, DragStart, Droppable, DropResult } from 'react-beautiful-dnd';
import { useHistory, useParams } from 'react-router';

import TaskBox from '../TaskBox';

import useInput from '../../../hooks/useInput';
import useSocket from '../../../hooks/useSocket';

import { kanbanDataType, taskDataType } from '../../../types/types';

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
	boxDragBlock,
	itemDragStart,
	itemDragEnd,
	itemEditBlock,
} from '../../../reducer/kanban';

import { AddTaskBoxBtn, AddTaskBoxInput, Container, TaskBoxWrap } from './styles';
import Modal from '../../Common/Modal';
import TaskDetail from '../../Common/TaskDetail';

const KanbanConianer = (): JSX.Element => {
	const dispatch = useDispatch();
	const history = useHistory();
	const currentAddress = history.location.pathname.split('/')[3];
	const { projectUrl, part } = useParams<{ projectUrl: string; part: string }>();

	const { taskBox }: kanbanDataType = useSelector(kanbanDataSelector);
	const [socket, connectSocket, disconnectSocket] = useSocket(projectUrl, currentAddress);

	const [showAddTaskForm, setShowAddTask] = useState<boolean>(false);
	const [title, onChangeTitle, setTitle] = useInput<string>('');

	const [showModal, setShowModal] = useState<boolean>(false);
	const [targetTask, setTargetTask] = useState<string>('');
	const [targetIndex, setTargetIndex] = useState<number>(0);
	const [targetListIndex, setTargeListIndex] = useState<number>(0);
	const [detailData, setDetailData] = useState<taskDataType>({
		taskTitle: '',
		desc: '',
		checkList: [],
		comment: [],
		startDate: '',
		endDate: '',
		taskColor: '',
		assignees: [],
		dragging: false,
	});

	connectSocket();

	useEffect(() => {
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
			dispatch(reorderTaskBox({ data, targetTask }));
		});

		socket?.on('taskMoving', data => {
			dispatch(reorderTaskItem(data));
		});

		socket?.on('editTaskItem', data => {
			dispatch(editTaskDetail(data));
		});

		socket?.on('boxDragBlock', data => {
			dispatch(boxDragBlock(data));
		});

		socket?.on('itemDragStart', data => {
			dispatch(itemDragStart(data));
		});

		socket?.on('itemDragEnd', data => {
			dispatch(itemDragEnd(data));
		});

		socket?.on('itemEditBlock', data => {
			dispatch(itemEditBlock(data));
		});

		console.log('kanban Join', socket);

		return () => {
			socket?.emit('leavePart', part);
			disconnectSocket();
		};
	}, []);

	useEffect(() => {
		socket?.emit('leavePart', part);
		socket?.emit('joinPart', part);
		socket?.emit('getKanbanData', part);
	}, [part]);

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

			socket?.emit('boxDragBlock', { targetListIndex, part, isDragging: true });
		}

		if (type === 'TaskItem') {
			const targetListIndex = source.droppableId.split('-')[1];

			socket?.emit('itemDragStart', { targetListIndex, part, isDragging: true });
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
			const data = { currentIndex, targetIndex };
			targetBox?.classList.remove('dragging');

			socket?.emit('boxMoving', { currentIndex, targetIndex, part });
			socket?.emit('boxDragBlock', { targetListIndex: targetIndex, part, isDragging: false });

			dispatch(reorderTaskBox({ data, targetTask }));
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
			socket?.emit('itemDragEnd', { targetListIndex, currentListIndex, targetIndex, isDragging: false, part });
		}
	};

	const openDetail = (task: string, targetIndex: number, targetListIndex: number): void => {
		setShowModal(true);
		setTargetTask(task);
		setTargetIndex(targetIndex);
		setTargeListIndex(targetListIndex);

		socket?.emit('itemEditBlock', { targetListIndex, isDragging: true });
	};

	useEffect(() => {
		if (!showModal && String(targetTask)) {
			socket?.emit('editTaskItem', { targetListIndex, targetIndex, task: detailData, part });
			socket?.emit('itemEditBlock', { targetListIndex, isDragging: false });
			dispatch(editTaskDetail({ targetListIndex, targetIndex, task: detailData }));
		}
	}, [showModal, targetTask, targetIndex, targetListIndex]);

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
									openDetail={openDetail}
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
					<TaskDetail targetTask={targetTask} socket={socket} setShowModal={setShowModal} setData={setDetailData} />
				</Modal>
			)}
		</Container>
	);
};

export default KanbanConianer;
