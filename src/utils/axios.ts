import axios, { AxiosResponse, Method } from 'axios';

const localStorage_loginInfo = window.localStorage.getItem('loginInfo') as string;
const loginInfo = JSON.parse(localStorage_loginInfo);
const userAccessToken = loginInfo.accessToken;
const userLoginType = loginInfo.loginType;

const serverURL = process.env.REACT_APP_SERVER_URL;

export const axiosRequest = async <B>(method: Method, endPoint: string, body: B): Promise<B | void> => {
	console.log('');
};
