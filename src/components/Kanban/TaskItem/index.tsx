import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

import { kanbanDataSelector } from '../../../reducer/kanban';

import {
	ColorLabel,
	DotWrap,
	EXImage1,
	EXImage2,
	EXImage3,
	EXImage4,
	TaskCoantainer,
	TaskMembers,
	TaskName,
	TaskPeriod,
	TaskSimpleWrap,
	TaskWrap,
} from './styles';

interface Props {
	taskData: string[];
	boxIndex: number;
	openDetail: (task: string, targetIndex: number, targetListIndex: number) => void;
}

const TaskItem = ({ taskData, boxIndex, openDetail }: Props): JSX.Element => {
	const { taskItems } = useSelector(kanbanDataSelector);

	return (
		<>
			<Droppable droppableId={`TaskItem-${boxIndex}`} type="TaskItem">
				{provided => (
					<TaskWrap ref={provided.innerRef}>
						{taskData.map((task, index) => {
							const { taskTitle, taskColor, startDate, endDate, assignees, dragging } = taskItems[task];

							return (
								<Draggable key={task} draggableId={String(task)} isDragDisabled={dragging} index={index}>
									{provided => (
										<TaskCoantainer
											className={`${dragging ? 'block' : ''}`}
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											onClick={() => !dragging && openDetail(task, index, boxIndex)}
										>
											<ColorLabel style={{ backgroundColor: `${taskColor}` }} />
											<TaskSimpleWrap>
												<TaskName>{taskTitle}</TaskName>

												{/* period가 있다면 */}
												{(startDate || endDate) && <TaskPeriod>{`${startDate} ~ ${endDate}`}</TaskPeriod>}

												{/* 참여 멤버가 있다면 */}
												{!!assignees.length && (
													<TaskMembers>
														<EXImage1>W</EXImage1>
														<EXImage2>U</EXImage2>
														<EXImage3>K</EXImage3>
														<EXImage4>J</EXImage4>
													</TaskMembers>
												)}

												<DotWrap className="dot">
													<span></span>
													<span></span>
													<span></span>
												</DotWrap>
											</TaskSimpleWrap>
										</TaskCoantainer>
									)}
								</Draggable>
							);
						})}
						{provided.placeholder}
					</TaskWrap>
				)}
			</Droppable>
		</>
	);
};

export default TaskItem;
