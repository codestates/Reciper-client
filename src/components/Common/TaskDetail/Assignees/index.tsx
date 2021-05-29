import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import AssigneesModal from '../AssigneesModal';
import ProfileImage from '../../ProfileImage';

import { projectInfoSelector } from '../../../../reducer/projectInfo';
import { projectInfoDataType, RecruitWriterDataType } from '../../../../types/types';

import { AddMemberBtn, AssigneesWrap, MemberWrap, Title } from './styles';

interface Props {
	selectedMember: RecruitWriterDataType[];
	setSelectedMember: Dispatch<SetStateAction<RecruitWriterDataType[]>>;
}

const Assignees = ({ selectedMember, setSelectedMember }: Props): JSX.Element => {
	const { members }: projectInfoDataType = useSelector(projectInfoSelector);
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
			</MemberWrap>
			{openModal && (
				<AssigneesModal
					members={members}
					setOpenModal={setOpenModal}
					setSelectedMember={setSelectedMember}
					selectedMember={selectedMember}
				/>
			)}
		</AssigneesWrap>
	);
};

export default Assignees;
