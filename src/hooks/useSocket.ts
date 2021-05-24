import { useCallback } from 'react';
import io from 'socket.io-client';

const sockets: { [key: string]: any } = {};

const useSocket = (projectUrl?: string): [any | undefined, () => void] => {
	const loginInfo = window.localStorage.getItem('loginInfo');

	const disconnect = useCallback(() => {
		if (projectUrl && sockets[projectUrl]) {
			sockets[projectUrl].disconnect();
			delete sockets[projectUrl];
		}
	}, [projectUrl]);

	if (!projectUrl) {
		return [undefined, disconnect];
	}

	// TODO: 연결이 안되어 있다면 요청하고, 되어있으면 한번만 연결할 수 있도록 해준다.
	if (!sockets[projectUrl] && loginInfo) {
		const { accessToken, loginType } = JSON.parse(loginInfo);

		sockets[projectUrl] = io(`${process.env.REACT_APP_SERVER_URL}/chat`, {
			transports: ['websocket'],
			auth: {
				token: accessToken,
				logintype: loginType,
			},
			query: {
				projectURL: projectUrl,
			},
		});
	}

	// sockets[projectUrl].emit('totalMessageGet', (data: any) => {
	// 	console.log('message', data);
	// });

	// sockets[projectUrl].emit('message', (data: any) => {
	// 	console.log('message', data);
	// });

	// sockets[projectUrl].on('totalMessageGet', (data: any) => {
	// 	console.log('totalMessageGet', data);
	// });

	// sockets[projectUrl].on('message', (data: any) => {
	// 	console.log(data);
	// });

	return [sockets[projectUrl], disconnect];
};

export default useSocket;
