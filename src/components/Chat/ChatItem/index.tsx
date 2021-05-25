import React, { memo } from 'react';
import ProfileImage from '../../Common/ProfileImage';
import timeStamp from '../../../utils/timeStamp';

import { ChatContent, ChatCreatedAt, ChatUserId, ChatWrapper } from './styles';

import { ChatDataType } from '../../../types/types';

interface Props {
	data: ChatDataType;
}
// console.log('이게 writer 안에꺼', timeStamp(new Date('2021-05-23T00:00:51.327Z')));
// console.log('이건 채팅꺼', timeStamp(new Date('2021-05-23T20:29:19.479Z')));
// console.log('writer updatedAt', timeStamp(new Date('updatedAt: 2021-05-23T01:44:51.000Z')));

const ChatItem = ({ data }: Props): JSX.Element => {
	// console.log('여긴 ChatItem', data.writer);
	const { text, writer } = data;
	// const { name, email, mobile, gitId, aboutMe, uploadImage, profileColor } = data.writer;
	return (
		<ChatWrapper>
			<div>
				<ProfileImage
					width="40px"
					height="40px"
					profileImage={writer.uploadImage}
					profileColor={writer.profileColor}
					userName={writer.name}
				/>
			</div>
			<div>
				<div>
					<ChatUserId>{writer.name}</ChatUserId>
					<ChatCreatedAt>{timeStamp(new Date(writer.createdAt))}</ChatCreatedAt>
				</div>
				<ChatContent>{text}</ChatContent>
			</div>
		</ChatWrapper>
	);
};

export default memo(ChatItem);
