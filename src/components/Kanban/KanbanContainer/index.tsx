import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, DragStart, Droppable, DropResult } from 'react-beautiful-dnd';

import TaskBox from '../TaskBox';

import useInput from '../../../hooks/useInput';

import { kanbanDataType } from '../../../types/types';

import { addTaskBox, kanbanDataSelector, reorderTaskBox, reorerTaskItem } from '../../../reducer/kanban';

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

	const onDragStart = (initial: DragStart): void => {
		if (initial.type === 'TaskBox') {
			const targetBox = document.querySelector(`.${initial.draggableId}`);
			targetBox?.classList.add('dragging');
		}
	};

	const onDragEnd = (result: DropResult): void => {
		const { type, source, destination } = result;
		console.log(result);
		if (!destination) {
			return;
		}

		if (type === 'TaskBox') {
			const currentIndex = source.index;
			const targetIndex = destination.index;
			const targetBox = document.querySelector(`.${result.draggableId}`);
			targetBox?.classList.remove('dragging');

			dispatch(reorderTaskBox({ currentIndex, targetIndex }));
		}

		if (type === 'TaskItem') {
			const currentIndex = source.index;
			const targetIndex = destination.index;
			const currentListIndex = Number(source.droppableId.split('-')[1]);
			const targetListIndex = Number(destination.droppableId.split('-')[1]);
			console.log(currentIndex, targetIndex, currentListIndex, targetListIndex);
			dispatch(reorerTaskItem({ currentIndex, targetIndex, currentListIndex, targetListIndex }));
		}
	};

	return (
		<Container>
			<DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
				<Droppable droppableId="TaskBoxArea" type="TaskBox" direction="horizontal">
					{provided => (
						<TaskBoxWrap ref={provided.innerRef}>
							{taskBox.map((taskBox, index) => (
								<TaskBox key={`TaskBox-${index}`} taskBoxData={taskBox} index={index} />
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

// const [kanbanData, setKanbanData] = useState<kanbanDataType>({
// 	taskBox: [{ title: '', tasks: ['0'] }],
// 	taskItem: {
// 		'0': { title: '', desc: '', taskColor: '', startDate: '', endData: '', assigness: '', checkList: [] },
// 	},
// });
