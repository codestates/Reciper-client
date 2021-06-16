import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { loginRequest, loginSelector } from '../reducer/login';

import { loginDataType, loginRequestType } from '../types/types';

import styled, { keyframes } from 'styled-components';
import BigLogoImg from '../images/big_logo.png';

const loadingFill = keyframes`
	100% {
		width: 100%;
	}
`;

const Loading = styled.p`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: column;
	${({ theme }) => theme.align.positionCenter}
`;

const BigLogo = styled.img`
	width: 100px;
`;

const LoadingText = styled.p`
	position: relative;
	margin-top: -20px;
	font-family: 'Pacifico';
	font-size: 90px;
	color: #e6e6e8;

	&::before {
		content: 'Reciper';
		overflow: hidden;
		position: absolute;
		animation: ${loadingFill} 1s ease-in forwards 0.5s;
		top: 0;
		left: 0;
		width: 0%;
		height: 100%;
		color: ${({ theme }) => theme.color.pointColor};
	}
`;

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

			setTimeout(() => {
				if (location) {
					history.push(location as string);
				} else {
					history.push('/');
				}
			}, 1500);
		}
	}, [loginSuccess]);

	return (
		<Loading>
			<BigLogo src={BigLogoImg} />
			<LoadingText className="on">Reciper</LoadingText>
		</Loading>
	);
};

export default LoginLoading;
