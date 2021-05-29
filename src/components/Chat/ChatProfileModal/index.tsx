import React from 'react';
import ProfileImage from '../../Common/ProfileImage';
import { getProfileInfoSelector } from '../../../reducer/profile';

import { useSelector } from 'react-redux';

import {
	ChatProfileModalWrapper,
	GoToProfileLink,
	PrfileModalBottomWrapper,
	ProfileModalTopWrapper,
	ProfileModalUserName,
	ProfileModalUserAboutMe,
	LinkWrapper,
	ProfileModalLink,
} from './styles';

import { ChatDataType } from '../../../types/types';

interface Props {
	data: ChatDataType;
}

const ChatProfileModal = ({ data }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const { id, uploadImage, profileColor, name, aboutMe, email } = data.writer;

	return (
		<ChatProfileModalWrapper>
			<ProfileModalTopWrapper>
				<ProfileImage
					width="100%"
					height="100%"
					profileImage={uploadImage}
					profileColor={profileColor}
					userName={name}
					radius={'0'}
				/>
			</ProfileModalTopWrapper>
			<PrfileModalBottomWrapper>
				<ProfileModalUserName>{name}</ProfileModalUserName>
				<ProfileModalUserAboutMe>{aboutMe}</ProfileModalUserAboutMe>
				{profileInfo.email === email ? (
					<LinkWrapper>
						<GoToProfileLink to={`/profile/${profileInfo.id}/edit`}>프로필 편집 하기</GoToProfileLink>
					</LinkWrapper>
				) : (
					<LinkWrapper>
						<ProfileModalLink to={`profile/${id}`}>메시지</ProfileModalLink>
						<ProfileModalLink to={`profile/${id}`}>전체 프로필</ProfileModalLink>
					</LinkWrapper>
				)}
			</PrfileModalBottomWrapper>
		</ChatProfileModalWrapper>
	);
};

export default ChatProfileModal;
