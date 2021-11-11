import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { useParams } from 'react-router';

import useInput from '../../../hooks/useInput';
import dateFormat from '../../../utils/dateformat';
import Assignees from './Assignees';
import ColorLabel from './ColorLabel';
import Title from './Title';
import Desc from './Desc';
import Period from './Period';
import CheckList from './CheckList';
import Comment from './Comment';

import {
	kanbanDataType,
	taskDataType,
	taskChackListDataType,
	taskCommentDataType,
	RecruitWriterDataType,
	projectInfoDataType,
} from '../../../types/types';

import { deleteTaskItem, kanbanDataSelector } from '../../../reducer/kanban';
import { projectInfoSelector } from '../../../reducer/projectInfo';

import { ColorHat, TaskDeleteBtn, TaskDetailContainer } from './styles';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

interface Props {
	targetTask: string;
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
	setTargetTask: Dispatch<SetStateAction<string>>;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	setData: Dispatch<SetStateAction<taskDataType>>;
}

const TaskDetail = ({ targetTask, socket, setTargetTask, setShowModal, setData }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { part } = useParams<{ part: string }>();
	const { taskBox, taskItems }: kanbanDataType = useSelector(kanbanDataSelector);
	const { members }: projectInfoDataType = useSelector(projectInfoSelector);

	const taskData: taskDataType = taskItems[targetTask];
	const startDateInit = taskData.startDate ? new Date(taskData.startDate) : undefined;
	const endDateInit = taskData.endDate ? new Date(taskData.endDate) : undefined;

	const [taskTitle, onChangeTaskTitle] = useInput<string>(taskData.taskTitle);
	const [desc, onChangeDesc] = useInput<string>(taskData.desc);
	const [checkList, setCheckList] = useState<taskChackListDataType[]>(taskData.checkList);
	const [comment, setComment] = useState<taskCommentDataType[]>(taskData.comment);
	const [startDate, setStartDate] = useState<Date | undefined>(startDateInit);
	const [endDate, setEndDate] = useState<Date | undefined>(endDateInit);
	const [selectedMember, setSelectedMember] = useState<RecruitWriterDataType[]>(taskData.assignees);
	const [taskColor, setTaskColor] = useState<string>(taskData.taskColor);

	const onDeleteTaskItem = useCallback(() => {
		let target = [0, 0];

		taskBox.forEach((box, index) => {
			if (box.tasks.indexOf(targetTask) + 1) {
				target = [index, box.tasks.indexOf(targetTask)];
			}
		});

		socket?.emit('deleteTaskItem', { targetListIndex: target[0], targetIndex: target[1], part });
		dispatch(deleteTaskItem({ targetListIndex: target[0], targetIndex: target[1] }));
		setShowModal(false);
		setTargetTask('');
	}, []);

	useEffect(() => {
		setData({
			taskTitle: taskTitle.trim() || taskData.taskTitle,
			desc,
			checkList,
			comment,
			startDate: dateFormat(startDate as Date),
			endDate: dateFormat(endDate as Date),
			taskColor,
			assignees: selectedMember,
			dragging: false,
		});
	}, [taskTitle, desc, checkList, comment, startDate, endDate, selectedMember, taskColor]);

	return (
		<TaskDetailContainer>
			<ColorHat style={{ backgroundColor: `${taskColor}` }} />
			<TaskDeleteBtn onClick={() => onDeleteTaskItem()}>테스크 삭제</TaskDeleteBtn>
			<Title taskTitle={taskTitle} onChangeTaskTitle={onChangeTaskTitle} />
			<Desc desc={desc} onChangeDesc={onChangeDesc} />
			<Period startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
			<Assignees members={members} selectedMember={selectedMember} setSelectedMember={setSelectedMember} />
			<ColorLabel taskColor={taskColor} setTaskColor={setTaskColor} />
			<CheckList checkList={checkList} setCheckList={setCheckList} />
			<Comment comment={comment} setComment={setComment} />
		</TaskDetailContainer>
	);
};

export default TaskDetail;
