import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import useSocket from '../hooks/useSocket';
import Peer from 'peerjs';
import { projectInfoDataType } from '../types/types';
import { projectInfoSelector } from '../reducer/projectInfo';

const WRTC = (): JSX.Element => {
	const dispatch = useDispatch();
	const history = useHistory();
	const currentAddress = history.location.pathname.split('/')[3];
	const { projectUrl, part } = useParams<{ projectUrl: string; part: string }>();
	const [socket, connectSocket, disconnectSocket] = useSocket(projectUrl, currentAddress);
	const { members }: projectInfoDataType = useSelector(projectInfoSelector);
	const [element, setElement] = useState([React.createElement('video', { muted: true, autoPlay: true, ref: addRef })]);
	const revealRefs = useRef<any>([]);
	const reff = useRef<HTMLDivElement>(null);
	revealRefs.current = [];
	const myPeer = new Peer(undefined);
	const aa: any[] = [1, 2, 3, 4];
	function addVideoStream(video: any, stream: MediaStream) {
		video.srcObject = stream;
		video.addEventListener('loadedmetadata', () => {
			video.play();
		});
	}
	function connectToNewUser(userId: string, stream: MediaStream) {
		const call = myPeer.call(userId, stream);
		call.on('stream', userVideoStream => {
			const video = revealRefs.current[1];
			addVideoStream(video, userVideoStream);
		});
	}

	connectSocket();
	useEffect(() => {
		socket?.on('connection', () => {
			myPeer.on('open', id => {
				socket.emit('joinPeer', 'General', id);
			});
			navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
				if (revealRefs.current) {
					// revealRefs.current[0].srcObject = stream;
					addVideoStream(revealRefs.current[0], stream);
					// console.log(members);
				}
				myPeer.on('call', call => {
					call.answer(stream);
					const video = revealRefs.current[1];
					call.on('stream', (userVideoStream: MediaStream) => {
						addVideoStream(video, userVideoStream);
					});
				});
				socket.on('user-connected', userId => {
					connectToNewUser(userId, stream);
				});
			});
		});
		console.log('asdasd', reff.current);
		return () => {
			disconnectSocket();
		};
	}, []);

	function addRef(e: any) {
		if (e) {
			revealRefs.current.push(e);
		}
		console.log(revealRefs);
	}
	useEffect(() => {
		console.log(members);
	}, [members]);
	return (
		<div>
			{members.map(el => {
				return React.createElement('video', { muted: true, autoPlay: true, ref: addRef });
			})}
		</div>
	);
};

export default WRTC;
