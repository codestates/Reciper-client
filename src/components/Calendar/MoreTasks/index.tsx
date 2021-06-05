import { Dayjs } from 'dayjs';
import React, { Dispatch, MouseEvent, SetStateAction } from 'react';
import { taskDataType } from '../../../types/types';
import { CloseBtn, DateTitle, MoreTasksContainer, MoreTop, TaskItem, NotTask } from './styles';

interface Props {
	dayIndex: number;
	weekIndex: number;
	day: Dayjs;
	tasks: taskDataType[];
	setOpenTargetDate: Dispatch<SetStateAction<string>>;
}

const MoreTasks = ({ dayIndex, weekIndex, day, tasks, setOpenTargetDate }: Props): JSX.Element => {
	const onCloseMore = (e: MouseEvent): void => {
		e.stopPropagation();
		setOpenTargetDate('');
	};
	console.log(weekIndex);
	return (
		<MoreTasksContainer
			style={{
				left: `${dayIndex >= 5 && 'calc(-110% - 10px)'}`,
				bottom: `${weekIndex === 5 && '10px'}`,
			}}
		>
			<MoreTop>
				<DateTitle>{day.format('YYYY년 M월 DD일')}</DateTitle>
				<CloseBtn onClick={onCloseMore} />
			</MoreTop>
			{tasks.map((task, index) => (
				<TaskItem
					key={index}
					style={{ backgroundColor: `${task.taskColor}`, opacity: `${task.dragging ? '0.3' : '1'}` }}
				>
					{task.taskTitle}
				</TaskItem>
			))}
			{tasks.length === 0 && <NotTask>테스크가 존재하지 않습니다.</NotTask>}
		</MoreTasksContainer>
	);
};

export default MoreTasks;
