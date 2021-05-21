import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import Button from '../Common/Button';
import Input from '../Common/Input';

import useInput from '../../hooks/useInput';
import { axiosRequest } from '../../utils/axios';

import { projectCreateDataType, projectListDataTpye } from '../../types/types';

import { Container, InfoMessage, Inner } from '../ProjectCreate/CreateContaniner/styles';
import { EditSubTitle, EditTitle, EditUrlWrap, ProjectDeleteBtn, ProjectImage, EditBtnWrap, EditUrl } from './styles';

const EditContainer = (): JSX.Element => {
	const history = useHistory();
	const { projectUrl } = useParams<{ projectUrl: string }>();
	const [name, onChangeName, setName] = useInput<string>('');
	const [projectURL, onChangeProjectURL, setProjectURL] = useInput<string>('');
	const [projectData, setProjectData] = useState<projectListDataTpye>();
	const [projectInfo, setProjectInfo] = useState<projectCreateDataType>();
	const [nameValidation, setNameValidation] = useState<boolean>(true);
	const [urlValidation, setUrlValidation] = useState<boolean>(true);
	const [urlDuplicate, setUrlDuplicate] = useState<boolean>(false);

	const getProjectData = useCallback(async () => {
		const response: projectListDataTpye | void = await axiosRequest('get', `/project/${projectUrl}`);

		if (response) {
			setProjectData(response);
			setName(response.name);
			setProjectURL(response.projectURL);
		}
	}, []);

	useEffect(() => {
		getProjectData();
	}, []);

	useEffect(() => {
		setProjectInfo({ name, projectURL });
	}, [name, projectURL]);

	const onEditProject = useCallback(async () => {
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
			const response = await axiosRequest('post', `/project/${projectUrl}`, projectInfo);

			if (!!response) {
				history.push('/project');
			} else {
				setUrlDuplicate(true);
			}
		}
	}, [name, projectURL, projectInfo]);

	const onDeleteProject = useCallback(async () => {
		await axiosRequest('delete', `/project/${projectUrl}`);
		history.push('/project');
	}, [projectInfo]);

	return (
		<Container>
			{projectData && (
				<Inner>
					<EditTitle>레시피 설정</EditTitle>
					<ProjectImage style={{ backgroundColor: `${projectData.projectColor}` }}>{projectData.name[0]}</ProjectImage>
					<EditSubTitle>레시피 이름</EditSubTitle>
					<Input
						width="long"
						height="long"
						initValue={name}
						placeholderText="레시피 이름을 적어주세요"
						changeEvent={onChangeName}
					/>
					<InfoMessage>{!nameValidation && '레시피의 이름은 15자 이하의 문자여야 합니다.'}</InfoMessage>

					<EditSubTitle>레시피 URL을 입력하세요.</EditSubTitle>
					<EditUrlWrap>
						<EditUrl>reciper.me/</EditUrl>
						<Input
							width="long"
							height="long"
							initValue={projectURL}
							placeholderText="레시피 이름을 적어주세요"
							changeEvent={onChangeProjectURL}
						/>
					</EditUrlWrap>
					<InfoMessage style={{ marginLeft: '117px' }}>
						{!urlValidation && 'URL은 특수문자와 공백을 제외한 4 ~ 20자 사이의 문자여야 합니다.'}
						{urlDuplicate && '해당 URL은 이미 존재하는 URL입니다.'}
					</InfoMessage>

					<ProjectDeleteBtn onClick={onDeleteProject}>레시피 삭제</ProjectDeleteBtn>
					<EditBtnWrap>
						<Button size="medium" buttonType="cancel" clickEvent={() => history.push('/project')}>
							취소
						</Button>
						<Button size="medium" margin="0 0 0 20px;" clickEvent={onEditProject}>
							확인
						</Button>
					</EditBtnWrap>
				</Inner>
			)}
		</Container>
	);
};

export default EditContainer;
