import React from 'react';
import WorkSpaceFrame from '../components/Common/WorkSpaceFrame';
import KanbanConianer from '../components/Kanban/KanbanContainer';

const Kanban = (): JSX.Element => {
	const listData = ['Login', 'Kanban Board', 'Calendar'];

	return (
		<WorkSpaceFrame listData={listData}>
			<KanbanConianer />
		</WorkSpaceFrame>
	);
};

export default Kanban;
