import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, DragStart, Droppable, DropResult } from 'react-beautiful-dnd';
import { useHistory, useParams } from 'react-router';

import TaskBox from '../TaskBox';
import Modal from '../../Common/Modal';
import TaskDetail from '../../Common/TaskDetail';
import Button from '../../Common/Button';

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
	editTaskBox,
} from '../../../reducer/kanban';

import { DeleteAlertBtnWrap, SettingAlert } from '../../Common/WorkSpaceFrame/styles';
import { AddInputMessage, AddTaskBoxBtn, AddTaskBoxInput, Container, TaskBoxWrap } from './styles';

const KanbanConianer = (): JSX.Element => {
	const dispatch = useDispatch();
	const history = useHistory();
	const currentAddress = history.location.pathname.split('/')[3];
	const { projectUrl, part } = useParams<{ projectUrl: string; part: string }>();

	const { taskBox }: kanbanDataType = useSelector(kanbanDataSelector);
	const [socket, connectSocket, disconnectSocket] = useSocket(projectUrl, currentAddress);
	const [connect, setConnect] = useState<boolean>(false);

	const [showAddTaskForm, setShowAddTask] = useState<boolean>(false);
	const [deleteModal, setDeleteModal] = useState<boolean>(false);
	const [boxIndex, setBoxIndex] = useState<number>(0);
	const [title, onChangeTitle, setTitle] = useInput<string>('');

	const [boxDuplicate, setBoxDuplicate] = useState<boolean>(false);
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

	// ?????? ??????
	connectSocket();

	const onAddTaskBox = useCallback(() => {
		if (title.trim() === '') {
			return;
		}

		const isDuplicate = taskBox.filter(box => {
			return box.taskBoxTitle === title;
		})[0];

		if (isDuplicate) {
			setBoxDuplicate(true);
			return;
		}

		socket?.emit('addTaskBox', { title, index: taskBox.length, part });

		dispatch(addTaskBox(title));
		setTitle('');
		setShowAddTask(false);
		setBoxDuplicate(false);
	}, [title, part]);

	const onDeleteTaskBox = useCallback(() => {
		socket?.emit('deleteTaskBox', { targetListIndex: boxIndex, part });
		dispatch(deleteTaskBox(boxIndex));
		setDeleteModal(false);
	}, [socket, boxIndex, part]);

	const openDetail = useCallback(
		(task: string, targetIndex: number, targetListIndex: number): void => {
			setShowModal(true);
			setTargetTask(task);
			setTargetIndex(targetIndex);
			setTargeListIndex(targetListIndex);

			socket?.emit('itemEditBlock', { part, targetListIndex, targetIndex, isDragging: true });
		},
		[socket],
	);

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

			dispatch(reorderTaskBox({ data }));
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

	useEffect(() => {
		socket?.emit('joinPart', part);

		return () => {
			socket?.emit('leavePart', part);
		};
	}, [connect, part]);

	useEffect(() => {
		// ?????? ????????? ??????
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
			dispatch(socketAddTaskItem(data));
		});

		socket?.on('deleteTaskItem', data => {
			dispatch(deleteTaskItem(data));
		});

		socket?.on('boxMoving', data => {
			dispatch(reorderTaskBox({ data }));
		});

		socket?.on('taskMoving', data => {
			dispatch(reorderTaskItem(data));
		});

		socket?.on('editTaskBox', data => {
			dispatch(editTaskBox(data));
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

		socket?.on('connection', () => {
			setTimeout(() => {
				setConnect(true);
			}, 100);
		});

		return () => {
			disconnectSocket();
			setConnect(false);
		};
	}, []);

	useEffect(() => {
		// TaskItem ??????
		if (!showModal && String(targetTask)) {
			socket?.emit('editTaskItem', { targetListIndex, targetIndex, task: detailData, part });
			socket?.emit('itemEditBlock', { part, targetListIndex, targetIndex, isDragging: false });
			dispatch(editTaskDetail({ targetListIndex, targetIndex, task: detailData }));
		}
	}, [showModal, targetTask, targetIndex, targetListIndex]);

	useEffect(() => {
		setBoxDuplicate(false);
	}, [title]);

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
									setDeleteModal={setDeleteModal}
									setBoxIndex={setBoxIndex}
								/>
							))}
							{provided.placeholder}
							{showAddTaskForm ? (
								<div>
									<AddTaskBoxInput
										autoFocus
										placeholder="+ ????????? ????????? ???????????????"
										value={title}
										maxLength={20}
										onChange={onChangeTitle}
										onKeyPress={e => e.key === 'Enter' && onAddTaskBox()}
										onBlur={onAddTaskBox}
									/>
									{boxDuplicate && <AddInputMessage>?????? ???????????? ????????? ???????????????.</AddInputMessage>}
								</div>
							) : (
								<AddTaskBoxBtn onClick={() => setShowAddTask(true)}>+ ????????? ????????? ???????????????</AddTaskBoxBtn>
							)}
						</TaskBoxWrap>
					)}
				</Droppable>
			</DragDropContext>

			{showModal && (
				<Modal setShowModal={setShowModal}>
					<TaskDetail
						targetTask={targetTask}
						socket={socket}
						setTargetTask={setTargetTask}
						setShowModal={setShowModal}
						setData={setDetailData}
					/>
				</Modal>
			)}

			{deleteModal && (
				<Modal setShowModal={setDeleteModal}>
					<SettingAlert>
						<p>?????? ??? ????????? ?????? ???????????????. ?????? ???????????????????</p>
						<DeleteAlertBtnWrap>
							<Button size="medium" margin="0 10px 0 0" buttonType="cancel" clickEvent={() => setDeleteModal(false)}>
								??????
							</Button>
							<Button size="medium" backgroundColor="delete" clickEvent={onDeleteTaskBox}>
								??????
							</Button>
						</DeleteAlertBtnWrap>
					</SettingAlert>
				</Modal>
			)}
		</Container>
	);
};

export default KanbanConianer;
