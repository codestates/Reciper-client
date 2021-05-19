import React from 'react';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import {
	CreateSubTitle,
	CreateTitle,
	CreateUrl,
	CreateUrlWrap,
	SectionBtnWrap,
	SectionConianer,
} from '../CreateContaniner/styles';

const SectionOne = (): JSX.Element => {
	return (
		<SectionConianer>
			<CreateTitle>당신의 레시피를 만들어보세요</CreateTitle>
			<CreateSubTitle>당신의 레시피 이름을 무엇으로 정하고 싶습니까?</CreateSubTitle>
			<Input
				width="long"
				height="long"
				margin="0 0 30px 0"
				placeholderText="레시피 이름을 적어주세요"
				changeEvent={() => console.log('1')}
			/>
			<CreateSubTitle>레시피의 URL을 입력하세요.</CreateSubTitle>
			<CreateUrlWrap>
				<CreateUrl>reciper.me/</CreateUrl>
				<Input
					width="long"
					height="long"
					placeholderText="레시피 이름을 적어주세요"
					changeEvent={() => console.log('1')}
				/>
			</CreateUrlWrap>
			<SectionBtnWrap>
				<Button size="medium" buttonType="cancel" clickEvent={() => console.log('1')}>
					취소
				</Button>
				<Button size="medium" margin="0 0 0 20px;" clickEvent={() => console.log('1')}>
					다음
				</Button>
			</SectionBtnWrap>
		</SectionConianer>
	);
};

export default SectionOne;
