import React, { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useState } from 'react';
import ChatItem from '../ChatItem';
import { onDragUploadImage } from '../../../utils/imageUpload';
import { getProfileInfoSelector } from '../../../reducer/profile';
import { getChatUploadImageData, newChatData } from '../../../utils/ChatSocketData';
import DragUploadModal from '../DragUploadModal';
import { chatSection } from '../../../utils/chatSection';
import { getChatDataSelector, sendMessages } from '../../../reducer/chat';

import { Socket } from 'socket.io-client';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { ChatList, ChatZoneContainer, ChatDateHeader, DragOverZone } from './styles';

import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { ChatDataType, ChatSectionType, ChatUpdateDataType } from '../../../types/types';

export interface Props {
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
	scrollbarRef: RefObject<Scrollbars>;
	order: number;
	setOrder: Dispatch<SetStateAction<number>>;
	isEnd: boolean;
}

const ChatZone = ({ socket, scrollbarRef, order, setOrder, isEnd }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const chatData = useSelector(getChatDataSelector);

	const dispatch = useDispatch();
	const { part: room } = useParams<{ part: string }>();

	const [dragOver, setDragOver] = useState<boolean>(false);
	const [chatUploadImage, setChatUploadImage] = useState<string>('');

	const chatSections: ChatSectionType = chatSection(chatData ? [...chatData] : []);
	const isEmpty = chatData.length === 0;
	const isReachingEnd = isEmpty || (chatData && chatData.length < 30);

	// TODO: 채팅 인피니티 스크롤
	const onScrollFrame = useCallback(
		values => {
			if (values.scrollTop === 0 && !isEmpty && !isReachingEnd && !isEnd) {
				setOrder(order + 1);
				setTimeout(() => {
					if (scrollbarRef.current) {
						const scrollLocation = scrollbarRef.current.getScrollHeight() - values.scrollHeight;
						scrollbarRef.current.scrollTop(scrollLocation);
					}
				}, 50);
			}
		},
		[scrollbarRef, order, isReachingEnd, isEnd],
	);

	// TODO: 채팅 이미지 업로드
	useEffect(() => {
		if (chatUploadImage) {
			const newChat: ChatDataType = newChatData(-1, '', chatUploadImage, room, profileInfo);
			const getImageData: ChatUpdateDataType = getChatUploadImageData(room, profileInfo, chatUploadImage);

			dispatch(sendMessages([newChat]));
			socket?.emit('sendImage', getImageData);
		}
	}, [chatUploadImage]);

	// TODO: 채팅 이미지 drag & drop
	const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		e.stopPropagation();

		onDragUploadImage(e, setDragOver, setChatUploadImage);
		setDragOver(false);
	}, []);

	const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		setDragOver(true);
	}, []);

	const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		if (e.clientX === 0 && e.clientY === 0) {
			setDragOver(false);
		}
	}, []);

	return (
		<ChatZoneContainer onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}>
			<Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScrollFrame}>
				{Object.entries(chatSections).map(([date, chatData]) => {
					return (
						<ChatList key={date}>
							<ChatDateHeader>
								<button>{date}</button>
							</ChatDateHeader>
							{chatData.length > 0 &&
								chatData.map((chat: ChatDataType, index: number) => {
									let isSameSender = false;
									if (index > 0) {
										isSameSender = chat.writer.email === chatData[index - 1].writer.email;
									}
									return <ChatItem socket={socket} key={index} data={chat} index={index} isSameSender={isSameSender} />;
								})}
						</ChatList>
					);
				})}
			</Scrollbars>
			{dragOver && (
				<DragOverZone>
					<DragUploadModal room={room} />
				</DragOverZone>
			)}
		</ChatZoneContainer>
	);
};

export default ChatZone;
