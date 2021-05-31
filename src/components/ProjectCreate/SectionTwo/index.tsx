import React, { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import Button from '../../Common/Button';

import useInput from '../../../hooks/useInput';
import { axiosRequest } from '../../../utils/axios';
import sequentialEvent from '../../../utils/sequentialEvent';

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
	CreateInputWrap,
} from '../CreateContaniner/styles';
import { emailValid } from '../../../utils/validations';

interface Props {
	projectURL: string;
}

const SectionTwo = ({ projectURL }: Props): JSX.Element => {
	const history = useHistory();
	const sectionRef = useRef<HTMLDivElement>(null);
	const inviteInputRef = useRef<HTMLInputElement>(null);
	const [inviteEmail, onChangeInviteEmail, setInviteEmail] = useInput<string>('');
	const [inviteList, setInviteList] = useState<string[]>([]);
	const [emailValidation, setEmailValidation] = useState<boolean>(true);
	const [duplcate, setDuplcateCheck] = useState<boolean>(true);

	const onAddInviteList = useCallback(
		(e: KeyboardEvent): void => {
			if (e.key === 'Enter') {
				const emailCheck = emailValid(inviteEmail);

				setDuplcateCheck(true);
				setEmailValidation(emailCheck);

				if (emailCheck) {
					const duplcateCheck = inviteList.indexOf(inviteEmail) + 1; // 배열에 찾는 값이 없을 경우 -1이 반환되기 때문에 1을 더해줌

					if (duplcateCheck) {
						setDuplcateCheck(false);
						return;
					}

					setInviteEmail('');
					setInviteList([...inviteList, inviteEmail]);
				}
			}
		},
		[inviteList, inviteEmail],
	);

	const onDeleteInviteList = (index: number): void => {
		const deleteInviteList = [...inviteList];

		deleteInviteList.splice(index, 1);

		setInviteList(deleteInviteList);
	};

	const requsetInviteProject = async () => {
		axiosRequest('post', `/projectInvite/${projectURL}`, { inviteList });
		history.push(`/workspace/${projectURL}/chat/General`);
	};

	useEffect(() => {
		if (sectionRef.current) {
			sequentialEvent(sectionRef.current, 'on', 100);
		}
	}, []);

	return (
		<SectionConianer ref={sectionRef}>
			<CreateTitle>당신의 팀원을 레시피에 초대해보세요</CreateTitle>
			<CreateSubTitle>초대하실 팀원의 이메일을 작성하세요.</CreateSubTitle>
			<CreateInputWrap>
				<InviteInput
					value={inviteEmail}
					placeholder="팀원의 이메일을 입력 후 Enter를 누르세요."
					ref={inviteInputRef}
					onKeyPress={onAddInviteList}
					onChange={onChangeInviteEmail}
				/>
				<InfoMessage>
					{!emailValidation && '올바른 이메일 형식으로 작성해주세요.'}
					{!duplcate && '이미 작성 된 이메일 입니다.'}
				</InfoMessage>
			</CreateInputWrap>

			<InviteEmailList>
				{inviteList.map((item, index) => (
					<InviteItem key={index}>
						{item}
						<InviteItemDeleteBtn onClick={() => onDeleteInviteList(index)} />
					</InviteItem>
				))}
			</InviteEmailList>

			<SectionBtnWrap>
				<Button size="medium" buttonType="cancel" clickEvent={() => history.push(`/workspace/${projectURL}`)}>
					나중에 하기
				</Button>
				<Button size="medium" margin="0 0 0 20px;" clickEvent={requsetInviteProject}>
					초대
				</Button>
			</SectionBtnWrap>
		</SectionConianer>
	);
};

export default SectionTwo;
