import React, { Dispatch, RefObject, SetStateAction, useCallback } from 'react';
import ChatItem from '../ChatItem';

import { Scrollbars } from 'react-custom-scrollbars';

import { ChatList, ChatZoneContainer, ChatDateHeader } from './styles';

import { ChatDataType, ChatSectionType } from '../../../types/types';

export interface Props {
	scrollbarRef: RefObject<Scrollbars>;
	chatSections: ChatSectionType;
	chatBucket: ChatDataType[];
	setChatBucket: Dispatch<SetStateAction<ChatDataType[]>>;
}

const ChatZone = ({ scrollbarRef, chatSections, chatBucket, setChatBucket }: Props): JSX.Element => {
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
				{Object.entries(chatSections).map(([date, chatsBucket]) => {
					return (
						<ChatList key={date}>
							<ChatDateHeader>
								<button>{date}</button>
							</ChatDateHeader>
							{chatsBucket.map((chat: ChatDataType, index: number) => {
								let isSameSender = false;
								if (index > 0) {
									isSameSender = chat.writer.email === chatsBucket[index - 1].writer.email;
								}
								return isSameSender ? (
									<ChatItem
										key={index}
										data={chat}
										chatBucket={chatBucket}
										setChatBucket={setChatBucket}
										index={index}
										isSameSender={true}
									/>
								) : (
									<ChatItem
										key={index}
										data={chat}
										chatBucket={chatBucket}
										setChatBucket={setChatBucket}
										index={index}
										isSameSender={false}
									/>
								);
							})}
						</ChatList>
					);
				})}
			</Scrollbars>
		</ChatZoneContainer>
	);
};

export default ChatZone;
