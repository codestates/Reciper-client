import React, { KeyboardEvent, useCallback, useState } from 'react';
import { useParams } from 'react-router';

import Button from '../../Button';
import Input from '../../Input';

import useInput from '../../../../hooks/useInput';
import { axiosRequest } from '../../../../utils/axios';
import { emailValid } from '../../../../utils/validations';

import { InviteItem } from '../../../ProjectCreate/CreateContaniner/styles';
import {
	DeleteInviteItem,
	InviteItemEmail,
	InviteMemberWrap,
	Title,
	InfoText,
	InviteList,
	InviteBtnWrap,
	SuccessText,
	StateMessage,
} from './styles';

const InviteMemner = (): JSX.Element => {
	const { projectUrl } = useParams<{ projectUrl: string }>();
	const [inviteEmail, onChangeInviteEmail, setInviteEmial] = useInput<string>('');
	const [inviteList, setInviteList] = useState<string[]>([]);
	const [successMessage, setSuccessMessage] = useState<boolean>(false);
	const [emailValidation, setEmailValidation] = useState<boolean>(true);
	const [duplcate, setDuplcateCheck] = useState<boolean>(true);

	const onAddMember = useCallback(
		(e: KeyboardEvent): void => {
			if (e.key === 'Enter') {
				const emailCheck = emailValid(inviteEmail);

				setSuccessMessage(false);
				setEmailValidation(emailCheck);

				if (emailCheck) {
					const duplcateCheck = inviteList.indexOf(inviteEmail) + 1;

					if (duplcateCheck) {
						setDuplcateCheck(false);
						return;
					}

					setInviteEmial('');
					setInviteList([...inviteList, inviteEmail]);
					setSuccessMessage(false);
				}
			}
		},
		[inviteEmail, inviteList],
	);

	const onDeleteInviteItem = useCallback(
		(index: number): void => {
			const newInviteList = [...inviteList];
			newInviteList.splice(index, 1);

			setInviteList(newInviteList);
		},
		[inviteList],
	);

	const onInvite = useCallback(async () => {
		if (inviteList.length === 0) {
			return;
		}

		const reponse = await axiosRequest('post', `/projectInvite/${projectUrl}`, { inviteList });

		if (reponse) {
			setInviteList([]);
			setSuccessMessage(true);
			setDuplcateCheck(true);
		}
	}, [inviteList]);

	return (
		<InviteMemberWrap>
			<Title>새로운 팀원 초대하기</Title>
			<InfoText>초대하실 팀원의 이메일을 작성하세요.</InfoText>
			<Input
				width="long"
				height="long"
				initValue={inviteEmail}
				placeholderText="팀원의 이메일을 입력하시고 Enter를 누르세요"
				changeEvent={onChangeInviteEmail}
				keyEvent={onAddMember}
			/>
			<StateMessage>
				{!emailValidation && '올바른 이메일 형식으로 작성해주세요'}
				{!duplcate && '이미 작성 된 이메일 입니다.'}
				{successMessage && <SuccessText>초대 이메일이 발송 되었습니다.</SuccessText>}
			</StateMessage>
			<InviteList>
				{inviteList.map((email, index) => (
					<InviteItem key={index}>
						<InviteItemEmail>{email}</InviteItemEmail>
						<DeleteInviteItem onClick={() => onDeleteInviteItem(index)} />
					</InviteItem>
				))}
			</InviteList>

			<InviteBtnWrap>
				<Button size="medium" clickEvent={onInvite}>
					초대하기
				</Button>
			</InviteBtnWrap>
		</InviteMemberWrap>
	);
};

export default InviteMemner;
