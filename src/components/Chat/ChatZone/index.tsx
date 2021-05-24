import React from 'react';
import { ChatDataType } from '../../../types/types';
import ChatItem from '../ChatItem';

import { ChatList, ChatZoneContainer } from './styles';

// const chats = [
// 	{
// 		name: '이우성',
// 		message: '안녕하세요',
// 	},
// 	{
// 		name: '곽은욱',
// 		message: '하이루',
// 	},
// ];

// export interface ChatDummy {
// 	name: string;
// 	message: string;
// }

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
