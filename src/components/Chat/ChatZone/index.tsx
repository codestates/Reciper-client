import React, { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useState } from 'react';
import ChatItem from '../ChatItem';
import { onDragUploadImage } from '../../../utils/imageUpload';
import { getProfileInfoSelector } from '../../../reducer/profile';
import { getChatUploadImageData, newChatData } from '../../../utils/ChatSocketData';
import DragUploadModal from '../DragUploadModal';

import { Socket } from 'socket.io-client';
import { Scrollbars } from 'react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { ChatList, ChatZoneContainer, ChatDateHeader, DragOverZone } from './styles';

import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { ChatDataType, ChatSectionType, ChatUpdateDataType } from '../../../types/types';

export interface Props {
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
	scrollbarRef: RefObject<Scrollbars>;
	chatSections: ChatSectionType;
	chatBucket: ChatDataType[];
	setChatBucket: Dispatch<SetStateAction<ChatDataType[]>>;
	order: number;
	setOrder: Dispatch<SetStateAction<number>>;
	isEnd: boolean;
	isEmpty: boolean;
	isReachingEnd: boolean;
}

const ChatZone = ({
	socket,
	scrollbarRef,
	chatSections,
	chatBucket,
	setChatBucket,
	order,
	setOrder,
	isEnd,
	isEmpty,
	isReachingEnd,
}: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const { part: room } = useParams<{ part: string }>();

	const [dragOver, setDragOver] = useState<boolean>(false);
	const [chatUploadImage, setChatUploadImage] = useState<string>('');

	// TODO: 채팅 인피니티 스크롤
	const onScrollFrame = useCallback(
		values => {
			if (values.scrollTop === 0 && !isEmpty && !isReachingEnd && !isEnd) {
				setOrder(order + 1);
				console.log(isEnd, order);
				if (scrollbarRef.current) {
					scrollbarRef.current.scrollTop(scrollbarRef.current.getScrollHeight() - values.scrollHeight);
					// console.log(scrollbarRef.current);
					// console.log(scrollbarRef.current.scrollTop(scrollbarRef.current.getScrollHeight()));
					// console.log(values.scrollHeight);
				}
			}
		},
		[order, isReachingEnd],
	);

	// TODO: 채팅 이미지 업로드
	useEffect(() => {
		if (chatUploadImage) {
			const newChat: ChatDataType = newChatData('', chatUploadImage, room, profileInfo);
			const getImageData: ChatUpdateDataType = getChatUploadImageData(room, profileInfo, chatUploadImage);

			setChatBucket([...chatBucket, newChat]);
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
				{/* <ObserveBlock ref={observeTargetRef} /> */}
				{Object.entries(chatSections).map(([date, chatsBucket]) => {
					return (
						<ChatList key={date}>
							<ChatDateHeader>
								<button>{date}</button>
							</ChatDateHeader>
							{chatsBucket.length > 0 &&
								chatsBucket.map((chat: ChatDataType, index: number) => {
									let isSameSender = false;
									if (index > 0) {
										isSameSender = chat.writer.email === chatsBucket[index - 1].writer.email;
									}
									return (
										<ChatItem
											socket={socket}
											key={index}
											data={chat}
											chatBucket={chatBucket}
											setChatBucket={setChatBucket}
											index={index}
											isSameSender={isSameSender}
										/>
									);
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
