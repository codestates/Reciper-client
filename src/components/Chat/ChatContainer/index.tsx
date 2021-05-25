import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import WorkSpaceFrame from '../../Common/WorkSpaceFrame';
import { getProfileInfoSelector } from '../../../reducer/profile';
import ChatZone from '../ChatZone';
import Textarea from '../Textarea';
import useSocket from '../../../hooks/useSocket';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';
import { OnChangeHandlerFunc } from 'react-mentions';

const WorkSpaceChat = (): JSX.Element => {
	const listData = ['공지사항', '자료'];
	const profileInfo = useSelector(getProfileInfoSelector);
	const [chat, setChat] = useState<string>('');
	const { projectUrl, part: room } = useParams<{ projectUrl: string; part: string }>();
	const [socket] = useSocket(projectUrl);
	console.log(room);

	// TODO: 채팅기록을 담아줄 바구니
	const [chatBucket, setChatBucket] = useState<any[]>([]);

	// TODO: 해당하는 채팅 Room과 연결 시도
	useEffect(() => {
		socket?.emit('joinRoom', room);
	}, []);

	// TODO: 이전까지의 전체 채팅 내용을 불러온다.
	useEffect(() => {
		console.log('socket', socket);
		socket?.on('getAllMessages', (chats: any) => {
			const data = chats.map((chat: any) => {
				const { text, writer, room } = chat;
				const { id, name, email, mobile, gitId, career, aboutMe, uploadImage, profileColor, createdAt, updatedAt } =
					writer;

				return {
					text: text,
					room: room,
					writer: {
						id: id,
						name: name,
						email: email,
						mobile: mobile,
						gitId: gitId,
						career: career,
						aboutMe: aboutMe,
						uploadImage: uploadImage,
						profileColor: profileColor,
						createdAt: createdAt,
						updatedAt: updatedAt,
					},
				};
			});
			setChatBucket(data);
		});

		// TODO: room이 바뀌면 room과 다시 연결한다.
		socket?.emit('getAllMessages', room);
		socket?.emit('leaveRoom', room);
		socket?.emit('joinRoom', room);
	}, [room]);

	// TODO: 메세지를 받으면 재렌더링 한다.
	useEffect(() => {
		socket?.on('sendMessage', ({ text, writer, project, room }: any) => {
			// console.log('클라에서 저장한 sendMessage', chatBucket);
			// console.log('서버에서 오는 sendMessage', { text, writer, project, room });
			setChatBucket([...chatBucket, { text, writer, project, room }]);
		});
	}, [chatBucket]);

	const onSubmitForm = useCallback(
		(e: FormEvent<Element>): void => {
			e.preventDefault();
			if (chat?.trim() === '') {
				return;
			}

			const data = {
				room: room,
				name: profileInfo.name,
				message: chat,
			};
			// console.log('채팅치는 순간의 data를 확인', data);
			socket?.emit('sendMessage', data);
			setChat('');
		},
		[chat],
	);

	const onChangeChatValue: OnChangeHandlerFunc = useCallback((e): void => {
		setChat(e.target.value);
	}, []);

	return (
		<WorkSpaceFrame listData={listData}>
			<ChatZone chatBucket={chatBucket} />
			<Textarea onSubmitForm={onSubmitForm} onChangeChat={onChangeChatValue} chat={chat} placeholder={'테스트 중'} />
		</WorkSpaceFrame>
	);
};

export default WorkSpaceChat;
