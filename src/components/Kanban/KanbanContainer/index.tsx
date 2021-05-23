import React from 'react';
import TaskBox from '../TaskBox';
import { AddTaskBoxBtn, Container, TaskBoxWrap } from './styles';

const KanbanConianer = (): JSX.Element => {
	return (
		<Container>
			<TaskBoxWrap>
				<TaskBox />
				<TaskBox />
				<TaskBox />
				<AddTaskBoxBtn placeholder="+ 테스크 박스를 추가하세요" />
			</TaskBoxWrap>
		</Container>
	);
};

export default KanbanConianer;
