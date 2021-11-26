import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const LoginLoading = lazy(() => import(`./pages/LoginLoading`));
const Landing = lazy(() => import(`./pages/Landing`));
const Profile = lazy(() => import(`./pages/Profile`));
const ProfileEdit = lazy(() => import(`./pages/ProfileEdit`));
const Project = lazy(() => import(`./pages/Project`));
const ProjectCreate = lazy(() => import(`./pages/ProjectCreate`));
const ProjectEdit = lazy(() => import(`./pages/ProjectEdit`));
const Recruit = lazy(() => import(`./pages/Recruit`));
const RecruitCreate = lazy(() => import(`./pages/RecruitCreate`));
const RecruitDetail = lazy(() => import(`./pages/RecruitDetail`));
const JoinProject = lazy(() => import(`./pages/JoinProject`));
const Chat = lazy(() => import(`./pages/Chat`));
const Kanban = lazy(() => import(`./pages/Kanban`));
const Calendar = lazy(() => import(`./pages/Calendar`));

import { getProfileInfo } from './reducer/profile';
import { loginSelector } from './reducer/login';

import getLoginInfo from './utils/getLoginInfo';

import { loginDataType } from './types/types';
import Auth from './hoc/Auth';
import WebRTC from './pages/WebRTC';

const App = (): JSX.Element => {
	const dispatch = useDispatch();
	const loginSuccess: loginDataType = useSelector(loginSelector);
	const [success, setSuccess] = useState<boolean>(false);

	axios.defaults.withCredentials = true;

	const refreshRequest = useCallback(async () => {
		const { accessToken, loginType } = getLoginInfo();
		const response = await axios.get(`http://localhost:4000/newAccessToken`, {
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
		const successState = window.localStorage.getItem('loginSuccess');

		if (successState) {
			dispatch(getProfileInfo());
		}

		setInterval(() => {
			refreshRequest();
		}, 1500000);
	}, [success]);

	return (
		<div>
			<Suspense fallback={<div></div>}>
				<Switch>
					<Redirect exact path="/" to="landing" />
					<Route path="/loginloading" component={LoginLoading} />
					<Route path="/landing" component={Landing} />
					<Route exact path="/recruit" component={Recruit} />
					<Route path="/recruit/:id" component={RecruitDetail} />
					<Route path="/recruitcreate" component={Auth(RecruitCreate)} />
					<Route exact path="/profile/:id" component={Auth(Profile)} />
					<Route path="/profile/:id/edit" component={Auth(ProfileEdit)} />
					<Route exact path="/project" component={Auth(Project)} />
					<Route path="/projectcreate" component={Auth(ProjectCreate)} />
					<Route path="/project/:projectUrl/edit" component={Auth(ProjectEdit)} />
					<Route path="/joinproject" component={JoinProject} />
					<Route path="/workspace/:projectUrl/chat/:part" component={Auth(Chat)} />
					<Route path="/workspace/:projectUrl/calendar/:part" component={Auth(Calendar)} />
					<Route path="/workspace/:projectUrl/kanban/:part" component={Auth(Kanban)} />
					<Route path="/workspace/:projectUrl/webRTC" component={WebRTC} />
				</Switch>
			</Suspense>
		</div>
	);
};

export default App;
