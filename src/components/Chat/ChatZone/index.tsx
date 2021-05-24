import React from 'react';
import ChatItem from '../ChatItem';

import { ChatList, ChatZoneContainer } from './styles';

import { ChatDataType } from '../../../types/types';

export interface Props {
	chatBucket: ChatDataType[];
}

const ChatZone = ({ chatBucket }: Props): JSX.Element => {
	return (
		<ChatZoneContainer>
			<ChatList>
				{chatBucket.map((chat: ChatDataType, index: number) => (
					<ChatItem key={index} data={chat} />
				))}
			</ChatList>
		</ChatZoneContainer>
	);
};

export default ChatZone;
