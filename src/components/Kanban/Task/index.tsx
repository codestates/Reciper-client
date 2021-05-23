import React from 'react';
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

interface TestProps {
	period?: boolean;
	members?: boolean;
	dot?: boolean;
	color: string;
}

const Task = ({ period, members, dot, color }: TestProps): JSX.Element => {
	return (
		<TaskCoantainer>
			<ColorLabel style={{ backgroundColor: `${color}` }} />
			<TaskSimpleWrap>
				<TaskName>Test Task</TaskName>
				{/* period가 있다면 */}
				{period && <TaskPeriod>5월 20일 ~ 5월 23일</TaskPeriod>}
				{/* 참여 멤버가 있다면 */}
				{members && (
					<TaskMembers>
						<EXImage1>W</EXImage1>
						<EXImage2>U</EXImage2>
						<EXImage3>K</EXImage3>
						<EXImage4>J</EXImage4>
					</TaskMembers>
				)}
				{/* 내용이나 체크리스트가 있다면 */}
				{dot && (
					<DotWrap className="dot">
						<span></span>
						<span></span>
						<span></span>
					</DotWrap>
				)}
			</TaskSimpleWrap>
		</TaskCoantainer>
	);
};

export default Task;
