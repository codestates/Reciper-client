import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import WorkSpaceFrame from '../../Common/WorkSpaceFrame';
import { getProfileInfoSelector } from '../../../reducer/profile';
import ChatZone from '../ChatZone';
import Textarea from '../Textarea';
import useSocket from '../../../hooks/useSocket';
import { Scrollbars } from 'react-custom-scrollbars';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { ChatDataType } from '../../../types/types';
import { OnChangeHandlerFunc } from 'react-mentions';

const WorkSpaceChat = (): JSX.Element => {
	const listData = ['공지사항'];
	const profileInfo = useSelector(getProfileInfoSelector);
	const [chat, setChat] = useState<string>('');
	const { projectUrl } = useParams<{ projectUrl: string }>();
	const [socket] = useSocket(projectUrl);

	// TODO: 채팅기록을 담아줄 바구니
	const [chatBucket, setChatBucket] = useState<ChatDataType[]>([]);

	// TODO: 이전까지의 전체 채팅 내용을 불러온다.
	useEffect(() => {
		console.log('socket', socket);
		socket.on('totalMessageGet', (chats: ChatDataType[]) => {
			const data = chats.map((chat: ChatDataType) => {
				const { id, writer, text, createdAt, updatedAt } = chat;
				const { name, email, mobile, gitId, aboutMe, profileColor, uploadImage } = writer;

				return {
					id: id,
					text: text,
					createdAt: createdAt,
					updatedAt: updatedAt,
					writer: {
						id: writer.id,
						name: name,
						email: email,
						mobile: mobile,
						gitId: gitId,
						aboutMe: aboutMe,
						uploadImage: uploadImage,
						profileColor: profileColor,
						createdAt: writer.createdAt,
					},
				};
			});
			// console.log('서버로 보내는 data', data);
			setChatBucket(data);
		});
		socket.emit('totalMessageGet');
	}, []);

	// TODO: 메세지를 받으면 재렌더링 한다.
	useEffect(() => {
		socket.on('message', ({ id, text, createdAt, updatedAt, writer }: ChatDataType) => {
			console.log('message1', chatBucket);
			console.log('message222', { id, text, createdAt, updatedAt, writer });
			setChatBucket([...chatBucket, { id, text, createdAt, updatedAt, writer }]);
		});
	}, [chatBucket]);

	// useEffect(() => {

	// }, [])

	const onSubmitForm = useCallback(
		(e: FormEvent<Element>): void => {
			e.preventDefault();
			if (chat?.trim() === '') {
				return;
			}
			// TODO: 채팅치는 순간 유저 정보를 어떻게 알고 보내지?
			const data = {
				id: 14,
				name: profileInfo.name,
				message: chat,
			};
			socket.emit('message', data);
			setChat('');
		},
		[chat],
	);

	const onChangeChatValue: OnChangeHandlerFunc = useCallback((e): void => {
		setChat(e.target.value);
	}, []);

	console.log('여긴 Container, checkBucket', chatBucket);

	return (
		<WorkSpaceFrame listData={listData}>
			<ChatZone chatBucket={chatBucket} />
			<Textarea onSubmitForm={onSubmitForm} onChangeChat={onChangeChatValue} chat={chat} placeholder={'테스트 중'} />
		</WorkSpaceFrame>
	);
};

export default WorkSpaceChat;
