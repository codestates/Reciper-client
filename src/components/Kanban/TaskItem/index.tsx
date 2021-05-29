import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

import { kanbanDataSelector } from '../../../reducer/kanban';
import ProfileImage from '../../Common/ProfileImage';

import {
	ColorLabel,
	DotWrap,
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
														{assignees.map((member, index) => (
															<ProfileImage
																key={index}
																width="30px"
																height="30px"
																margin="0 -15px 0 0"
																profileImage={member.uploadImage}
																profileColor={member.profileColor}
																userName={member.name}
															/>
														))}
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
