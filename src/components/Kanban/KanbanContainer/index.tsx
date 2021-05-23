import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { addTaskBox, kanbanDataSelector } from '../../../reducer/kanban';
import { kanbanDataType } from '../../../types/types';
import TaskBox from '../TaskBox';
import { AddTaskBoxBtn, AddTaskBoxInput, Container, TaskBoxWrap } from './styles';

const KanbanConianer = (): JSX.Element => {
	const dispatch = useDispatch();
	const { taskBox }: kanbanDataType = useSelector(kanbanDataSelector);

	const [showAddTaskForm, setShowAddTask] = useState<boolean>(false);
	const [title, onChangeTitle, setTitle] = useInput<string>('');

	const onAddTaskBox = useCallback(() => {
		if (title.trim() === '') {
			return;
		}

		dispatch(addTaskBox(title));
		setTitle('');
		setShowAddTask(false);
	}, [title]);

	return (
		<Container>
			<TaskBoxWrap>
				{taskBox.map((taskBox, index) => (
					<TaskBox key={index} taskBoxData={taskBox} index={index} />
				))}
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
