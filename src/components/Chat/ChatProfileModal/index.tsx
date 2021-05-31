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
} from './styles';

import { ChatDataType } from '../../../types/types';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

interface Props {
	data: ChatDataType;
}

const ChatProfileModal = ({ data }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const { id, uploadImage, profileColor, name, aboutMe, email } = data.writer;

	const profileModalAnimated = {
		profileModal: useScrollFadeIn({ direction: 'short-left', duration: 0.3, delay: 0 }),
	};

	return (
		<ChatProfileModalWrapper {...profileModalAnimated.profileModal}>
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
						<GoToProfileLink to={`profile/${id}`}>전체 프로필</GoToProfileLink>
					</LinkWrapper>
				)}
			</PrfileModalBottomWrapper>
		</ChatProfileModalWrapper>
	);
};

export default ChatProfileModal;
