import React from 'react';
import Input from '../../Common/Input';
import { CreateSection, CreateSubGuideTitle } from '../CreateContainer/styles';
import { CreatBottomContainer } from './styles';

const CreateBottom = (): JSX.Element => {
	return (
		<CreatBottomContainer>
			<CreateSection>
				<CreateSubGuideTitle>레시피 소개 제목</CreateSubGuideTitle>
				<Input
					width="long"
					height="long"
					placeholderText="ex) 위치 기반 소셜 플램폼 개발에 참여 할 개발자를 모시고 있습니다."
					changeEvent={() => console.log('')}
				/>
			</CreateSection>
			<CreateSection>
				<CreateSubGuideTitle>레시피 소개 글</CreateSubGuideTitle>
				<textarea />
			</CreateSection>
		</CreatBottomContainer>
	);
};

export default CreateBottom;
