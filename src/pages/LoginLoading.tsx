import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { loginRequest, loginSelector } from '../reducer/login';

import { loginDataType, loginRequestType } from '../types/types';

const LoginLoading = (): JSX.Element => {
	const dispatch = useDispatch();
	const history = useHistory();
	const loginSuccess: loginDataType = useSelector(loginSelector);

	const url = new URL(window.location.href);
	const authorizationCode = url.searchParams.get('code');
	const email = url.searchParams.get('email');
	const isGoogle = url.searchParams.get('scope');

	const location = window.localStorage.getItem('location');

	useEffect(() => {
		if (authorizationCode) {
			const data: loginRequestType = {
				authorizationCode: authorizationCode,
				email: email,
			};

			if (email) {
				dispatch(loginRequest({ data, endpoint: 'loginEmail' }));
			} else if (isGoogle) {
				dispatch(loginRequest({ data, endpoint: 'loginGoogle' }));
			} else {
				dispatch(loginRequest({ data, endpoint: 'loginGithub' }));
			}
		}
	}, []);

	useEffect(() => {
		if (loginSuccess.success) {
			window.localStorage.setItem('loginSuccess', 'success');
			window.localStorage.setItem('loginInfo', JSON.stringify(loginSuccess.data));

			if (location) {
				history.push(location as string);
			} else {
				history.push('/');
			}
		}
	}, [loginSuccess]);

	return <div>로딩 중!</div>;
};

export default LoginLoading;
