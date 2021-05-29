import React, { Dispatch, RefObject, SetStateAction, useCallback, useEffect } from 'react';
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

interface Props {
	data: ChatDataType;
}

const ChatProfileModal = ({ data }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const { uploadImage, profileColor, name, aboutMe, email } = data.writer;

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
						<div>
							<GoToProfileLink to={`/project`}>내 레시피 보기</GoToProfileLink>
						</div>
						<div>
							<GoToProfileLink to={`/profile/${profileInfo.id}`}>프로필 편집 하기</GoToProfileLink>
						</div>
					</LinkWrapper>
				) : (
					<>
						<button>디엠 보내기</button>
						<button>전체 프로필 보기</button>
					</>
				)}
			</PrfileModalBottomWrapper>
		</ChatProfileModalWrapper>
	);
};

export default ChatProfileModal;
