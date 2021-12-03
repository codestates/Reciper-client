import React from 'react';
import { Route, Switch } from 'react-router';
import Auth from '../hoc/Auth';
import Recruit from '../pages/Recruit';
import RecruitCreate from '../pages/RecruitCreate';
import RecruitDetail from '../pages/RecruitDetail';

const RecruitRoute = (): JSX.Element => {
	return (
		<>
			<Switch>
				<Route exact path="/recruit" component={Recruit} />
				<Route path="/recruit/detail/:id" component={RecruitDetail} />
				<Route path="/recruit/create" component={Auth(RecruitCreate)} />
			</Switch>
		</>
	);
};

export default RecruitRoute;
