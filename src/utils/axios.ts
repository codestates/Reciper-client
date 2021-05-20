import axios, { Method } from 'axios';
import getLoginInfo from './getLoginInfo';

const serverURL = process.env.REACT_APP_SERVER_URL;

export const axiosRequest = async <D>(method: Method, endPoint: string, data?: D): Promise<D | void> => {
	const { accessToken, loginType } = getLoginInfo();

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
