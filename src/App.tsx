import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';

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
import axios from 'axios';
import getLoginInfo from './utils/getLoginInfo';

const App = (): JSX.Element => {
	const dispatch = useDispatch();
	const [success, setSuccess] = useState<string | null>();
	axios.defaults.withCredentials = true;

	const refreshRequest = async () => {
		const { accessToken, loginType } = getLoginInfo();
		const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/newAccessToken`, {
			headers: {
				authorization: `Bearer ${accessToken}`,
				loginType,
			},
		});
		window.localStorage.setItem('loginInfo', JSON.stringify(response.data));
	};

	useEffect(() => {
		setInterval(() => {
			//수정요망
			setSuccess(window.localStorage.getItem('loginInfo'));
		}, 0);
	}, []);

	useEffect(() => {
		if (success) {
			dispatch(getProfileInfo());

			refreshRequest();

			setInterval(() => {
				refreshRequest();
			}, 10000);
		}
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
			</Switch>
		</div>
	);
};

export default App;
