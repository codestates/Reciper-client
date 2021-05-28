import React, { SetStateAction } from 'react';
import Button from '../../Common/Button';
import Modal from '../../Common/Modal';
import ProfileImage from '../../Common/ProfileImage';

import dayjs from 'dayjs';

import {
	AlertButtonWrapper,
	AlertChatContent,
	AlertChatDeleteButton,
	AlertChatItem,
	AlertChatItemUserInfoWrapper,
	ChatDeleteAlert,
} from './styles';
import { ChatCreatedAt, ChatUserId } from '../ChatItem/styles';

import { ChatDataType } from '../../../types/types';

interface Props {
	data: ChatDataType;
	setShowChatDeleteAlert: React.Dispatch<SetStateAction<boolean>>;
	onChatDeleteButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DeleteAlert = ({ data, setShowChatDeleteAlert, onChatDeleteButton }: Props): JSX.Element => {
	const { uploadImage, profileColor, name } = data.writer;
	let date = dayjs(data.createdAt);
	date = date.add(9, 'hour');

	return (
		<>
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
		</>
	);
};

export default DeleteAlert;
