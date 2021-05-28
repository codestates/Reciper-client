import React, { useCallback, KeyboardEvent, FormEvent, useRef, useEffect } from 'react';
import ProfileImage from '../../Common/ProfileImage';

import { Mention, OnChangeHandlerFunc, SuggestionDataItem } from 'react-mentions';
import autosize from 'autosize';

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

import { ChatDataType } from '../../../types/types';

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
}

const Textarea = ({ onSubmitForm, onChangeChat, chat, placeholder, chatBucket }: Props): JSX.Element => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

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
					<ChatMention />
					<ChatImageUpload />
					<SendChatBox className={!chat?.trim() ? 'off' : 'onValue'} type="submit">
						<SendChatButton />
					</SendChatBox>
				</ChatContentsWrapper>
			</ChatArea>
		</ChatAreaContainer>
	);
};

export default Textarea;
