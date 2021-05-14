import React, { ChangeEvent, Dispatch, SetStateAction, useState, useEffect } from 'react';
import useInput from '../../../hooks/useInput';
import { recruitCreateBottomDataType } from '../../../types/types';
import Input from '../../Common/Input';
import { CreateSection, CreateSubGuideTitle } from '../CreateContainer/styles';
import { CreatBottomContainer } from './styles';

interface Props {
	setBottomMockData: Dispatch<SetStateAction<recruitCreateBottomDataType>>;
}

const CreateBottom = ({ setBottomMockData }: Props): JSX.Element => {
	const [detail_title, onChangeDetail_title] = useInput<string>('');
	const [detail_desc, setDetail_desc] = useState<string>('');

	useEffect(() => {
		setBottomMockData({ detail_title, detail_desc });
	}, [detail_title, detail_desc]);

	return (
		<CreatBottomContainer>
			<CreateSection>
				<CreateSubGuideTitle>레시피 소개 제목</CreateSubGuideTitle>
				<Input
					width="long"
					height="long"
					placeholderText="ex) 위치 기반 소셜 플램폼 개발에 참여 할 개발자를 모시고 있습니다."
					changeEvent={onChangeDetail_title}
				/>
			</CreateSection>
			<CreateSection>
				<CreateSubGuideTitle>레시피 소개 글</CreateSubGuideTitle>
				<textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDetail_desc(e.target.value)} />
			</CreateSection>
		</CreatBottomContainer>
	);
};

export default CreateBottom;
