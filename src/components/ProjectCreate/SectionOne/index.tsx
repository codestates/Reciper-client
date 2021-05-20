import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import Button from '../../Common/Button';
import Input from '../../Common/Input';

import useInput from '../../../hooks/useInput';
import { axiosRequest } from '../../../utils/axios';
import sequentialEvent from '../../../utils/sequentialEvent';

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
			const a = await axiosRequest('post', `/project`, projectInfo);
			console.log(a);
			setChapter(false);
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
			<InfoMessage style={{ marginLeft: '120px' }}>
				{!urlValidation && 'URL은 특수문자와 공백을 제외한 4 ~ 20자 사이의 문자여야 합니다.'}
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
