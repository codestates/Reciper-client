import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import ProfileImage from '../../Common/ProfileImage';
import ChatProfileModal from '../ChatProfileModal';
import Modal from '../../Common/Modal';
import useSocket from '../../../hooks/useSocket';

import dayjs from 'dayjs';
import autosize from 'autosize';
import { useHistory, useParams } from 'react-router';

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

import { ChatDataType } from '../../../types/types';
import Button from '../../Common/Button';
import useInput from '../../../hooks/useInput';

interface Props {
	data: ChatDataType;
	isSameSender: boolean;
}

const ChatItem = ({ data, isSameSender }: Props): JSX.Element => {
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

		const getChatEditData = {
			room: room,
			id: data.id,
			message: editChat,
		};

		socket?.emit('editMessage', getChatEditData);
		setShowChatEditForm(false);
	}, [editChat]);

	// TODO: 채팅 수정 버튼
	const onChatEditButton = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
			e.preventDefault();
			e.stopPropagation();

			if (editChat.trim() === '') {
				return;
			}

			const getChatEditData = {
				room: room,
				id: data.id,
				message: editChat,
			};

			socket?.emit('editMessage', getChatEditData);
			setShowChatEditForm(false);
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

			<div>
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
			</div>
			<ChatUpdateModal>
				<ChatEditbutton onClick={() => setShowChatEditForm(true)} />
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
			{/* showModal={showChatProfileModal} */}
			{showChatProfileModal && (
				// <Modal backgroundColor={false} setShowModal={setShowChatProfileModal}>
				// </Modal>
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
