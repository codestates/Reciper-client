import React, { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import WorkSpaceFrame from '../../Common/WorkSpaceFrame';
import { getProfileInfoSelector } from '../../../reducer/profile';
import ChatZone from '../ChatZone';
import Textarea from '../Textarea';
import useSocket from '../../../hooks/useSocket';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';
import { OnChangeHandlerFunc } from 'react-mentions';

import { ChatDataType } from '../../../types/types';

const WorkSpaceChat = (): JSX.Element => {
	const listData = ['공지사항', '자료'];
	const profileInfo = useSelector(getProfileInfoSelector);
	const scrollbarRef = useRef<Scrollbars>(null);
	const [chat, setChat] = useState<string>('');
	const { projectUrl, part: room } = useParams<{ projectUrl: string; part: string }>();
	const [socket] = useSocket(projectUrl);

	// TODO: 채팅기록을 담아줄 바구니
	const [chatBucket, setChatBucket] = useState<ChatDataType[]>([]);

	// TODO: 해당하는 채팅 Room과 연결 시도
	useEffect(() => {
		socket?.emit('joinRoom', room);
	}, []);

	// TODO: 이전까지의 전체 채팅 내용을 불러온다.
	useEffect(() => {
		// console.log('socket', socket);
		socket?.on('getAllMessages', (chats: ChatDataType[]) => {
			const data = chats.map((chat: ChatDataType) => {
				return { ...chat };
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
		socket?.on('sendMessage', ({ text, writer, room, project }: ChatDataType) => {
			setChatBucket([...chatBucket, { text, writer, room, project }]);
		});
	}, [chatBucket]);

	// TODO: 스크롤바는 항상 맨 밑에 위치한다.
	useEffect(() => {
		if (chatBucket) {
			scrollbarRef.current?.scrollToBottom();
		}
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

			socket?.emit('sendMessage', data);
			setChat('');

			if (scrollbarRef.current) {
				// console.log('scrollToBottom은 어떤 값일까?', scrollbarRef.current?.getValues()); scrollToBottom()
				scrollbarRef.current.scrollToBottom();
			}
		},
		[chat],
	);

	const onChangeChatValue: OnChangeHandlerFunc = useCallback((e): void => {
		setChat(e.target.value);
	}, []);

	return (
		<WorkSpaceFrame listData={listData}>
			<ChatZone scrollbarRef={scrollbarRef} chatBucket={chatBucket} />
			<Textarea
				onSubmitForm={onSubmitForm}
				onChangeChat={onChangeChatValue}
				chat={chat}
				chatBucket={chatBucket}
				placeholder={`#${room}에게 메세지 보내기`}
			/>
		</WorkSpaceFrame>
	);
};

export default WorkSpaceChat;
