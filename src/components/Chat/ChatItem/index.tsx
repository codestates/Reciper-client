import React, { Dispatch, memo, SetStateAction, useCallback, useEffect, useState } from 'react';
import ProfileImage from '../../Common/ProfileImage';
import ChatProfileModal from '../ChatProfileModal';
import Modal from '../../Common/Modal';
import useSocket from '../../../hooks/useSocket';

import dayjs from 'dayjs';
import { useParams } from 'react-router';

import {
	ChatContent,
	ChatCreatedAt,
	ChatDeleteButton,
	ChatEditbutton,
	ChatNowDateHover,
	ChatProfileImageWrapper,
	ChatUpdateModal,
	ChatUserId,
	ChatUserInfoWrapper,
	ChatWrapper,
} from './styles';

import { ChatDataType } from '../../../types/types';

interface Props {
	data: ChatDataType;
	isSameSender: boolean;
	setChatBucket: Dispatch<SetStateAction<ChatDataType[]>>;
}

const ChatItem = ({ data, isSameSender, setChatBucket }: Props): JSX.Element => {
	const { projectUrl, part: room } = useParams<{ projectUrl: string; part: string }>();
	const [socket] = useSocket(projectUrl);

	const [showChatProfileModal, setShowChatProfileModal] = useState<boolean>(false);

	const { uploadImage, profileColor, name } = data.writer;
	let date = dayjs(data.createdAt);
	date = date.add(9, 'hour');

	const onShowChatProfileModal = useCallback(e => {
		e.preventDefault();
		e.stopPropagation();

		setShowChatProfileModal(true);
	}, []);

	// console.log(data.id);
	const onChatEditButton = useCallback(() => {
		console.log(data.id);
	}, []);

	useEffect(() => {
		socket?.on('deleteMessage', ({ id }) => {
			console.log({ id });
			// setChatBucket([...{ id }])
		});
	}, []);

	const onChatDeleteButton = useCallback(e => {
		console.log('room확인', room);
		console.log(data.id);
		e.preventDefault();
		const getChatDeleteData = {
			room: room,
			id: data.id,
		};
		socket?.emit('deleteMessage', getChatDeleteData);
	}, []);

	return (
		<ChatWrapper isSameSender={isSameSender}>
			<ChatProfileImageWrapper isSameSender={isSameSender} onClick={e => onShowChatProfileModal(e)}>
				<ProfileImage
					width="40px"
					height="40px"
					profileImage={uploadImage}
					profileColor={profileColor}
					userName={name}
				/>
			</ChatProfileImageWrapper>
			{showChatProfileModal && (
				<Modal backgroundColor={false} setShowModal={setShowChatProfileModal}>
					<ChatProfileModal data={data} />
				</Modal>
			)}

			<div>
				<ChatUserInfoWrapper isSameSender={isSameSender}>
					<ChatUserId>{name}</ChatUserId>
					<ChatCreatedAt>{dayjs(date).format('A h:mm')}</ChatCreatedAt>
				</ChatUserInfoWrapper>
				<ChatContent isSameSender={isSameSender}>{data.text}</ChatContent>
			</div>
			<ChatUpdateModal>
				<ChatEditbutton onClick={onChatEditButton} />
				<ChatDeleteButton onClick={onChatDeleteButton} />
			</ChatUpdateModal>
			<ChatNowDateHover isSameSender={isSameSender}>{dayjs(date).format('A h:mm')}</ChatNowDateHover>
		</ChatWrapper>
	);
};

export default memo(ChatItem);
