import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { Socket } from 'socket.io-client';
import { useParams } from 'react-router';

import useInput from '../../../hooks/useInput';
import dateFormat from '../../../utils/dateformat';
import Assignees from './Assignees';

import {
	kanbanDataType,
	taskDataType,
	taskChackListDataType,
	taskCommentDataType,
	RecruitWriterDataType,
	projectInfoDataType,
} from '../../../types/types';

import { deleteTaskItem, kanbanDataSelector } from '../../../reducer/kanban';

import { TaskDeleteBtn, TaskDetailContainer, Test } from './styles';
import ColorLabel from './ColorLabel';
import { projectInfoSelector } from '../../../reducer/projectInfo';
import Title from './Title';
import Desc from './Desc';
import Period from './Period';
import CheckList from './CheckList';
import Comment from './Comment';

interface Props {
	targetTask: string;
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	setData: Dispatch<SetStateAction<taskDataType>>;
}

const TaskDetail = ({ targetTask, socket, setShowModal, setData }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { part } = useParams<{ part: string }>();
	const { taskBox, taskItems }: kanbanDataType = useSelector(kanbanDataSelector);
	const { members }: projectInfoDataType = useSelector(projectInfoSelector);

	const taskData: taskDataType = taskItems[targetTask];
	const startDateInit = taskData.startDate
		? new Date(`${taskData.startDate[0]}-${taskData.startDate.slice(3, 5)}`)
		: undefined;
	const endDateInit = taskData.endDate ? new Date(`${taskData.endDate[0]}-${taskData.endDate.slice(3, 5)}`) : undefined;

	const [taskTitle, onChangeTaskTitle] = useInput<string>(taskData.taskTitle);
	const [desc, onChangeDesc] = useInput<string>(taskData.desc);
	const [checkList, setCheckList] = useState<taskChackListDataType[]>(taskData.checkList);
	const [comment, setComment] = useState<taskCommentDataType[]>(taskData.comment);
	const [startDate, setStartDate] = useState<Date | undefined>(startDateInit);
	const [endDate, setEndDate] = useState<Date | undefined>(endDateInit);
	const [selectedMember, setSelectedMember] = useState<RecruitWriterDataType[]>(taskData.assignees);
	const [taskColor, setTaskColor] = useState<string>(taskData.taskColor);

	const onDeleteTaskItem = () => {
		let target = [0, 0];

		taskBox.forEach((box, index) => {
			if (box.tasks.indexOf(targetTask) + 1) {
				target = [index, box.tasks.indexOf(targetTask)];
			}
		});

		socket?.emit('deleteTaskItem', { targetListIndex: target[0], targetIndex: target[1], part });
		dispatch(deleteTaskItem({ targetListIndex: target[0], targetIndex: target[1] }));
		setShowModal(false);
	};

	useEffect(() => {
		setData({
			taskTitle,
			desc,
			checkList,
			comment,
			startDate: dateFormat(startDate as Date, 'md'),
			endDate: dateFormat(endDate as Date, 'md'),
			taskColor,
			assignees: selectedMember,
			dragging: false,
		});
	}, [taskTitle, desc, checkList, comment, startDate, endDate, selectedMember, taskColor]);

	return (
		<TaskDetailContainer>
			<Test style={{ backgroundColor: `${taskColor}` }} />
			<TaskDeleteBtn onClick={() => onDeleteTaskItem()}>테스크 삭제</TaskDeleteBtn>
			<Title taskTitle={taskTitle} onChangeTaskTitle={onChangeTaskTitle} />
			<Desc desc={desc} onChangeDesc={onChangeDesc} />
			<Assignees members={members} selectedMember={selectedMember} setSelectedMember={setSelectedMember} />
			<ColorLabel taskColor={taskColor} setTaskColor={setTaskColor} />
			<Period startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
			<CheckList checkList={checkList} setCheckList={setCheckList} />
			<Comment comment={comment} setComment={setComment} />
		</TaskDetailContainer>
	);
};

export default TaskDetail;
