import { loginResponseDataType } from '../types/types';

const getLoginInfo = (): loginResponseDataType => {
	const loginInfo = window.localStorage.getItem('loginInfo') as string;
	console.log('!!!', loginInfo);
	if (loginInfo) {
		console.log('???');
		return JSON.parse(loginInfo);
	}

	return {
		accessToken: '',
		email: '',
		loginType: '',
	};
};

export default getLoginInfo;
