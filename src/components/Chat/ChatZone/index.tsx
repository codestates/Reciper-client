import React, { RefObject, useCallback } from 'react';
import ChatItem from '../ChatItem';

import { Scrollbars } from 'react-custom-scrollbars';

import { ChatList, ChatZoneContainer, StickyHeader } from './styles';

import { ChatDataType } from '../../../types/types';

export interface Props {
	scrollbarRef: RefObject<Scrollbars>;
	chatBucket: ChatDataType[];
}

const ChatZone = ({ scrollbarRef, chatBucket }: Props): JSX.Element => {
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

	return (
		<ChatZoneContainer>
			<Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScrollFrame}>
				<StickyHeader></StickyHeader>
				<ChatList>
					{chatBucket?.map((chat: ChatDataType, index: number) => {
						let isSameSender = false;
						if (index > 0) {
							isSameSender = chat.writer.email === chatBucket[index - 1].writer.email;
						}
						return isSameSender ? (
							<ChatItem key={index} data={chat} isSameSender={true} />
						) : (
							<ChatItem key={index} data={chat} isSameSender={false} />
						);
					})}
				</ChatList>
			</Scrollbars>
		</ChatZoneContainer>
	);
};

export default ChatZone;
