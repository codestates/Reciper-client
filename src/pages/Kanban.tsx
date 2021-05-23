import React from 'react';
import WorkSpaceFrame from '../components/Common/WorkSpaceFrame';

const Kanban = (): JSX.Element => {
	const listData = ['Login', 'Kanban Board', 'Calendar'];

	return <WorkSpaceFrame listData={listData}>123</WorkSpaceFrame>;
};

export default Kanban;
