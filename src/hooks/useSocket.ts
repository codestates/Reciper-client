import { useCallback } from 'react';
import io, { Socket } from 'socket.io-client';

const sockets: { [key: string]: Socket } = {};

const useSocket = (projectUrl: string, address: string): [Socket | undefined, () => void] => {
	const loginInfo = window.localStorage.getItem('loginInfo');

	// TODO: 프로젝트가 바뀌면 연결을 끊고 다시 연결할 수 있는 기능이다.
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

		sockets[projectUrl] = io(`${process.env.REACT_APP_SERVER_URL}/${address}/${projectUrl}`, {
			transports: ['websocket'],
			auth: {
				token: accessToken,
				loginType: loginType,
			},
			query: {
				projectURL: projectUrl,
			},
		});
	}

	return [sockets[projectUrl], disconnect];
};

export default useSocket;
