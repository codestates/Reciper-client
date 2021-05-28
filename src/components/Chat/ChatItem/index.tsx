import React, { Dispatch, memo, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import ProfileImage from '../../Common/ProfileImage';
import ChatProfileModal from '../ChatProfileModal';
import DeleteAlert from '../DeleteAlert';
import useSocket from '../../../hooks/useSocket';
import useInput from '../../../hooks/useInput';
import { getProfileInfoSelector } from '../../../reducer/profile';
import { getChatDeleteData, getChatEditData, newChatData } from '../ChatSocketData/sockekData';

import dayjs from 'dayjs';
import autosize from 'autosize';
import { useHistory, useParams } from 'react-router';
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
	ChatItemProfileModalWrapper,
	ChatNowDateHover,
	ChatProfileImageWrapper,
	ChatUpdateModal,
	ChatUserId,
	ChatUserInfoWrapper,
	ChatWrapper,
} from './styles';

import { ChatDataType, ChatUpdateDataType } from '../../../types/types';

interface Props {
	data: ChatDataType;
	chatBucket: ChatDataType[];
	setChatBucket: Dispatch<SetStateAction<ChatDataType[]>>;
	isSameSender: boolean;
	index: number;
}

const ChatItem = ({ data, chatBucket, setChatBucket, isSameSender, index }: Props): JSX.Element => {
	const profileInfo = useSelector(getProfileInfoSelector);
	const { projectUrl, part: room } = useParams<{ projectUrl: string; part: string }>();
	const history = useHistory();
	const currentAddress = history.location.pathname.split('/')[3];
	const [socket] = useSocket(projectUrl, currentAddress);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const [showChatProfileModal, setShowChatProfileModal] = useState<boolean>(false);
	const [showChatDeleteAlert, setShowChatDeleteAlert] = useState<boolean>(false);
	const [showChatEditForm, setShowChatEditForm] = useState<boolean>(false);
	const [editChat, onChangeChat, setEditChat] = useInput<string>(data.text);

	const { uploadImage, profileColor, name } = data.writer;
	let date = dayjs(data.createdAt);
	date = date.add(9, 'hour');

	useEffect(() => {
		if (textareaRef.current) {
			autosize(textareaRef.current);
		}
	}, [textareaRef.current]);

	// TODO: 채팅 프로필 모달
	const onShowChatProfileModal = useCallback(e => {
		e.preventDefault();
		e.stopPropagation();
		setShowChatProfileModal(prev => !prev);
	}, []);

	// TODO: 채팅 수정 엔터
	const onChatEditEnter = useCallback((): void => {
		if (editChat.trim() === '') {
			return;
		}

		if (data.id) {
			const getChatEdit: ChatUpdateDataType = getChatEditData(room, index, data.id, editChat);
			const newChat: ChatDataType = newChatData(editChat, room, profileInfo);

			const copyChatBucket = [...chatBucket];
			copyChatBucket[index + 1] = newChat;
			setChatBucket([...copyChatBucket]);

			socket?.emit('editMessage', getChatEdit);
			setShowChatEditForm(false);
		}
	}, [editChat]);

	// TODO: 채팅 수정 버튼
	const onChatEditButton = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
			e.preventDefault();
			e.stopPropagation();

			if (editChat.trim() === '') {
				return;
			}
			if (data.id) {
				const getChatEdit: ChatUpdateDataType = getChatEditData(room, index, data.id, editChat);
				const newChat: ChatDataType = newChatData(editChat, room, profileInfo);

				const copyChatBucket = [...chatBucket];
				copyChatBucket[index + 1] = newChat;
				setChatBucket([...copyChatBucket]);

				socket?.emit('editMessage', getChatEdit);
				setShowChatEditForm(false);
			}
		},
		[editChat],
	);

	// TODO: 채팅 수정 실행 취소
	const onChatEditCancel = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		e.preventDefault();
		setEditChat(data.text);
		setShowChatEditForm(false);
	}, []);

	// TODO: 채팅 삭제 버튼
	const onChatDeleteButton = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
			e.preventDefault();
			e.stopPropagation();
			setShowChatDeleteAlert(false);

			if (data.id) {
				const getChatDelete = getChatDeleteData(room, index, data.id);
				const copyChatBucket = [...chatBucket];
				copyChatBucket.splice(index + 1, 1);
				setChatBucket([...copyChatBucket]);
				socket?.emit('deleteMessage', getChatDelete);
			}
		},
		[chatBucket],
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
			<ChatContentWrapper>
				<ChatUserInfoWrapper isSameSender={isSameSender}>
					<ChatUserId>{name}</ChatUserId>
					<ChatCreatedAt>{dayjs(date).format('A h:mm')}</ChatCreatedAt>
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
						<>{data.text}</>
					)}
				</ChatContent>
			</ChatContentWrapper>
			<ChatUpdateModal>
				<ChatEditbutton onClick={() => setShowChatEditForm(true)} />
				<ChatDeleteButton onClick={() => setShowChatDeleteAlert(true)} />
			</ChatUpdateModal>
			<ChatNowDateHover isSameSender={isSameSender}>{dayjs(date).format('A h:mm')}</ChatNowDateHover>
			{showChatDeleteAlert && (
				<DeleteAlert
					data={data}
					setShowChatDeleteAlert={setShowChatDeleteAlert}
					onChatDeleteButton={onChatDeleteButton}
				/>
			)}
			{showChatProfileModal && (
				<ChatItemProfileModalWrapper onClick={onShowChatProfileModal}>
					<ChatItemProfileModal>
						<ChatProfileModal data={data} />
					</ChatItemProfileModal>
				</ChatItemProfileModalWrapper>
			)}
		</ChatWrapper>
	);
};

export default memo(ChatItem);
