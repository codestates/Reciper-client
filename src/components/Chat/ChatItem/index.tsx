import React, { ChangeEvent, Dispatch, memo, SetStateAction, useCallback, useEffect, useState } from 'react';
import ProfileImage from '../../Common/ProfileImage';
import ChatProfileModal from '../ChatProfileModal';
import Modal from '../../Common/Modal';
import useSocket from '../../../hooks/useSocket';

import dayjs from 'dayjs';
import { useParams } from 'react-router';

import {
	AlertButtonWrapper,
	AlertChatContent,
	AlertChatDeleteButton,
	AlertChatItem,
	AlertChatItemUserInfoWrapper,
	ChatContent,
	ChatCreatedAt,
	ChatDeleteAlert,
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
import Button from '../../Common/Button';

interface Props {
	data: ChatDataType;
	isSameSender: boolean;
	setChatBucket: Dispatch<SetStateAction<ChatDataType[]>>;
}

const ChatItem = ({ data, isSameSender, setChatBucket }: Props): JSX.Element => {
	const { projectUrl, part: room } = useParams<{ projectUrl: string; part: string }>();
	const [socket] = useSocket(projectUrl);

	const [showChatProfileModal, setShowChatProfileModal] = useState<boolean>(false);
	const [showChatDeleteAlert, setShowChatDeleteAlert] = useState<boolean>(false);
	const [showChatEditForm, setShowChatEditForm] = useState<boolean>(false);

	const { uploadImage, profileColor, name } = data.writer;
	let date = dayjs(data.createdAt);
	date = date.add(9, 'hour');

	// TODO: 채팅 프로필 모달
	const onShowChatProfileModal = useCallback(e => {
		e.preventDefault();
		e.stopPropagation();
		setShowChatProfileModal(true);
	}, []);

	const onChatEditButton = useCallback(() => {
		console.log(data.id);
	}, []);

	// TODO: 채팅 삭제 버튼
	const onChatDeleteButton = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
			e.preventDefault();
			e.stopPropagation();
			setShowChatDeleteAlert(false);

			const getChatDeleteData = {
				room: room,
				id: data.id,
			};
			socket?.emit('deleteMessage', getChatDeleteData);
		},
		[data],
	);

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
				<ChatDeleteButton onClick={() => setShowChatDeleteAlert(true)} />
			</ChatUpdateModal>
			<ChatNowDateHover isSameSender={isSameSender}>{dayjs(date).format('A h:mm')}</ChatNowDateHover>
			{showChatDeleteAlert && (
				<Modal setShowModal={setShowChatDeleteAlert}>
					<ChatDeleteAlert>
						<div>메세지 삭제</div>
						<p>이 메시지를 삭제하시겠습니까? 이 작업은 실행 취소할 수 없습니다.</p>
						<AlertChatItem>
							<div>
								<ProfileImage
									width="40px"
									height="40px"
									profileImage={uploadImage}
									profileColor={profileColor}
									userName={name}
								/>
							</div>
							<AlertChatItemUserInfoWrapper>
								<div>
									<ChatUserId>{name}</ChatUserId>
									<ChatCreatedAt>{dayjs(date).format('A h:mm')}</ChatCreatedAt>
								</div>
								<AlertChatContent>{data.text}</AlertChatContent>
							</AlertChatItemUserInfoWrapper>
						</AlertChatItem>
						<AlertButtonWrapper>
							<Button size="small" buttonType="cancel" clickEvent={() => setShowChatDeleteAlert(false)}>
								취소
							</Button>
							<AlertChatDeleteButton onClick={onChatDeleteButton}>삭제</AlertChatDeleteButton>
						</AlertButtonWrapper>
					</ChatDeleteAlert>
				</Modal>
			)}
		</ChatWrapper>
	);
};

export default memo(ChatItem);
