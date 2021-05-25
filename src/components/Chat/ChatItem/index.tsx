import React, { memo } from 'react';
import ProfileImage from '../../Common/ProfileImage';
import timeStamp from '../../../utils/timeStamp';

import { ChatContent, ChatCreatedAt, ChatUserId, ChatWrapper } from './styles';

import { ChatDataType } from '../../../types/types';

interface Props {
	data: ChatDataType;
}

const ChatItem = ({ data }: Props): JSX.Element => {
	const { uploadImage, profileColor, name } = data.writer;

	return (
		<ChatWrapper>
			<div>
				<ProfileImage
					width="40px"
					height="40px"
					profileImage={uploadImage}
					profileColor={profileColor}
					userName={name}
				/>
			</div>
			<div>
				<div>
					<ChatUserId>{name}</ChatUserId>
					<ChatCreatedAt>{timeStamp(new Date(data.createdAt))}</ChatCreatedAt>
				</div>
				<ChatContent>{data.text}</ChatContent>
			</div>
		</ChatWrapper>
	);
};

export default memo(ChatItem);
