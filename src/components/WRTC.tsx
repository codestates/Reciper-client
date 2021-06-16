export {};
// import React, { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components';
// import Peer from 'simple-peer';
// import useSocket from '../hooks/useSocket';
// import { useHistory, useParams } from 'react-router';
// import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
// declare global {
// 	interface MediaDevices {
// 		getDisplayMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
// 	}

// 	// if constraints config still lose some prop, you can define it by yourself also
// 	interface MediaTrackConstraintSet {
// 		displaySurface?: ConstrainDOMString;
// 		logicalSurface?: ConstrainBoolean;
// 		// more....
// 	}
// }
// const StyledVideo = styled.video`
// 	height: 40%;
// 	width: 50%;
// `;
// const Video = ({ peer }: { peer: Peer.Instance }): JSX.Element => {
// 	const ref = useRef<HTMLVideoElement>(null);

// 	useEffect(() => {
// 		peer.on('stream', stream => {
// 			if (ref.current) {
// 				ref.current.srcObject = stream;
// 			}
// 		});
// 	}, []);

// 	return <StyledVideo autoPlay playsInline ref={ref} />;
// };
// const videoConstraints = {
// 	height: window.innerHeight / 2,
// 	width: window.innerWidth / 2,
// };

// const WRTC = (): JSX.Element => {
// 	const [peers, setPeers] = useState<Peer.Instance[]>([]);
// 	const history = useHistory();
// 	const currentAddress = history.location.pathname.split('/')[3];
// 	const { projectUrl, part } = useParams<{ projectUrl: string; part: string }>();
// 	const [socket, connectSocket, disconnectSocket] = useSocket(projectUrl, currentAddress);
// 	const userVideo = useRef<any>(null);
// 	const peersRef = useRef<any>([]);
// 	const roomID = 'General';

// 	connectSocket();
// 	useEffect(() => {
// 		const MD = navigator.mediaDevices as any;
// 		MD.getUserMedia({ video: videoConstraints, audio: true }).then((stream: any) => {
// 			userVideo.current.srcObject = stream;

// 			socket?.emit('join room', roomID);
// 			socket?.on('all users', (users: any[]) => {
// 				console.log('유저목록:', users);
// 				const peers: ((prevState: never[]) => never[]) | Peer.Instance[] = [];
// 				users.forEach(userID => {
// 					const peer = createPeer(userID, socket?.id, stream);
// 					peersRef.current.push({
// 						peerID: userID,
// 						peer,
// 					});
// 					peers.push(peer);
// 				});
// 				setPeers(peers);
// 				console.log(peers);
// 			});

// 			socket?.on('user joined', (payload: { signal: any; callerID: any }) => {
// 				const peer = addPeer(payload.signal, payload.callerID, stream);
// 				peersRef.current.push({
// 					peerID: payload.callerID,
// 					peer,
// 				});

// 				setPeers(users => [...users, peer]);
// 			});

// 			socket?.on('receiving returned signal', (payload: { id: any; signal: any }) => {
// 				const item = peersRef.current.find((p: { peerID: any }) => p.peerID === payload.id);
// 				console.log('receiving :', payload, item);
// 				item.peer.signal(payload.signal);
// 			});
// 		});
// 	}, []);

// 	useEffect(() => {
// 		return () => {
// 			socket?.emit('leave room', 'General');
// 			disconnectSocket();
// 		};
// 	}, []);

// 	function createPeer(userToSignal: any, callerID: any, stream: MediaStream) {
// 		const peer = new Peer({
// 			initiator: true,
// 			trickle: false,
// 			stream,
// 		});

// 		peer.on('signal', signal => {
// 			console.log('create : peer on signal :', signal);
// 			socket?.emit('sending signal', { userToSignal, callerID, signal });
// 		});

// 		return peer;
// 	}

// 	function addPeer(incomingSignal: string | Peer.SignalData, callerID: any, stream: MediaStream) {
// 		const peer = new Peer({
// 			initiator: false,
// 			trickle: false,
// 			stream,
// 		});

// 		peer.on('signal', signal => {
// 			console.log('add : peer on signal :', signal);
// 			socket?.emit('returning signal', { signal, callerID });
// 		});

// 		peer.signal(incomingSignal);

// 		return peer;
// 	}

// 	return (
// 		<div>
// 			<StyledVideo muted ref={userVideo} autoPlay playsInline />
// 			{peers.map((peer, index) => {
// 				return <Video key={index} peer={peer} />;
// 			})}
// 		</div>
// 	);
// };

// export default WRTC;
