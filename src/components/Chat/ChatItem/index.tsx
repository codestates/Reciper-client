import React, { memo } from 'react';
import ProfileImage from '../../Common/ProfileImage';
import timeStamp from '../../../utils/timeStamp';

import {
	ChatContent,
	ChatCreatedAt,
	ChatProfileImageWrapper,
	ChatUserId,
	ChatUserInfoWrapper,
	ChatWrapper,
} from './styles';

import { ChatDataType } from '../../../types/types';

interface Props {
	data: ChatDataType;
	isSameSender: boolean;
}

const ChatItem = ({ data, isSameSender }: Props): JSX.Element => {
	const { uploadImage, profileColor, name } = data.writer;

	return (
		<ChatWrapper isSameSender={isSameSender}>
			<ChatProfileImageWrapper isSameSender={isSameSender}>
				<ProfileImage
					width="40px"
					height="40px"
					profileImage={uploadImage}
					profileColor={profileColor}
					userName={name}
				/>
			</ChatProfileImageWrapper>
			<div>
				<ChatUserInfoWrapper isSameSender={isSameSender}>
					<ChatUserId>{name}</ChatUserId>
					<ChatCreatedAt>{timeStamp(new Date(data.createdAt))}</ChatCreatedAt>
				</ChatUserInfoWrapper>
				<ChatContent isSameSender={isSameSender}>{data.text}</ChatContent>
			</div>
		</ChatWrapper>
	);
};

export default memo(ChatItem);
