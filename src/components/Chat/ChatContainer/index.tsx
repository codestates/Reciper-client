import React, { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { getProfileInfoSelector } from '../../../reducer/profile';
import ChatZone from '../ChatZone';
import Textarea from '../Textarea';
import useSocket from '../../../hooks/useSocket';
import { getChatData, newChatData } from '../../../utils/ChatSocketData';
import {
	changeRoom,
	deleteMessage,
	editMessage,
	getAllMessages,
	getChatDataSelector,
	sendMessage,
} from '../../../reducer/chat';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';

import { AllMessagesDataType, ChatDataType, ChatUpdateDataType } from '../../../types/types';

const WorkSpaceChat = (): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const chatData = useSelector(getChatDataSelector);

	const { projectUrl, part: room } = useParams<{ projectUrl: string; part: string }>();
	const history = useHistory();
	const dispatch = useDispatch();
	const currentAddress = history.location.pathname.split('/')[3];
	const [socket, connectionSocket, disconnectSocket] = useSocket(projectUrl, currentAddress);
	const scrollbarRef = useRef<Scrollbars>(null);

	const [order, setOrder] = useState<number>(0);
	const [isEnd, setIsEnd] = useState<boolean>(false);
	const [chat, setChat] = useState<string>('');

	// TODO: 해당하는 채팅 Room과 연결 시도
	connectionSocket();

	useEffect(() => {
		socket?.emit('joinRoom', room);

		return () => {
			disconnectSocket();
		};
	}, []);

	useEffect(() => {
		// TODO: 전체 채팅 내용에서 30개씩 불러온다.
		socket?.on('getAllMessages', ({ chats, isEnd }: AllMessagesDataType) => {
			if (scrollbarRef.current) {
				scrollbarRef.current.scrollToBottom();
			}

			setIsEnd(isEnd);
			dispatch(getAllMessages(chats));
		});
	}, []);

	useEffect(() => {
		// TODO: room이 바뀌면 room과 다시 연결한다.
		socket?.emit('getAllMessages', { room, order });
		socket?.emit('leaveRoom', room);
		socket?.emit('joinRoom', room);
	}, [room, order]);

	useEffect(() => {
		// TODO: room이 바뀌면 인피니티 스크롤을 위한 order 초기화
		setOrder(0);
		dispatch(changeRoom());
	}, [room]);

	useEffect(() => {
		// TODO: 메세지를 받으면 재렌더링 한다.
		socket?.on('sendMessage', (chat: ChatDataType) => {
			if (chat) {
				dispatch(sendMessage([chat]));
			}
		});

		// TODO: 채팅 수정
		socket?.on('editMessage', ({ chat, index }: ChatDataType) => {
			if (chat) {
				dispatch(editMessage({ chat, index }));
			}
		});

		// TODO: 채팅 삭제
		socket?.on('deleteMessage', ({ index }) => {
			dispatch(deleteMessage(index));
		});

		// TODO: 채팅 이미지 업로드
		socket?.on('sendImage', ({ chat }: ChatDataType) => {
			if (chat?.uploadImage) {
				dispatch(sendMessage([chat]));
			}
		});
	}, [chatData]);

	// TODO: 스크롤바는 항상 맨 밑에 위치한다.
	useEffect(() => {
		if (chatData && order === 0) {
			scrollbarRef.current?.scrollToBottom();
		}
	}, [chatData]);

	// TODO: 채팅 입력
	const onSubmitForm = useCallback(
		(e: FormEvent<Element>): void => {
			e.preventDefault();
			if (chat?.trim() === '') {
				return;
			}

			const data: ChatUpdateDataType = getChatData(room, profileInfo, chat, chatData.length);
			const newChat: ChatDataType = newChatData(-1, chat, '', room, profileInfo);

			socket?.emit('sendMessage', data);

			if (chat) {
				dispatch(sendMessage([newChat]));
				setChat('');
			}

			if (scrollbarRef.current) {
				scrollbarRef.current.scrollToBottom();
			}
		},
		[chat, chatData],
	);

	const onChangeChatValue: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback((e): void => {
		setChat(e.target.value);
	}, []);

	return (
		<>
			<ChatZone socket={socket} scrollbarRef={scrollbarRef} order={order} setOrder={setOrder} isEnd={isEnd} />
			<Textarea socket={socket} onSubmitForm={onSubmitForm} onChangeChat={onChangeChatValue} chat={chat} />
		</>
	);
};

export default WorkSpaceChat;
