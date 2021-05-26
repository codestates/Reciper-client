import React from 'react';
import WorkSpaceFrame from '../components/Common/WorkSpaceFrame';
import KanbanConianer from '../components/Kanban/KanbanContainer';

const Kanban = (): JSX.Element => {
	return (
		<WorkSpaceFrame>
			<KanbanConianer />
		</WorkSpaceFrame>
	);
};

export default Kanban;
