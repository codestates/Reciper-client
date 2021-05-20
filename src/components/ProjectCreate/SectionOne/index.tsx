import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useInput from '../../../hooks/useInput';
import { projectCreateDataType } from '../../../types/types';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import {
	CreateSubTitle,
	CreateTitle,
	CreateUrl,
	CreateUrlWrap,
	InfoMessage,
	SectionBtnWrap,
	SectionConianer,
} from '../CreateContaniner/styles';

interface Props {
	setChapter: Dispatch<SetStateAction<boolean>>;
	setProjectInfo: Dispatch<SetStateAction<projectCreateDataType>>;
}

const SectionOne = ({ setChapter, setProjectInfo }: Props): JSX.Element => {
	const history = useHistory();
	const [name, onChangeName] = useInput<string>('');
	const [projectURL, onChangeProjectURL] = useInput<string>('');
	const [nameValidation, setNameValidation] = useState<boolean>(true);
	const [urlValidation, setUrlValidation] = useState<boolean>(true);

	const onNextStep = useCallback(() => {
		const space_pattern = /\s/;
		const special_pattern = /[`~!@#$%^&*|\\\'\";:+_\/?]/gi;

		const nameCheck = !!name && name.length <= 15;
		const urlCheck =
			projectURL.length >= 4 &&
			projectURL.length <= 15 &&
			!special_pattern.test(projectURL) &&
			projectURL.search(space_pattern) === -1;

		setNameValidation(nameCheck);
		setUrlValidation(urlCheck);

		if (name && projectURL && nameCheck && urlCheck) {
			setChapter(false);
			setProjectInfo({ name, projectURL });
		}
	}, [name, projectURL]);

	return (
		<SectionConianer>
			<CreateTitle>당신의 레시피를 만들어보세요</CreateTitle>
			<CreateSubTitle>당신의 레시피 이름을 무엇으로 정하고 싶습니까?</CreateSubTitle>
			<Input width="long" height="long" placeholderText="레시피 이름을 적어주세요" changeEvent={onChangeName} />
			<InfoMessage>{!nameValidation && '레시피의 이름은 15자 이하의 문자여야 합니다.'}</InfoMessage>

			<CreateSubTitle>레시피의 URL을 입력하세요.</CreateSubTitle>
			<CreateUrlWrap>
				<CreateUrl>reciper.me/</CreateUrl>
				<Input width="long" height="long" placeholderText="레시피 이름을 적어주세요" changeEvent={onChangeProjectURL} />
			</CreateUrlWrap>
			<InfoMessage style={{ marginLeft: '120px' }}>
				{!urlValidation && 'URL은 특수문자와 공백을 제외한 4 ~ 20자 사이의 문자여야 합니다.'}
			</InfoMessage>

			<SectionBtnWrap>
				<Button size="medium" buttonType="cancel" clickEvent={() => history.goBack()}>
					취소
				</Button>
				<Button size="medium" margin="0 0 0 20px;" clickEvent={onNextStep}>
					다음
				</Button>
			</SectionBtnWrap>
		</SectionConianer>
	);
};

export default SectionOne;
