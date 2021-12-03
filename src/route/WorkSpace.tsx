import React from 'react';
import { Route, Switch } from 'react-router';
import Calendar from '../pages/Calendar';
import Chat from '../pages/Chat';
import Kanban from '../pages/Kanban';

const WorkSpaceRoute = (): JSX.Element => {
	return (
		<>
			<Switch>
				<Route path="/workspace/:projectUrl/chat/:part" component={Chat} />
				<Route path="/workspace/:projectUrl/calendar/:part" component={Calendar} />
				<Route path="/workspace/:projectUrl/kanban/:part" component={Kanban} />
			</Switch>
		</>
	);
};

export default WorkSpaceRoute;
