import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import Button from '../Common/Button';
import Input from '../Common/Input';

import useInput from '../../hooks/useInput';
import { axiosRequest } from '../../utils/axios';

import { projectCreateDataType, projectListDataTpye } from '../../types/types';

import { Container, Inner } from '../ProjectCreate/CreateContaniner/styles';
import { EditSubTitle, EditTitle, EditUrlWrap, ProjectDeleteBtn, ProjectImage, EditBtnWrap, EditUrl } from './styles';

const EditContainer = (): JSX.Element => {
	const history = useHistory();
	const { projectUrl } = useParams<{ projectUrl: string }>();
	const [name, onChangeName, setName] = useInput<string>('');
	const [projectURL, onChangeProjectURL, setProjectURL] = useInput<string>('');
	const [projectData, setProjectData] = useState<projectListDataTpye>();
	const [projectInfo, setProjectInfo] = useState<projectCreateDataType>();

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
		await axiosRequest('post', `/project/${projectUrl}`, projectInfo);
		history.push('/project');
	}, [projectInfo]);

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
