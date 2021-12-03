import React from 'react';
import { Route, Switch } from 'react-router';
import Project from '../pages/Project';
import ProjectCreate from '../pages/ProjectCreate';
import ProjectEdit from '../pages/ProjectEdit';

const ProjectRoute = (): JSX.Element => {
	return (
		<>
			<Switch>
				<Route exact path="/project" component={Project} />
				<Route path="/project/create" component={ProjectCreate} />
				<Route path="/project/:projectUrl/edit" component={ProjectEdit} />
			</Switch>
		</>
	);
};

export default ProjectRoute;
