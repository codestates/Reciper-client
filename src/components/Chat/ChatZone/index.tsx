import React from 'react';
import ChatItem from '../ChatItem';

import { Scrollbars } from 'react-custom-scrollbars';

import { ChatList, ChatZoneContainer, StickyHeader } from './styles';

import { ChatDataType } from '../../../types/types';

export interface Props {
	chatBucket: ChatDataType[];
}

const ChatZone = ({ chatBucket }: Props): JSX.Element => {
	console.log('여긴 chatZone', chatBucket);
	return (
		<ChatZoneContainer>
			<Scrollbars autoHide>
				<StickyHeader></StickyHeader>
				<ChatList>
					{chatBucket.map((chat: ChatDataType) => (
						<ChatItem key={chat.id} data={chat} />
					))}
				</ChatList>
			</Scrollbars>
		</ChatZoneContainer>
	);
};

export default ChatZone;
