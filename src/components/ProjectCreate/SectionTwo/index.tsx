import React, { KeyboardEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import useInput from '../../../hooks/useInput';
import { projectCreateDataType } from '../../../types/types';
import Button from '../../Common/Button';
import {
	CreateSubTitle,
	CreateTitle,
	InviteInput,
	InviteItem,
	SectionBtnWrap,
	SectionConianer,
	InviteItemDeleteBtn,
	InfoMessage,
	InviteEmailList,
} from '../CreateContaniner/styles';

interface Props {
	projectInfo: projectCreateDataType;
}

const SectionTwo = ({ projectInfo }: Props): JSX.Element => {
	const history = useHistory();
	const inviteInputRef = useRef(null);
	const [inviteEmail, onChangeInviteEmail, setInviteEmail] = useInput<string>('');
	const [inviteList, setInviteList] = useState<string[]>([]);
	const [emailValidation, setEmailValidation] = useState<boolean>(true);

	const onAddInviteList = (e: KeyboardEvent): void => {
		if (e.key === 'Enter') {
			const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
			const emailCheck = regExp.test(inviteEmail);

			setEmailValidation(emailCheck);

			if (emailCheck) {
				const duplcateCheck = inviteList.indexOf(inviteEmail) + 1; // 배열에 찾는 값이 없을 경우 -1이 반환되기 때문에 1을 더해줌

				if (duplcateCheck) {
					return;
				}

				setInviteEmail('');
				setInviteList([...inviteList, inviteEmail]);
			}
		}
	};

	const onDeleteInviteList = (index: number): void => {
		const deleteInviteList = [...inviteList];

		deleteInviteList.splice(index, 1);

		setInviteList(deleteInviteList);
	};

	const requsetCreateProject = async () => {
		console.log(projectInfo);
		console.log(inviteList);
	};

	return (
		<SectionConianer>
			<CreateTitle>당신의 팀원을 레시피에 초대해보세요</CreateTitle>
			<CreateSubTitle>초대하실 팀원의 이메일을 작성하세요.</CreateSubTitle>
			<InviteInput
				value={inviteEmail}
				placeholder="팀원의 이메일을 입력 후 Enter를 누르세요."
				ref={inviteInputRef}
				onKeyPress={onAddInviteList}
				onChange={onChangeInviteEmail}
			/>
			{!emailValidation && <InfoMessage> 올바른 이메일 형식으로 작성해주세요.</InfoMessage>}

			<InviteEmailList>
				{inviteList.map((item, index) => (
					<InviteItem key={index}>
						{item}
						<InviteItemDeleteBtn onClick={() => onDeleteInviteList(index)} />
					</InviteItem>
				))}
			</InviteEmailList>

			<SectionBtnWrap>
				<Button size="medium" buttonType="cancel" clickEvent={() => history.goBack()}>
					취소
				</Button>
				<Button size="large" margin="0 0 0 20px;" clickEvent={requsetCreateProject}>
					초대 및 레시피 생성
				</Button>
			</SectionBtnWrap>
		</SectionConianer>
	);
};

export default SectionTwo;
