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
}

const TaskItem = ({ taskData, boxIndex }: Props): JSX.Element => {
	const { taskItems } = useSelector(kanbanDataSelector);

	return (
		<Droppable droppableId={`TaskItem-${boxIndex}`} type="TaskItem">
			{provided => (
				<TaskWrap ref={provided.innerRef}>
					{taskData.map((task, index) => {
						const { taskTitle, taskColor, startDate, endDate, assigness } = taskItems[task];

						return (
							<Draggable key={task} draggableId={task} index={index}>
								{provided => (
									<TaskCoantainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
										<ColorLabel style={{ backgroundColor: `${taskColor}` }} />
										<TaskSimpleWrap>
											<TaskName>{taskTitle}</TaskName>

											{/* period가 있다면 */}
											{startDate && endDate && <TaskPeriod>{`${startDate} ~ ${endDate}`}</TaskPeriod>}

											{/* 참여 멤버가 있다면 */}
											{assigness && (
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
	);
};

export default TaskItem;
