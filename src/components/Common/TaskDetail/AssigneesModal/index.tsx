import React, { Dispatch, MouseEvent, SetStateAction, useCallback, useEffect, useRef } from 'react';

import ProfileImage from '../../ProfileImage';

import { RecruitWriterDataType } from '../../../../types/types';

import { MemberCheck, MemberInfo, MemberItem, MemberName, ModalWrap } from './styles';

interface Props {
	members: RecruitWriterDataType[];
	setOpenModal: Dispatch<SetStateAction<boolean>>;
	selectedMember: RecruitWriterDataType[];
	setSelectedMember: Dispatch<SetStateAction<RecruitWriterDataType[]>>;
}

const AssigneesModal = ({ members, setOpenModal, selectedMember, setSelectedMember }: Props): JSX.Element => {
	const modalWrap = useRef<HTMLDivElement>(null);

	const onCloseModal = useCallback((e: globalThis.MouseEvent): void => {
		if (!modalWrap.current?.contains(e.target as Node)) {
			setOpenModal(false);
		}
	}, []);

	const onSelectedMember = useCallback(
		(e: MouseEvent, member: RecruitWriterDataType) => {
			const isSelected = e.currentTarget.classList.contains('selected');
			const memberDuplicate = selectedMember.indexOf(member);

			if (memberDuplicate === -1) {
				setSelectedMember([member, ...selectedMember]);
			} else {
				const selectedMemberCopy = [...selectedMember];
				selectedMemberCopy.splice(memberDuplicate, 1);

				setSelectedMember(selectedMemberCopy);
			}

			if (isSelected) {
				e.currentTarget.classList.remove('selected');
			} else {
				e.currentTarget.classList.add('selected');
			}
		},
		[selectedMember],
	);

	useEffect(() => {
		// 모달 창 외의 요소를 클릭 시 닫힘
		document.addEventListener('click', onCloseModal);
		return () => {
			document.removeEventListener('click', onCloseModal);
		};
	}, []);

	return (
		<ModalWrap ref={modalWrap}>
			{members.map((member, index) => {
				const isSelected = selectedMember.filter(seleted => seleted.name === member.name);

				return (
					<MemberItem
						key={index}
						className={isSelected[0] ? 'selected' : ''}
						onClick={e => onSelectedMember(e, member)}
					>
						<MemberInfo>
							<ProfileImage
								width="25px"
								height="25px"
								margin="0 10px 0 0"
								userNameSize="14px"
								profileImage={member.uploadImage}
								profileColor={member.profileColor}
								userName={member.name}
							/>
							<MemberName>{member.name}</MemberName>
						</MemberInfo>
						<MemberCheck />
					</MemberItem>
				);
			})}
		</ModalWrap>
	);
};

export default AssigneesModal;
