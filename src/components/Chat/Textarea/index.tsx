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
import useSocket from '../../../hooks/useSocket';
import { getProfileInfoSelector } from '../../../reducer/profile';
import { getChatUploadImageData, newChatData } from '../../../utils/ChatSocketData';

import { Mention, OnChangeHandlerFunc, SuggestionDataItem } from 'react-mentions';
import autosize from 'autosize';
import { useHistory, useParams } from 'react-router';
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

import { ChatDataType, ChatUpdateDataType } from '../../../types/types';

interface DataType {
	id: number;
	name: string;
}
const members = [{ id: 1, name: 'useonglee' }];

interface Props {
	onSubmitForm: (e: FormEvent) => void;
	onChangeChat: OnChangeHandlerFunc;
	chat?: string;
	placeholder?: string;
	chatBucket: ChatDataType[];
	setChatBucket: Dispatch<SetStateAction<ChatDataType[]>>;
}

const Textarea = ({ onSubmitForm, onChangeChat, chat, placeholder, chatBucket, setChatBucket }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const { projectUrl, part: room } = useParams<{ projectUrl: string; part: string }>();
	const history = useHistory();
	const currentAddress = history.location.pathname.split('/')[3];
	const [socket] = useSocket(projectUrl, currentAddress);

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
			const newChat: ChatDataType = newChatData('', chatUploadImage, room, profileInfo);
			const getImageData: ChatUpdateDataType = getChatUploadImageData(room, profileInfo, chatUploadImage);

			setChatBucket([...chatBucket, newChat]);
			socket?.emit('sendImage', getImageData);
		}
	}, [chatUploadImage]);

	// TODO: 채팅 이미지 업로드 창 열기
	const onChatUploadImage = useCallback(() => {
		clickUploadImage(imageInput);
	}, [imageInput]);

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
					<ChatMention />
					<ChatImageUpload onClick={onChatUploadImage} />
					<SendChatBox className={!chat?.trim() ? 'off' : 'onValue'} type="submit">
						<SendChatButton />
					</SendChatBox>
				</ChatContentsWrapper>
			</ChatArea>
		</ChatAreaContainer>
	);
};

export default Textarea;
