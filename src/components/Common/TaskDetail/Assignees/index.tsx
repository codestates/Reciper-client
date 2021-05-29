import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

import AssigneesModal from '../AssigneesModal';
import ProfileImage from '../../ProfileImage';

import { RecruitWriterDataType } from '../../../../types/types';

import { AddMemberBtn, AssigneesWrap, MemberWrap, Title } from './styles';

interface Props {
	members: RecruitWriterDataType[];
	selectedMember: RecruitWriterDataType[];
	setSelectedMember: Dispatch<SetStateAction<RecruitWriterDataType[]>>;
}

const Assignees = ({ members, selectedMember, setSelectedMember }: Props): JSX.Element => {
	const [openModal, setOpenModal] = useState<boolean>(false);

	const onOpenModal = useCallback(() => {
		setOpenModal(openModal => !openModal);
	}, [openModal]);

	return (
		<AssigneesWrap>
			<Title>참여</Title>
			<MemberWrap>
				<AddMemberBtn onClick={onOpenModal}>+</AddMemberBtn>
				{selectedMember.map((member, index) => (
					<ProfileImage
						key={index}
						width="25px"
						height="25px"
						margin={index ? '0 0 0 -12px' : '0'}
						userNameSize="14px"
						profileImage={member.uploadImage}
						profileColor={member.profileColor}
						userName={member.name}
					/>
				))}
				{openModal && (
					<AssigneesModal
						members={members}
						setOpenModal={setOpenModal}
						setSelectedMember={setSelectedMember}
						selectedMember={selectedMember}
					/>
				)}
			</MemberWrap>
		</AssigneesWrap>
	);
};

export default Assignees;
