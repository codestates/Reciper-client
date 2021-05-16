import axios, { Method } from 'axios';

const localStorage_loginInfo = window.localStorage.getItem('loginInfo') as string;
const { accessToken, loginType } = JSON.parse(localStorage_loginInfo);

const serverURL = process.env.REACT_APP_SERVER_URL;

export const axiosRequest = async <D>(method: Method, endPoint: string, data?: D): Promise<D | void> => {
	try {
		const response = await axios({
			method: method,
			url: `${serverURL}${endPoint}`,
			data,
			headers: {
				authorization: `Bearer ${accessToken}`,
				loginType: loginType,
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

axiosRequest.defaulProps = {
	data: {},
};
