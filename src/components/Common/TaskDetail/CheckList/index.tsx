import React, { Dispatch, KeyboardEvent, MouseEvent, SetStateAction, useCallback } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import useInput from '../../../../hooks/useInput';
import { taskChackListDataType } from '../../../../types/types';
import { Section, SectionTitle } from '../styles';
import { CheckDeleteBtn, CheckBtn, ContentWrap, CheckListItem, CheckListWrap, CheckListInput } from './styles';

interface Props {
	checkList: taskChackListDataType[];
	setCheckList: Dispatch<SetStateAction<taskChackListDataType[]>>;
}

const CheckList = ({ checkList, setCheckList }: Props): JSX.Element => {
	const [checkListValue, onChangeCheckListValue, setCheckListValue] = useInput<string>('');

	const addCheckList = useCallback((): void => {
		if (checkListValue.trim() === '') {
			return;
		}

		setCheckList([...checkList, { isChecked: false, desc: checkListValue }]);
		setCheckListValue('');
	}, [checkList, checkListValue]);

	const deleteCheckList = useCallback(
		(e, index: number): void => {
			e.stopPropagation();
			const checkListCopy = [...checkList];
			checkListCopy.splice(index, 1);

			setCheckList(checkListCopy);
		},
		[checkList],
	);

	const listChecked = useCallback(
		(index: number): void => {
			const checkListCopy = [...checkList];
			checkListCopy[index] = { ...checkListCopy[index], isChecked: !checkListCopy[index].isChecked };

			setCheckList(checkListCopy);
		},
		[checkList],
	);

	return (
		<Section>
			<SectionTitle>체크리스트</SectionTitle>
			<CheckListInput
				value={checkListValue}
				placeholder="작성 후 Enter를 누르세요"
				onChange={onChangeCheckListValue}
				onKeyPress={(e: KeyboardEvent) => e.key === 'Enter' && addCheckList()}
			/>
			<CheckListWrap>
				{checkList.map((list, index) => (
					<CheckListItem key={index} className={list.isChecked ? 'checked' : ''} onClick={() => listChecked(index)}>
						<ContentWrap>
							<CheckBtn className="checkBtn" />
							<span>{list.desc}</span>
						</ContentWrap>
						<CheckDeleteBtn onClick={(e: MouseEvent) => deleteCheckList(e, index)} />
					</CheckListItem>
				))}
			</CheckListWrap>
		</Section>
	);
};

export default CheckList;
