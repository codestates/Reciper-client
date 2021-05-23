import React from 'react';
import Task from '../Task';
import { AddTaskInput, TaskBoxContainer, TaskBoxName, TaskBoxTop, TaskWrap } from './styles';

const TaskBox = (): JSX.Element => {
	return (
		<TaskBoxContainer>
			<TaskBoxTop>
				<TaskBoxName>
					<p>To Do</p>
				</TaskBoxName>
				<AddTaskInput placeholder="+ 테스크를 추가하세요" />
			</TaskBoxTop>
			<TaskWrap>
				<Task dot={true} color="#478bff" />
				<Task period={true} dot={true} color="#ff7e47" />
				<Task period={true} members={true} dot={true} color="#ff4752" />
				<Task dot={true} color="#478bff" />
				<Task period={true} dot={true} color="#ff7e47" />
				<Task dot={true} color="#478bff" />
				<Task period={true} dot={true} color="#ff7e47" />
				<Task period={true} members={true} dot={true} color="#ff4752" />
			</TaskWrap>
		</TaskBoxContainer>
	);
};

export default TaskBox;
