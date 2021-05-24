import React, { useCallback, KeyboardEvent, FormEvent, useRef, ChangeEvent, useEffect } from 'react';
import { getProfileInfoSelector } from '../../../reducer/profile';

import { Mention, OnChangeHandlerFunc, SuggestionDataItem } from 'react-mentions';
import autosize from 'autosize';
import { useSelector } from 'react-redux';

import { ChatArea, ChatForm, MentionList, MentionsTextarea, SendChatBox, SendChatButton } from './styles';
import ProfileImage from '../../Common/ProfileImage';

const memberData = [{ id: 1, name: 'useonglee' }];
interface dataType {
	id: number;
	name: string;
}

interface Props {
	onSubmitForm: (e: FormEvent) => void;
	onChangeChat: OnChangeHandlerFunc;
	chat?: string;
	placeholder: string;
	memberData?: string[];
}

const Textarea = ({ onSubmitForm, onChangeChat, chat, placeholder }: Props): JSX.Element => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const profileInfo = useSelector(getProfileInfoSelector);

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
			if (!memberData) {
				return null;
			}
			return (
				<MentionList focus={focus}>
					<ProfileImage profileImage={profileInfo.uploadImage} profileColor={profileInfo.profileColor} />
					<span>{highlightedDisplay}</span>
				</MentionList>
			);
		},
		[memberData],
	);

	return (
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
					<Mention
						appendSpaceOnAdd
						trigger="@"
						data={memberData?.map((user: dataType) => ({ id: user.id, display: user.name })) || []}
						renderSuggestion={renderUserSuggestion}
					/>
				</MentionsTextarea>
				<SendChatBox className={!chat?.trim() ? 'off' : 'onValue'} type="submit">
					<SendChatButton />
				</SendChatBox>
			</ChatForm>
		</ChatArea>
	);
};

export default Textarea;
