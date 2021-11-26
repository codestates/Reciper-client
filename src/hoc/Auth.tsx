import React from 'react';
import { useHistory } from 'react-router';

export default (Component: React.LazyExoticComponent<() => JSX.Element>): (() => JSX.Element) => {
	const AuthChecker = (): JSX.Element => {
		const history = useHistory();
		const loginSuccess = localStorage.getItem('loginSuccess');

		if (!loginSuccess) {
			history.push({ pathname: '/recruit', state: { isLogged: true } });
		}

		return <Component />;
	};

	return AuthChecker;
};
