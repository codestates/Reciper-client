import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import ProfileImage from '../../Common/ProfileImage';
import ChatProfileModal from '../ChatProfileModal';
import DeleteAlert from '../DeleteAlert';
import useInput from '../../../hooks/useInput';
import { getProfileInfoSelector } from '../../../reducer/profile';
import { getChatDeleteData, getChatEditData, newChatData } from '../../../utils/ChatSocketData';
import { getChatDataSelector } from '../../../reducer/chat';

import { Socket } from 'socket.io-client';
import dayjs from 'dayjs';
import autosize from 'autosize';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import {
	ChatContent,
	ChatContentWrapper,
	ChatCreatedAt,
	ChatDeleteButton,
	ChatEditbutton,
	ChatEditButtonWrapper,
	ChatEditTextArea,
	ChatItemProfileModal,
	ChatNowDateHover,
	ChatProfileImageWrapper,
	ChatUpdateModal,
	ChatUserId,
	ChatUserInfoWrapper,
	ChatWrapper,
} from './styles';

import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { ChatDataType, ChatUpdateDataType } from '../../../types/types';

interface Props {
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
	data: ChatDataType;
	isSameSender: boolean;
	index: number;
}

const ChatItem = ({ socket, data, isSameSender, index }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const chatData = useSelector(getChatDataSelector);

	const { part: room } = useParams<{ projectUrl: string; part: string }>();
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const [showChatProfileModal, setShowChatProfileModal] = useState<boolean>(false);
	const [showChatDeleteAlert, setShowChatDeleteAlert] = useState<boolean>(false);
	const [showChatEditForm, setShowChatEditForm] = useState<boolean>(false);
	const [editChat, onChangeChat, setEditChat] = useInput<string | undefined>(data?.text);
	const [chatLocation, setChatLocation] = useState<string>('6px');

	const { uploadImage, profileColor, name, email } = data.writer;

	const onClickChatItem = useCallback(() => {
		if (modalRef.current) {
			const location = modalRef.current.getBoundingClientRect();
			if (location.y > 520) {
				setChatLocation(`-${String(location.y - 520)}px`);
			}
		}
	}, []);

	// TODO: 채팅 수정 엔터
	const onChatEditEnter = useCallback((): void => {
		const getChatEdit: ChatUpdateDataType = getChatEditData(room, index, data.id, editChat);
		const newChat: ChatDataType = newChatData(data.id, editChat, '', room, profileInfo);

		const copyChatBucket = [...chatData];
		copyChatBucket.splice(index, 1, newChat);
		// setChatBucket([...copyChatBucket]);

		socket?.emit('editMessage', getChatEdit);
		setShowChatEditForm(false);
	}, [editChat]);

	// TODO: 채팅 수정 버튼
	const onChatEditButton = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
			e.preventDefault();

			const getChatEdit: ChatUpdateDataType = getChatEditData(room, index, data.id, editChat);
			const newChat: ChatDataType = newChatData(data.id, editChat, '', room, profileInfo);

			const copyChatBucket = [...chatData];
			copyChatBucket[index] = newChat;
			// setChatBucket([...copyChatBucket]);

			socket?.emit('editMessage', getChatEdit);
			setShowChatEditForm(false);
		},
		[editChat],
	);

	// TODO: 채팅 수정 실행 취소
	const onChatEditCancel = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
			e.preventDefault();
			setEditChat(data.text);
			setShowChatEditForm(false);
		},
		[showChatEditForm],
	);

	// TODO: 채팅 삭제 버튼
	const onChatDeleteButton = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
			e.preventDefault();
			setShowChatDeleteAlert(false);

			const getChatDelete = getChatDeleteData(room, index, data.id);
			const copyChatBucket = [...chatData];
			copyChatBucket.splice(index, 1);
			// setChatBucket([...copyChatBucket]);
			socket?.emit('deleteMessage', getChatDelete);
		},
		[chatData],
	);

	// TODO: 채팅 프로필 모달 실행
	const onShowChatProfileModal = useCallback((): void => {
		setShowChatProfileModal(true);
	}, []);

	const onCloseModal = useCallback((e: globalThis.MouseEvent) => {
		if (!modalRef.current?.contains(e.target as Node)) {
			setShowChatProfileModal(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('click', onCloseModal);

		return () => {
			document.removeEventListener('click', onCloseModal);
		};
	}, []);

	useEffect(() => {
		if (textareaRef.current) {
			autosize(textareaRef.current);
		}
	}, [textareaRef.current]);

	return (
		<ChatWrapper isSameSender={isSameSender} ref={modalRef} onClick={onClickChatItem}>
			<ChatProfileImageWrapper isSameSender={isSameSender} ref={modalRef} onClick={onShowChatProfileModal}>
				<ProfileImage
					width="40px"
					height="40px"
					profileImage={uploadImage}
					profileColor={profileColor}
					userName={name}
				/>
			</ChatProfileImageWrapper>
			<ChatContentWrapper>
				<ChatUserInfoWrapper isSameSender={isSameSender}>
					<ChatUserId>{name}</ChatUserId>
					<ChatCreatedAt>{dayjs(data.createdAt).format('A h:mm')}</ChatCreatedAt>
				</ChatUserInfoWrapper>
				<ChatContent isSameSender={isSameSender}>
					{showChatEditForm ? (
						<div>
							<ChatEditTextArea
								value={editChat}
								onChange={onChangeChat}
								ref={textareaRef}
								onKeyPress={e => e.key === 'Enter' && onChatEditEnter()}
								onBlur={onChatEditEnter}
							/>
							<ChatEditButtonWrapper>
								<button onClick={onChatEditCancel}>취소</button>
								<button onClick={onChatEditButton}>저장</button>
							</ChatEditButtonWrapper>
						</div>
					) : (
						<>
							{data.uploadImage && (
								<ProfileImage
									width="400px"
									height="100%"
									profileImage={data.uploadImage}
									userName={name}
									radius={'0'}
								/>
							)}
							{data.text && <>{data.text}</>}
						</>
					)}
				</ChatContent>
			</ChatContentWrapper>
			{profileInfo.email === email ? (
				<ChatUpdateModal>
					<ChatEditbutton onClick={() => setShowChatEditForm(prev => !prev)} />
					<ChatDeleteButton onClick={() => setShowChatDeleteAlert(true)} />
				</ChatUpdateModal>
			) : null}
			<ChatNowDateHover isSameSender={isSameSender}>{dayjs(data.createdAt).format('A h:mm')}</ChatNowDateHover>
			{showChatDeleteAlert && (
				<DeleteAlert
					data={data}
					setShowChatDeleteAlert={setShowChatDeleteAlert}
					onChatDeleteButton={onChatDeleteButton}
				/>
			)}
			{showChatProfileModal && (
				<ChatItemProfileModal chatLocation={chatLocation}>
					<ChatProfileModal data={data} />
				</ChatItemProfileModal>
			)}
		</ChatWrapper>
	);
};

export default memo(ChatItem);
