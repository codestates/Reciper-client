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
import axios, { AxiosResponse } from 'axios';
import { loginRequestType, loginResponseDataType } from './types/types';
import { getProfileInfo } from './reducer/profile';
import { useDispatch } from 'react-redux';
import WorkSpace from './pages/WorkSpace';

const App = (): JSX.Element => {
	const history = useHistory();
	const url = new URL(window.location.href);
	const authorizationCode = url.searchParams.get('code');
	const email = url.searchParams.get('email');
	const isGoogle = url.searchParams.get('scope');
	const location = window.localStorage.getItem('location');
	const dispatch = useDispatch();
	const loginSuccess = window.localStorage.getItem('loginSuccess');

	const loginAuthRequest = async (data: loginRequestType, endpoint: string) => {
		const response: AxiosResponse<loginResponseDataType> = await axios.post(
			`${process.env.REACT_APP_SERVER_URL}/${endpoint}`,
			data,
		);

		window.localStorage.setItem('loginSuccess', 'success');
		window.localStorage.setItem('loginInfo', JSON.stringify(response.data));

		if (location) {
			history.push(location as string);
		} else {
			history.push('/');
		}
	};

	useEffect(() => {
		if (loginSuccess) {
			dispatch(getProfileInfo());
		}

		const data: loginRequestType = {
			authorizationCode: authorizationCode,
			email: email,
		};

		if (authorizationCode) {
			if (email) {
				loginAuthRequest(data, 'loginEmail');
			} else if (isGoogle) {
				loginAuthRequest(data, 'loginGoogle');
			} else {
				loginAuthRequest(data, 'loginGithub');
			}
		}
	}, []);

	return (
		<div>
			<Switch>
				<Redirect exact path="/" to="landing" />
				<Route path="/landing" component={Landing} />
				<Route exact path="/recruit" component={Recruit} />
				<Route path="/recruit/:id" component={RecruitDetail} />
				<Route path="/recruitcreate" component={RecruitCreate} />
				<Route exact path="/profile/:id" component={Profile} />
				<Route path="/profile/:id/edit" component={ProfileEdit} />
				<Route exact path="/project" component={Project} />
				<Route path="/projectcreate" component={ProjectCreate} />
				<Route path="/project/:projectUrl/edit" component={ProjectEdit} />
				<Route path="/workspace/:projectUrl" component={WorkSpace} />
			</Switch>
		</div>
	);
};

export default App;
