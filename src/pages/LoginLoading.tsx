import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { loginRequestType, loginResponseDataType } from '../types/types';

const LoginLoading = (): JSX.Element => {
	const history = useHistory();
	const url = new URL(window.location.href);
	const authorizationCode = url.searchParams.get('code');
	const email = url.searchParams.get('email');
	const isGoogle = url.searchParams.get('scope');
	const location = window.localStorage.getItem('location');

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

	return <div>로딩 중!</div>;
};

export default LoginLoading;
