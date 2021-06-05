import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RawDraftContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useDispatch } from 'react-redux';
import draftToHtml from 'draftjs-to-html';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../styles/react-draft-wysiwyg-custom.css';

import Input from '../../Common/Input';

import useInput from '../../../hooks/useInput';

import { changeImage, clickUploadImage } from '../../../utils/imageUpload';

import { writingAction } from '../../../reducer/recruitCreate';

import { CreateSection, CreateSubGuideTitle } from '../CreateContainer/styles';
import { CreatBottomContainer, CreateImageUpload, CreateImageWrap } from './styles';

const randomBasicImage = (): string => {
	const random = Math.floor(Math.random() * 34 + 1);
	return `basic_img_${random}.png`;
};

const CreateBottom = (): JSX.Element => {
	const dispatch = useDispatch();
	const imageInput = useRef<HTMLInputElement>(null);
	const [detailTitle, onChangeDetailTitle] = useInput<string>('');
	const [detailDesc, setDetailDesc] = useState<string>('');
	const [uploadImage, setUploadImage] = useState<string>(randomBasicImage());

	const onEditorValue = useCallback((contentState: RawDraftContentState) => {
		const stateToHtml: string = draftToHtml(contentState);

		setDetailDesc(stateToHtml);
	}, []);

	useEffect(() => {
		dispatch(writingAction({ detailTitle }));
	}, [detailTitle]);

	useEffect(() => {
		dispatch(writingAction({ detailDesc }));
	}, [detailDesc]);

	useEffect(() => {
		dispatch(writingAction({ uploadImage }));
	}, [uploadImage]);

	return (
		<CreatBottomContainer>
			<CreateSection>
				<CreateSubGuideTitle>레시피 썸네일 이미지</CreateSubGuideTitle>
				<CreateImageWrap onClick={() => clickUploadImage(imageInput)}>
					<CreateImageUpload>
						<span>이미지 업로드</span>
					</CreateImageUpload>
					<img src={`${process.env.REACT_APP_SERVER_URL}/images/${uploadImage}`} />
				</CreateImageWrap>
				<form encType="multipart/form-data">
					<input
						type="file"
						accept="image/jpg,image/png,/image/jpeg"
						name="file"
						hidden
						onChange={e => changeImage(e, setUploadImage)}
						ref={imageInput}
					/>
				</form>
			</CreateSection>

			<CreateSection>
				<CreateSubGuideTitle>레시피 소개 제목</CreateSubGuideTitle>
				<Input
					width="long"
					height="long"
					placeholderText="ex) 위치 기반 소셜 플램폼 개발에 참여 할 개발자를 모시고 있습니다."
					changeEvent={onChangeDetailTitle}
				/>
			</CreateSection>

			<CreateSection>
				<CreateSubGuideTitle>레시피 소개 글</CreateSubGuideTitle>
				<Editor onChange={onEditorValue} />
			</CreateSection>
		</CreatBottomContainer>
	);
};

export default CreateBottom;
