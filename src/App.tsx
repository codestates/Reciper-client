import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Landing from './pages/Landing';
import LoginLoading from './pages/LoginLoading';
import JoinProject from './pages/JoinProject';
const RecruitRoute = lazy(() => import(`./route/Recruit`));
const ProjectRoute = lazy(() => import(`./route/Project`));
const ProfileRoute = lazy(() => import(`./route/Profile`));
const WorkSpaceRoute = lazy(() => import(`./route/WorkSpace`));

import { getProfileInfo } from './reducer/profile';
import { loginSelector } from './reducer/login';

import getLoginInfo from './utils/getLoginInfo';

import { loginDataType } from './types/types';
import Auth from './hoc/Auth';
import Header from './components/Common/Header';
import WorkSpaceFrame from './components/Common/WorkSpaceFrame';

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
			<Switch>
				<Redirect exact path="/" to="landing" />
				<Route path="/landing" component={Landing} />
				<Route path="/loginloading" component={LoginLoading} />
				<Route path="/joinproject" component={JoinProject} />

				<Suspense fallback={<Header />}>
					<Route path="/recruit" component={RecruitRoute} />
					<Route path="/project" component={Auth(ProjectRoute)} />
					<Route path="/profile" component={Auth(ProfileRoute)} />

					<Suspense fallback={<WorkSpaceFrame> </WorkSpaceFrame>}>
						<Route path="/workspace" component={Auth(WorkSpaceRoute)} />
					</Suspense>
				</Suspense>
			</Switch>
		</div>
	);
};

export default App;
