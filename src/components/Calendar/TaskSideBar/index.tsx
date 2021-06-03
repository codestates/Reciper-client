import { Dayjs } from 'dayjs';
import React, { Dispatch, SetStateAction } from 'react';
import { taskDataType } from '../../../types/types';
import { CloseBtn, SideBarContainer } from './styles';

interface Props {
	tasks: taskDataType[];
	sideDate: Dayjs;
	setOpenSide: Dispatch<SetStateAction<boolean>>;
}

const TaskSideBar = ({ tasks, sideDate, setOpenSide }: Props): JSX.Element => {
	return (
		<SideBarContainer>
			<CloseBtn onClick={() => setOpenSide(false)} />
			{sideDate.format('YYYYMMDD')}
		</SideBarContainer>
	);
};

export default TaskSideBar;
