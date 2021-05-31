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

import { AllMessagesDataType, ChatDataType, ChatUpdateDataType } from '../../../types/types';

const WorkSpaceChat = (): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const { projectUrl, part: room } = useParams<{ projectUrl: string; part: string }>();
	const history = useHistory();
	const currentAddress = history.location.pathname.split('/')[3];
	const [socket, connectionSocket, disconnectSocket] = useSocket(projectUrl, currentAddress);
	const scrollbarRef = useRef<Scrollbars>(null);

	const [order, setOrder] = useState<number>(0);
	const [isEnd, setIsEnd] = useState<boolean>(false);
	const [chat, setChat] = useState<string>('');

	// TODO: 채팅기록을 담아줄 바구니
	const [chatBucket, setChatBucket] = useState<ChatDataType[]>([]);

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
		// console.log(chatBucket);
		socket?.on('getAllMessages', ({ chats, isEnd }: AllMessagesDataType) => {
			setIsEnd(isEnd);
			setChatBucket([...chats, ...chatBucket]);
		});
	}, [chatBucket]);

	useEffect(() => {
		// TODO: room이 바뀌면 room과 다시 연결한다.
		socket?.emit('getAllMessages', { room, order });
		socket?.emit('leaveRoom', room);
		socket?.emit('joinRoom', room);
	}, [room, order]);

	useEffect(() => {
		// TODO: room이 바뀌면 인피니티 스크롤을 위한 order 초기화
		setOrder(0);
	}, [room]);

	useEffect(() => {
		// TODO: 메세지를 받으면 재렌더링 한다.
		socket?.on('sendMessage', ({ chat }: ChatDataType) => {
			if (chat) {
				setChatBucket([...chatBucket, chat]);
			}
		});

		// TODO: 채팅 수정
		socket?.on('editMessage', ({ foundChat, index }: ChatDataType) => {
			const copyChatBucket = [...chatBucket];
			if (foundChat && index) {
				copyChatBucket.splice(index, 1);
				setChatBucket([...copyChatBucket, foundChat]);
			}
		});

		// TODO: 채팅 삭제
		socket?.on('deleteMessage', ({ index }) => {
			const copyChatBucket = [...chatBucket];
			copyChatBucket.splice(index, 1);
			setChatBucket([...copyChatBucket]);
		});

		// TODO: 채팅 이미지 업로드
		socket?.on('sendImage', ({ chat }: ChatDataType) => {
			if (chat?.uploadImage) {
				setChatBucket([...chatBucket, chat]);
			}
		});
	}, [chatBucket]);

	// TODO: 스크롤바는 항상 맨 밑에 위치한다.
	useEffect(() => {
		if (chatBucket && order === 0) {
			scrollbarRef.current?.scrollToBottom();
		}
	}, [chatBucket]);

	// TODO: 채팅 입력
	const onSubmitForm = useCallback(
		(e: FormEvent<Element>): void => {
			e.preventDefault();
			if (chat?.trim() === '') {
				return;
			}

			const data: ChatUpdateDataType = getChatData(room, profileInfo, chat);
			const newChat: ChatDataType = newChatData(chat, '', room, profileInfo);

			socket?.emit('sendMessage', data);
			if (chat) {
				setChatBucket([...chatBucket, newChat]);
				setChat('');
			}

			if (scrollbarRef.current) {
				scrollbarRef.current.scrollToBottom();
			}
		},
		[chat, chatBucket],
	);

	const onChangeChatValue: OnChangeHandlerFunc = useCallback((e): void => {
		setChat(e.target.value);
	}, []);

	const chatSections = chatSection(chatBucket ? [...chatBucket] : []);
	const isEmpty = chatBucket.length === 0;
	const isReachingEnd = isEmpty || (chatBucket && chatBucket.length < 30);

	return (
		<WorkSpaceFrame>
			<ChatZone
				socket={socket}
				scrollbarRef={scrollbarRef}
				chatSections={chatSections}
				chatBucket={chatBucket}
				setChatBucket={setChatBucket}
				order={order}
				setOrder={setOrder}
				isEnd={isEnd}
				isEmpty={isEmpty}
				isReachingEnd={isReachingEnd}
			/>
			<Textarea
				socket={socket}
				onSubmitForm={onSubmitForm}
				onChangeChat={onChangeChatValue}
				chat={chat}
				setChat={setChat}
				chatBucket={chatBucket}
				setChatBucket={setChatBucket}
				placeholder={`${room}에게 메세지 보내기`}
			/>
		</WorkSpaceFrame>
	);
};

export default WorkSpaceChat;
