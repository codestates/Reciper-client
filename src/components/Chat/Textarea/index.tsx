import React, {
	useCallback,
	KeyboardEvent,
	FormEvent,
	useRef,
	useEffect,
	useState,
	Dispatch,
	SetStateAction,
	ChangeEvent,
} from 'react';
import ProfileImage from '../../Common/ProfileImage';
import { changeImage, clickUploadImage } from '../../../utils/imageUpload';
import { getProfileInfoSelector } from '../../../reducer/profile';
import { getChatUploadImageData, newChatData } from '../../../utils/ChatSocketData';

import { Socket } from 'socket.io-client';
import { Mention, OnChangeHandlerFunc, SuggestionDataItem } from 'react-mentions';
import autosize from 'autosize';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import {
	ChatArea,
	ChatAreaContainer,
	ChatContentsWrapper,
	ChatForm,
	ChatImageUpload,
	ChatMention,
	MentionList,
	MentionsTextarea,
	SendChatBox,
	SendChatButton,
} from './styles';

import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { ChatDataType, ChatUpdateDataType } from '../../../types/types';

interface DataType {
	id: number;
	name: string;
}
const members = [{ id: 1, name: 'useonglee' }];

interface Props {
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
	onSubmitForm: (e: FormEvent) => void;
	onChangeChat: OnChangeHandlerFunc;
	chat?: string;
	setChat: Dispatch<SetStateAction<string>>;
	placeholder?: string;
	chatBucket: ChatDataType[];
	setChatBucket: Dispatch<SetStateAction<ChatDataType[]>>;
}

const Textarea = ({
	socket,
	onSubmitForm,
	onChangeChat,
	chat,
	setChat,
	placeholder,
	chatBucket,
	setChatBucket,
}: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
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
			const chatLastIndex = chatBucket[chatBucket.length - 1].id + 1;
			const newChat: ChatDataType = newChatData(chatLastIndex, '', chatUploadImage, room, profileInfo);
			const getImageData: ChatUpdateDataType = getChatUploadImageData(room, profileInfo, chatUploadImage);

			setChatBucket([...chatBucket, newChat]);
			socket?.emit('sendImage', getImageData);
		}
	}, [chatUploadImage]);

	// TODO: 채팅 이미지 업로드 창 열기
	const onChatUploadImage = useCallback(() => {
		clickUploadImage(imageInput);
	}, [imageInput]);

	// TODO: 멘션
	const onChatMention = useCallback(() => {
		setChat('@');
	}, []);

	const renderUserSuggestion: (
		suggestion: SuggestionDataItem,
		search: string,
		highlightedDisplay: React.ReactNode,
		index: number,
		focused: boolean,
	) => React.ReactNode = useCallback(
		(member, search, highlightedDisplay, index, focus) => {
			if (!chatBucket) {
				return null;
			}
			return (
				<MentionList focus={focus}>
					{chatBucket.map((user: ChatDataType, index: number) => (
						<div key={index}>
							<ProfileImage profileImage={user.writer.uploadImage} profileColor={user.writer.profileColor} />
							<span>{highlightedDisplay}</span>
						</div>
					))}
				</MentionList>
			);
		},
		[chatBucket],
	);

	return (
		<ChatAreaContainer>
			<ChatArea>
				<ChatForm className={!chat?.trim() ? 'off' : 'onValue'} onSubmit={onSubmitForm}>
					<MentionsTextarea
						value={chat}
						onChange={onChangeChat}
						onKeyPress={onKeydownChat}
						placeholder={placeholder}
						inputRef={textareaRef}
						allowSuggestionsAboveCursor
					>
						{/* <Mention
						appendSpaceOnAdd
						trigger="@"
						data={
							chatBucket.map((chatInfo: any) => {
								return chatInfo.project.inviteList.map((user: any) => ({
									id: user,
									display: user.split('@')[0],
								}));
							}) || []
						}
						renderSuggestion={renderUserSuggestion}
					/> */}

						<Mention
							appendSpaceOnAdd
							trigger="@"
							data={
								members.map((user: DataType) => ({
									id: user.id,
									display: user.name,
								})) || []
							}
							renderSuggestion={renderUserSuggestion}
						/>
					</MentionsTextarea>
				</ChatForm>
				<ChatContentsWrapper className={!chat?.trim() ? 'off' : 'onValue'}>
					{/* TODO: 이미지 요청 테스트 */}
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
					<ChatMention onClick={onChatMention} />
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
