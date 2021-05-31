import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import Button from '../../Common/Button';
import Input from '../../Common/Input';

import useInput from '../../../hooks/useInput';
import { axiosRequest } from '../../../utils/axios';
import sequentialEvent from '../../../utils/sequentialEvent';
import { projectNameValid, projectUrlValid } from '../../../utils/validations';

import { projectCreateDataType } from '../../../types/types';

import {
	CreateInputWrap,
	CreateSubTitle,
	CreateTitle,
	CreateUrl,
	CreateUrlWrap,
	InfoMessage,
	SectionBtnWrap,
	SectionConianer,
} from '../CreateContaniner/styles';

interface Props {
	projectURL: string;
	onChangeProjectURL: (e: ChangeEvent<HTMLInputElement>) => void;
	setChapter: Dispatch<SetStateAction<boolean>>;
}

const SectionOne = ({ projectURL, onChangeProjectURL, setChapter }: Props): JSX.Element => {
	const history = useHistory();
	const sectionRef = useRef<HTMLDivElement>(null);
	const [name, onChangeName] = useInput<string>('');
	const [urlDuplicate, setUrlDuplicate] = useState<boolean>(false);
	const [nameValidation, setNameValidation] = useState<boolean>(true);
	const [urlValidation, setUrlValidation] = useState<boolean>(true);
	const [projectInfo, setProjectInfo] = useState<projectCreateDataType>({
		name,
		projectURL,
	});

	useEffect(() => {
		if (sectionRef.current) {
			sequentialEvent(sectionRef.current, 'on', 100);
		}
	}, []);

	useEffect(() => {
		setProjectInfo({ name, projectURL });
	}, [name, projectURL]);

	const onNextStep = useCallback(async () => {
		const nameCheck = projectNameValid(name);
		const urlCheck = projectUrlValid(projectURL);

		setNameValidation(nameCheck);
		setUrlValidation(urlCheck);

		if (name && projectURL && nameCheck && urlCheck) {
			const response = await axiosRequest('post', `/project`, projectInfo);

			if (!!response) {
				setChapter(false);
			} else {
				setUrlDuplicate(true);
			}
		}
	}, [name, projectURL, projectInfo]);

	return (
		<SectionConianer ref={sectionRef}>
			<CreateTitle>당신의 레시피를 만들어보세요</CreateTitle>
			<CreateSubTitle>당신의 레시피 이름을 무엇으로 정하고 싶습니까?</CreateSubTitle>
			<CreateInputWrap>
				<Input width="long" height="long" placeholderText="레시피 이름을 적어주세요" changeEvent={onChangeName} />
			</CreateInputWrap>
			<InfoMessage>{!nameValidation && '레시피의 이름은 15자 이하의 문자여야 합니다.'}</InfoMessage>

			<CreateSubTitle>레시피의 URL을 입력하세요.</CreateSubTitle>
			<CreateUrlWrap>
				<CreateUrl>reciper.me/</CreateUrl>
				<Input width="long" height="long" placeholderText="레시피 이름을 적어주세요" changeEvent={onChangeProjectURL} />
			</CreateUrlWrap>
			<InfoMessage style={{ marginLeft: '117px' }}>
				{!urlValidation && 'URL은 한글, 특수문자, 공백을 제외한 4 ~ 20자 사이의 문자여야 합니다.'}
				{urlDuplicate && '해당 URL은 이미 존재하는 URL입니다.'}
				{}
			</InfoMessage>

			<SectionBtnWrap>
				<Button size="medium" buttonType="cancel" clickEvent={() => history.push('/project')}>
					취소
				</Button>
				<Button size="medium" margin="0 0 0 20px;" clickEvent={onNextStep}>
					생성
				</Button>
			</SectionBtnWrap>
		</SectionConianer>
	);
};

export default SectionOne;
