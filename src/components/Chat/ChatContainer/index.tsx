import React, { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import WorkSpaceFrame from '../../Common/WorkSpaceFrame';
import { getProfileInfoSelector } from '../../../reducer/profile';
import ChatZone from '../ChatZone';
import Textarea from '../Textarea';
import useSocket from '../../../hooks/useSocket';
import { chatSection } from '../../../utils/chatSection';
import { getChatData, newChatData } from '../../../utils/ChatSocketData';

import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';
import { OnChangeHandlerFunc } from 'react-mentions';

import { ChatDataType, ChatUpdateDataType } from '../../../types/types';

const WorkSpaceChat = (): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const { projectUrl, part: room } = useParams<{ projectUrl: string; part: string }>();
	const history = useHistory();
	const currentAddress = history.location.pathname.split('/')[3];
	const [socket] = useSocket(projectUrl, currentAddress);
	const scrollbarRef = useRef<Scrollbars>(null);
	const [chat, setChat] = useState<string>('');

	// TODO: 채팅기록을 담아줄 바구니
	const [chatBucket, setChatBucket] = useState<ChatDataType[]>([]);

	// TODO: 해당하는 채팅 Room과 연결 시도
	useEffect(() => {
		socket?.emit('joinRoom', room);
	}, []);

	// TODO: 이전까지의 전체 채팅 내용을 불러온다.
	useEffect(() => {
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
		socket?.on('sendMessage', ({ id, text, writer, room, project, createdAt }: ChatDataType) => {
			setChatBucket([...chatBucket, { id, text, writer, room, project, createdAt }]);
		});

		// TODO: 채팅 수정
		socket?.on('editMessage', ({ foundChat, index }: ChatDataType) => {
			const copyChatBucket = [...chatBucket];
			if (foundChat && index) {
				copyChatBucket.splice(index + 1, 1);
				setChatBucket([...copyChatBucket, foundChat]);
			}
		});

		// TODO: 채팅 삭제
		socket?.on('deleteMessage', ({ index }) => {
			const copyChatBucket = [...chatBucket];
			copyChatBucket.splice(index + 1, 1);
			setChatBucket([...copyChatBucket]);
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

			const data: ChatUpdateDataType = getChatData(room, profileInfo, chat);
			const newChat: ChatDataType = newChatData(chat, room, profileInfo);

			socket?.emit('sendMessage', data);
			setChatBucket([...chatBucket, newChat]);
			setChat('');

			if (scrollbarRef.current) {
				scrollbarRef.current.scrollToBottom();
			}
		},
		[chat],
	);

	const onChangeChatValue: OnChangeHandlerFunc = useCallback((e): void => {
		setChat(e.target.value);
	}, []);

	const chatSections = chatSection(chatBucket ? [...chatBucket] : []);

	return (
		<WorkSpaceFrame>
			<ChatZone
				scrollbarRef={scrollbarRef}
				chatSections={chatSections}
				chatBucket={chatBucket}
				setChatBucket={setChatBucket}
			/>
			<Textarea
				onSubmitForm={onSubmitForm}
				onChangeChat={onChangeChatValue}
				chat={chat}
				chatBucket={chatBucket}
				placeholder={`${room}에게 메세지 보내기`}
			/>
		</WorkSpaceFrame>
	);
};

export default WorkSpaceChat;
