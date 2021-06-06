import React, { useCallback, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import LoginLoading from './pages/LoginLoading';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Project from './pages/Project';
import ProjectCreate from './pages/ProjectCreate';
import ProjectEdit from './pages/ProjectEdit';
import Recruit from './pages/Recruit';
import RecruitCreate from './pages/RecruitCreate';
import RecruitDetail from './pages/RecruitDetail';
import JoinProject from './pages/JoinProject';
import Chat from './pages/Chat';
import Kanban from './pages/Kanban';
import Calendar from './pages/Calendar';

import { getProfileInfo } from './reducer/profile';
import { loginSelector } from './reducer/login';

import getLoginInfo from './utils/getLoginInfo';

import { loginDataType } from './types/types';
import WebRTC from './pages/WebRTC';

const App = (): JSX.Element => {
	const dispatch = useDispatch();
	const loginSuccess: loginDataType = useSelector(loginSelector);
	const [success, setSuccess] = useState<boolean>(false);

	axios.defaults.withCredentials = true;

	const refreshRequest = useCallback(async () => {
		const { accessToken, loginType } = getLoginInfo();
		const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/newAccessToken`, {
			headers: {
				authorization: `Bearer ${accessToken}`,
				loginType,
			},
		});

		if (response.status === 200) {
			window.localStorage.setItem('loginSuccess', 'success');
			window.localStorage.setItem('loginInfo', JSON.stringify(response.data));
		}
	}, []);

	useEffect(() => {
		setSuccess(loginSuccess.success);
	}, [loginSuccess]);

	useEffect(() => {
		dispatch(getProfileInfo());

		setInterval(() => {
			refreshRequest();
		}, 1500000);
	}, [success]);

	return (
		<div>
			<Switch>
				<Redirect exact path="/" to="landing" />
				<Route path="/loginloading" component={LoginLoading} />
				<Route path="/landing" component={Landing} />
				<Route exact path="/recruit" component={Recruit} />
				<Route path="/recruit/:id" component={RecruitDetail} />
				<Route path="/recruitcreate" component={RecruitCreate} />
				<Route exact path="/profile/:id" component={Profile} />
				<Route path="/profile/:id/edit" component={ProfileEdit} />
				<Route exact path="/project" component={Project} />
				<Route path="/projectcreate" component={ProjectCreate} />
				<Route path="/project/:projectUrl/edit" component={ProjectEdit} />
				<Route path="/joinproject" component={JoinProject} />
				<Route path="/workspace/:projectUrl/chat/:part" component={Chat} />
				<Route path="/workspace/:projectUrl/calendar/:part" component={Calendar} />
				<Route path="/workspace/:projectUrl/kanban/:part" component={Kanban} />
				<Route path="/workspace/:projectUrl/webRTC" component={WebRTC} />
			</Switch>
		</div>
	);
};

export default App;
