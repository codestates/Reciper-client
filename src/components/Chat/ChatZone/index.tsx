import React, { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useState } from 'react';
import ChatItem from '../ChatItem';
import { onDragUploadImage } from '../../../utils/imageUpload';

import { Scrollbars } from 'react-custom-scrollbars';

import { ChatList, ChatZoneContainer, ChatDateHeader, DragOverZone } from './styles';

import { ChatDataType, ChatSectionType, ChatUpdateDataType } from '../../../types/types';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getProfileInfoSelector } from '../../../reducer/profile';
import useSocket from '../../../hooks/useSocket';
import { getChatUploadImageData, newChatData } from '../../../utils/ChatSocketData';
import DragUploadModal from '../DragUploadModal';

export interface Props {
	scrollbarRef: RefObject<Scrollbars>;
	chatSections: ChatSectionType;
	chatBucket: ChatDataType[];
	setChatBucket: Dispatch<SetStateAction<ChatDataType[]>>;
}

const ChatZone = ({ scrollbarRef, chatSections, chatBucket, setChatBucket }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const { projectUrl, part: room } = useParams<{ projectUrl: string; part: string }>();
	const history = useHistory();
	const currentAddress = history.location.pathname.split('/')[3];
	const [socket] = useSocket(projectUrl, currentAddress);

	const [dragOver, setDragOver] = useState<boolean>(false);
	const [chatUploadImage, setChatUploadImage] = useState<string>('');

	const onScrollFrame = useCallback(
		values => {
			if (values.scrollTop === 0 && scrollbarRef.current) {
				// console.log(
				// 	'현재 스크롤 높이, 스크롤의 스크롤바 높이',
				// 	scrollbarRef.current?.getScrollHeight(),
				// 	values.scrollHeight,
				// );
				scrollbarRef.current.getScrollHeight() - values.scrollHeight;
			}
		},
		[scrollbarRef],
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

	const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		onDragUploadImage(e, setDragOver, setChatUploadImage);
		setDragOver(false);
	}, []);

	const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		setDragOver(true);
	}, []);

	return (
		<ChatZoneContainer onDrop={onDrop} onDragOver={onDragOver}>
			<Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScrollFrame}>
				{Object.entries(chatSections).map(([date, chatsBucket]) => {
					return (
						<ChatList key={date}>
							<ChatDateHeader>
								<button>{date}</button>
							</ChatDateHeader>
							{chatsBucket.map((chat: ChatDataType, index: number) => {
								let isSameSender = false;
								if (index > 0) {
									isSameSender = chat.writer.email === chatsBucket[index - 1].writer.email;
								}
								return isSameSender ? (
									<ChatItem
										key={index}
										data={chat}
										chatBucket={chatBucket}
										setChatBucket={setChatBucket}
										index={index}
										isSameSender={true}
									/>
								) : (
									<ChatItem
										key={index}
										data={chat}
										chatBucket={chatBucket}
										setChatBucket={setChatBucket}
										index={index}
										isSameSender={false}
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
