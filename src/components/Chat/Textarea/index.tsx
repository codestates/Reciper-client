import React, {
	useCallback,
	KeyboardEvent,
	FormEvent,
	useRef,
	useEffect,
	useState,
	Dispatch,
	ChangeEvent,
} from 'react';
import { changeImage, clickUploadImage } from '../../../utils/imageUpload';
import { getProfileInfoSelector } from '../../../reducer/profile';
import { getChatUploadImageData, newChatData } from '../../../utils/ChatSocketData';

import { Socket } from 'socket.io-client';
import autosize from 'autosize';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import {
	ChatArea,
	ChatAreaContainer,
	ChatContentsWrapper,
	ChatForm,
	ChatImageUpload,
	ChatTextarea,
	SendChatBox,
	SendChatButton,
} from './styles';

import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { ChatDataType, ChatUpdateDataType } from '../../../types/types';
import { getChatDataSelector } from '../../../reducer/chat';

interface Props {
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
	onSubmitForm: (e: FormEvent) => void;
	onChangeChat: React.ChangeEventHandler<HTMLTextAreaElement>;
	chat?: string;
	placeholder?: string;
}

const Textarea = ({ socket, onSubmitForm, onChangeChat, chat, placeholder }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const chatData = useSelector(getChatDataSelector);

	const { part: room } = useParams<{ projectUrl: string; part: string }>();

	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const imageInput = useRef<HTMLInputElement>(null);

	const [chatUploadImage, setChatUploadImage] = useState<string>('');

	useEffect(() => {
		if (textareaRef.current) {
			autosize(textareaRef.current);
		}
	}, [textareaRef.current]);

	const onKeydownChat = useCallback(
		(e: KeyboardEvent<HTMLTextAreaElement>): void => {
			if (e.key === 'Enter') {
				if (!e.shiftKey) {
					e.preventDefault();
					onSubmitForm(e);
				}
			}
		},
		[onSubmitForm],
	);

	const onChangeUploadImage = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		changeImage(e, setChatUploadImage);
	}, []);

	// TODO: 채팅 이미지 업로드
	useEffect(() => {
		if (chatUploadImage) {
			const chatLastIndex = chatData[chatData.length - 1].id + 1;
			const newChat: ChatDataType = newChatData(chatLastIndex, '', chatUploadImage, room, profileInfo);
			const getImageData: ChatUpdateDataType = getChatUploadImageData(room, profileInfo, chatUploadImage);

			// setChatBucket([...chatBucket, newChat]);
			socket?.emit('sendImage', getImageData);
		}
	}, [chatUploadImage]);

	// TODO: 채팅 이미지 업로드 창 열기
	const onChatUploadImage = useCallback(() => {
		clickUploadImage(imageInput);
	}, [imageInput]);

	return (
		<ChatAreaContainer>
			<ChatArea>
				<ChatForm className={!chat?.trim() ? 'off' : 'onValue'} onSubmit={onSubmitForm}>
					<ChatTextarea
						value={chat}
						onChange={onChangeChat}
						onKeyPress={onKeydownChat}
						placeholder={placeholder}
						ref={textareaRef}
					></ChatTextarea>
				</ChatForm>
				<ChatContentsWrapper className={!chat?.trim() ? 'off' : 'onValue'}>
					{/* TODO: 이미지 요청 */}
					<form encType="multipart/form-data">
						<input
							type="file"
							accept="image/jpg,image/png,/image/jpeg"
							name="file"
							hidden
							onChange={onChangeUploadImage}
							ref={imageInput}
						/>
					</form>
					<ChatImageUpload onClick={onChatUploadImage} />
					<SendChatBox className={!chat?.trim() ? 'off' : 'onValue'} onClick={onSubmitForm}>
						<SendChatButton />
					</SendChatBox>
				</ChatContentsWrapper>
			</ChatArea>
		</ChatAreaContainer>
	);
};

export default Textarea;
