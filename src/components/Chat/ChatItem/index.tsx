import React, { memo } from 'react';
import { getProfileInfoSelector } from '../../../reducer/profile';
// import { ChatDummy } from '../ChatZone';

import { useSelector } from 'react-redux';

import { ChatContent, ChatCreatedAt, ChatUserId, ChatWrapper } from './styles';
import ProfileImage from '../../Common/ProfileImage';
import timeStamp from '../../../utils/timeStamp';
import { ChatDataType } from '../../../types/types';

interface Props {
	data: ChatDataType;
}

const ChatItem = ({ data }: Props): JSX.Element => {
	const { uploadImage, name, profileColor, createdAt } = useSelector(getProfileInfoSelector);
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
					<ChatUserId>{data.name}</ChatUserId>
					<ChatCreatedAt>{timeStamp(new Date(createdAt))}</ChatCreatedAt>
				</div>
				<ChatContent>{data.message}</ChatContent>
			</div>
		</ChatWrapper>
	);
};

export default memo(ChatItem);
