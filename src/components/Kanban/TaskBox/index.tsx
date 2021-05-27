import React, { useCallback, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import TaskItem from '../TaskItem';

import useInput from '../../../hooks/useInput';

import { taskBoxDataType } from '../../../types/types';

import { deleteTaskBox, addTaskItem } from '../../../reducer/kanban';

import { AddTaskInput, TaskBoxContainer, TaskBoxName, TaskBoxTop, DeleteTaskBoxBtn } from './styles';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { useParams } from 'react-router';

interface Props {
	taskBoxData: taskBoxDataType;
	index: number;
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
	openModalHooks: (task: string) => void;
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

const TaskBox = ({ socket, taskBoxData, index, openModalHooks }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { part } = useParams<{ part: string }>();
	const { taskBoxTitle, tasks } = taskBoxData;

	const [taskTitle, onChangeTaskTitle, setTaskTitle] = useInput<string>('');

	const onDeleteTaskBox = useCallback(() => {
		socket?.emit('deleteTaskBox', { targetListIndex: index, part });
		dispatch(deleteTaskBox(index));
	}, []);

	const onAddTaskItem = () => {
		if (taskTitle.trim() === '') {
			return;
		}

		const taskColor = randomColor();

		socket?.emit('addTaskItem', { targetListIndex: index, part, taskTitle, taskColor });
		dispatch(addTaskItem({ taskTitle, index, taskColor }));

		setTaskTitle('');
	};

	return (
		<Draggable draggableId={`TaskBox-${index}`} index={index}>
			{provided => (
				<TaskBoxContainer className={`TaskBox-${index}`} ref={provided.innerRef} {...provided.draggableProps}>
					<TaskBoxTop {...provided.dragHandleProps}>
						<TaskBoxName>
							<p>{taskBoxTitle}</p>
							<DeleteTaskBoxBtn className="deleteBtn" onClick={onDeleteTaskBox} />
						</TaskBoxName>
						<AddTaskInput
							placeholder="+ 테스크를 추가하세요"
							value={taskTitle}
							onChange={onChangeTaskTitle}
							onKeyPress={e => e.key === 'Enter' && onAddTaskItem()}
						/>
					</TaskBoxTop>
					<TaskItem taskData={tasks} boxIndex={index} openModalHooks={openModalHooks} />
				</TaskBoxContainer>
			)}
		</Draggable>
	);
};

export default TaskBox;
