import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Project from './pages/Project';
import ProjectCreate from './pages/ProjectCreate';
import ProjectEdit from './pages/ProjectEdit';
import Recruit from './pages/Recruit';
import RecruitCreate from './pages/RecruitCreate';
import RecruitDetail from './pages/RecruitDetail';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const App = (): JSX.Element => {
	const history = useHistory();
	const url = new URL(window.location.href);
	const authorizationCode = url.searchParams.get('code');
	const scope = url.searchParams.get('scope');
	const email = url.searchParams.get('email');
	const location = window.localStorage.getItem('location');

	useEffect(() => {
		const data = {
			authorizationCode: authorizationCode,
			email: email,
			endpoint: location,
		};

		console.log(authorizationCode);
		console.log(email);
		console.log(location);

		if (authorizationCode) {
			axios.post(`${process.env.REACT_APP_SERVER_URL}/loginEmail`, data).then(data => console.log(data.data));
		}
	}, []);

	return (
		<div>
			<Switch>
				<Redirect exact path="/" to="landing" />
				<Route path="/landing" component={Landing} />
				<Route exact path="/recruit" component={Recruit} />
				<Route path="/recruit/:id" component={RecruitDetail} />
				<Route path="/recruit/create" component={RecruitCreate} />
				<Route exact path="/profile/:id" component={Profile} />
				<Route path="/profile/:id/edit" component={ProfileEdit} />
				<Route exact path="/project/:id" component={Project} />
				<Route path="/project/:id/create" component={ProjectCreate} />
				<Route path="/project/:id/edit" component={ProjectEdit} />
			</Switch>
		</div>
	);
};

export default App;
