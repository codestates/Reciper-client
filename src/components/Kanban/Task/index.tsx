import React from 'react';
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
} from './styles';

interface Props {
	taskId: string;
}

const Task = ({ taskId }: Props): JSX.Element => {
	const { taskItems } = useSelector(kanbanDataSelector);
	const { taskTitle, taskColor, startDate, endDate, assigness } = taskItems[taskId];

	return (
		<TaskCoantainer>
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
	);
};

export default Task;
