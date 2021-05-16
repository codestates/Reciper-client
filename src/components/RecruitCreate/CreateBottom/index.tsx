import React, { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react';
import { RawDraftContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../styles/react-draft-wysiwyg-custom.css';

import useInput from '../../../hooks/useInput';
import { recruitCreateBottomDataType } from '../../../types/types';

import Input from '../../Common/Input';

import { CreateSection, CreateSubGuideTitle } from '../CreateContainer/styles';
import { CreatBottomContainer } from './styles';
import { changeImage, clickUploadImage } from '../../../utils/imageUpload';

interface Props {
	setBottomMockData: Dispatch<SetStateAction<recruitCreateBottomDataType>>;
}

const CreateBottom = ({ setBottomMockData }: Props): JSX.Element => {
	const imageInput = useRef<HTMLInputElement>(null);
	const [detailTitle, onChangeDetailTitle] = useInput<string>('');
	const [detailDesc, setDetailDesc] = useState<string>('');
	const [image, setImage] = useState<string>('');

	console.log(image);

	useEffect(() => {
		setBottomMockData({ detailTitle, detailDesc });
	}, [detailTitle, detailDesc]);

	const tt = (contentState: RawDraftContentState) => {
		const stateToHtml: string = draftToHtml(contentState);

		setDetailDesc(stateToHtml);
	};

	return (
		<CreatBottomContainer>
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
				{/* <div onClick={() => clickUploadImage(imageInput)}>123123123</div>
				<form encType="multipart/form-data">
					<input
						type="file"
						accept="image/jpg,image/png,/image/jpeg"
						name="file"
						hidden
						onChange={e => changeImage(e, `/recruitBoard`, setImage)}
						ref={imageInput}
					/>
				</form> */}
			</CreateSection>
			<CreateSection>
				<CreateSubGuideTitle>레시피 소개 글</CreateSubGuideTitle>
				<Editor onChange={tt} />
			</CreateSection>
		</CreatBottomContainer>
	);
};

export default CreateBottom;
