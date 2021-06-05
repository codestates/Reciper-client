import React, { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { Socket } from 'socket.io-client';
import { useParams } from 'react-router';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

import TaskItem from '../TaskItem';

import useInput from '../../../hooks/useInput';

import { taskBoxDataType } from '../../../types/types';

import { deleteTaskBox, addTaskItem } from '../../../reducer/kanban';

import {
	AddTaskInput,
	TaskBoxContainer,
	TaskBoxName,
	TaskBoxTop,
	DeleteTaskBoxBtn,
	BtnWrap,
	EditTaskBoxBtn,
} from './styles';

interface Props {
	taskBoxData: taskBoxDataType;
	index: number;
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
	openDetail: (task: string, targetIndex: number, targetListIndex: number) => void;
}

const randomColor = (): string => {
	const colors: string[] = [
		'#e06347',
		'#ff4752',
		'#c41c4f',
		'#e9658a',
		'#bfc0bb',
		'#00c875',
		'#fdba51',
		'#ff7e47',
		'#3b4b87',
		'#00609c',
		'#bb76b2',
		'#2c96d2',
		'#478bff',
		'#5d2838',
		'#155d4f',
		'#cd3679',
		'#fed501',
		'#a9b2b1',
		'#a0a8a5',
		'#cfb687',
	];
	const random: number = Math.floor(Math.random() * colors.length);

	return colors[random];
};

const TaskBox = ({ socket, taskBoxData, index, openDetail }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { part } = useParams<{ part: string }>();
	const { taskBoxTitle, tasks, dragging } = taskBoxData;

	const [taskTitle, onChangeTaskTitle, setTaskTitle] = useInput<string>('');
	const [BoxTitle, onChangeBoxTitle, setBoxTitle] = useInput<string>(taskBoxTitle);
	const [taskBoxForm, setTaskBoxForm] = useState<boolean>(false);

	const onDeleteTaskBox = useCallback(() => {
		socket?.emit('deleteTaskBox', { targetListIndex: index, part });
		dispatch(deleteTaskBox(index));
	}, []);

	const onAddTaskItem = useCallback(() => {
		if (taskTitle.trim() === '') {
			return;
		}

		const taskColor = randomColor();

		socket?.emit('addTaskItem', { targetListIndex: index, part, taskTitle, taskColor });
		dispatch(addTaskItem({ taskTitle, index, taskColor }));

		setTaskTitle('');
	}, [taskTitle]);

	const onChangeTaskBoxTitle = useCallback(() => {
		if (BoxTitle.trim() === '') {
			setBoxTitle(taskBoxTitle);
		}

		setTaskBoxForm(false);
		socket?.emit('editTaskBox', { targetListIndex: index, title: BoxTitle, part });
	}, [BoxTitle]);

	useEffect(() => {
		setBoxTitle(taskBoxTitle);
	}, [taskBoxTitle]);

	return (
		<Draggable draggableId={`TaskBox-${index}`} isDragDisabled={dragging} index={index}>
			{provided => (
				<TaskBoxContainer
					className={`TaskBox-${index} ${dragging ? 'block' : ''}`}
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<TaskBoxTop {...provided.dragHandleProps}>
						<TaskBoxName>
							{taskBoxForm ? (
								<input
									autoFocus
									value={BoxTitle}
									placeholder="변경할 이름을 작성하세요"
									onChange={onChangeBoxTitle}
									onBlur={onChangeTaskBoxTitle}
									onKeyPress={(e: KeyboardEvent) => e.key === 'Enter' && onChangeTaskBoxTitle()}
								/>
							) : (
								<p>{BoxTitle}</p>
							)}
							<BtnWrap>
								<EditTaskBoxBtn className="editBtn" onClick={() => setTaskBoxForm(true)} />
								<DeleteTaskBoxBtn className="deleteBtn" onClick={onDeleteTaskBox} />
							</BtnWrap>
						</TaskBoxName>
						<AddTaskInput
							placeholder="+ 테스크를 추가하세요"
							value={taskTitle}
							onChange={onChangeTaskTitle}
							onKeyPress={e => e.key === 'Enter' && !dragging && onAddTaskItem()}
						/>
					</TaskBoxTop>
					<TaskItem taskData={tasks} boxIndex={index} openDetail={openDetail} />
				</TaskBoxContainer>
			)}
		</Draggable>
	);
};

export default TaskBox;
