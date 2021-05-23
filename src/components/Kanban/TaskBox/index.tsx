import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { deleteTaskBox, addTaskItem } from '../../../reducer/kanban';
import { taskBoxDataType } from '../../../types/types';
import Task from '../Task';
import { AddTaskInput, TaskBoxContainer, TaskBoxName, TaskBoxTop, TaskWrap, DeleteTaskBoxBtn } from './styles';

interface Props {
	taskBoxData: taskBoxDataType;
	index: number;
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

const TaskBox = ({ taskBoxData, index }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { taskBoxTitle, tasks } = taskBoxData;

	const [taskTitle, onChangeTaskTitle, setTaskTitle] = useInput<string>('');

	const onDeleteTaskBox = useCallback(() => {
		dispatch(deleteTaskBox(index));
	}, []);

	const onAddTaskItem = () => {
		dispatch(addTaskItem({ taskTitle, index, taskColor: randomColor() }));

		setTaskTitle('');
	};

	return (
		<TaskBoxContainer>
			<TaskBoxTop>
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
			<TaskWrap>
				{tasks.map((task, index) => (
					<Task key={index} taskId={task} />
				))}
			</TaskWrap>
		</TaskBoxContainer>
	);
};

export default TaskBox;
