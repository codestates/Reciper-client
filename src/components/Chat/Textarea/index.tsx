import React, { useCallback, KeyboardEvent, FormEvent, ChangeEvent, useRef } from 'react';

import { Mention } from 'react-mentions';

import { ChatArea, ChatForm, MentionsTextarea, SendChatBox, SendChatButton } from './styles';

interface Props {
	onSubmitForm: (e: FormEvent) => void;
	onChangeChat: (e: ChangeEvent<HTMLInputElement>) => void;
	chat?: string;
	placeholder: string;
	data?: string[];
}

const Textarea = ({ onSubmitForm, onChangeChat, chat, placeholder }: Props): JSX.Element => {
	const inputRef = useRef<HTMLInputElement>(null);

	const onKeydownChat = useCallback(
		(e: KeyboardEvent<HTMLInputElement>): void => {
			if (e.key === 'Enter') {
				if (!e.shiftKey) {
					e.preventDefault();
					onSubmitForm(e);
				}
			}
		},
		[onSubmitForm],
	);

	return (
		<ChatArea>
			<ChatForm className={!chat?.trim() ? 'off' : 'onValue'} onSubmit={onSubmitForm}>
				<MentionsTextarea
					value={chat}
					onChange={onChangeChat}
					onKeyPress={onKeydownChat}
					placeholder={placeholder}
					ref={inputRef}
				></MentionsTextarea>
				<SendChatBox className={!chat?.trim() ? 'off' : 'onValue'} type="submit">
					<SendChatButton />
				</SendChatBox>
			</ChatForm>
		</ChatArea>
	);
};

export default Textarea;
