import React, { useEffect, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

import Modal from '../../Common/Modal';
import TaskDetail from '../../Common/TaskDetail';

import { editTaskDetail, kanbanDataSelector } from '../../../reducer/kanban';
import { taskDataType } from '../../../types/types';

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
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
}

const TaskItem = ({ taskData, boxIndex, socket }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { part } = useParams<{ part: string }>();
	const { taskItems } = useSelector(kanbanDataSelector);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [targetTask, setTargetTask] = useState<string>('');
	const [targetIndex, setTargetIndex] = useState<number>(0);
	const [detailData, setDetailData] = useState<taskDataType>({
		taskTitle: '',
		desc: '',
		checkList: [],
		comment: [],
		startDate: '',
		endDate: '',
		taskColor: '',
		assignees: [],
	});

	const test = (task: string, index: number) => {
		setShowModal(true);
		setTargetTask(task);
		setTargetIndex(index);
	};

	useEffect(() => {
		if (!showModal && String(targetTask)) {
			socket?.emit('editTaskItem', { targetListIndex: boxIndex, targetIndex, task: detailData, part });
			dispatch(editTaskDetail({ targetListIndex: boxIndex, targetIndex, task: detailData }));
		}
	}, [showModal, targetTask, targetIndex]);

	return (
		<>
			<Droppable droppableId={`TaskItem-${boxIndex}`} type="TaskItem">
				{provided => (
					<TaskWrap ref={provided.innerRef}>
						{taskData.map((task, index) => {
							const { taskTitle, taskColor, startDate, endDate, assignees } = taskItems[task];

							return (
								<Draggable key={task} draggableId={String(task)} index={index}>
									{provided => (
										<TaskCoantainer
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											onClick={() => test(task, index)}
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
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<TaskDetail targetTask={targetTask} socket={socket} setShowModal={setShowModal} setData={setDetailData} />
				</Modal>
			)}
		</>
	);
};

export default TaskItem;
