import React from 'react';
import Button from '../Common/Button';
import Input from '../Common/Input';
import {
	Container,
	CreateSubTitle,
	CreateTitle,
	Inner,
	CreateUrl,
	CreateUrlWrap,
	SectionBtnWrap,
} from '../ProjectCreate/CreateContaniner/styles';
import { ProjectDeleteBtn, ProjectImage } from './styles';

const EditContainer = (): JSX.Element => {
	return (
		<Container>
			<Inner>
				<CreateTitle>레시피 설정</CreateTitle>
				<ProjectImage>T</ProjectImage>
				<CreateSubTitle>레시피 이름</CreateSubTitle>
				<Input
					width="long"
					height="long"
					margin="0 0 30px 0"
					initValue="Reciper"
					placeholderText="레시피 이름을 적어주세요"
					changeEvent={() => console.log('1')}
				/>
				<CreateSubTitle>레시피 URL을 입력하세요.</CreateSubTitle>
				<CreateUrlWrap>
					<CreateUrl>reciper.me/</CreateUrl>
					<Input
						width="long"
						height="long"
						initValue="finalproject"
						placeholderText="레시피 이름을 적어주세요"
						changeEvent={() => console.log('1')}
					/>
				</CreateUrlWrap>
				<ProjectDeleteBtn>레시피 삭제</ProjectDeleteBtn>
				<SectionBtnWrap>
					<Button size="medium" buttonType="cancel" clickEvent={() => console.log('1')}>
						취소
					</Button>
					<Button size="medium" margin="0 0 0 20px;" clickEvent={() => console.log('1')}>
						확인
					</Button>
				</SectionBtnWrap>
			</Inner>
		</Container>
	);
};

export default EditContainer;
