import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSocketData } from '../../../reducer/kanban';
import { projectListDataTpye } from '../../../types/types';
import getLoginInfo from '../../../utils/getLoginInfo';
import { Container } from '../MyInfo/styles';
import ProjectCard from '../ProjectCard';

import { ProjectCardListContainer, ProjectCreateBtn } from './styles';

const ProjectCardList = (): JSX.Element => {
	const dispatch = useDispatch();
	const [projectListData, setProjectListData] = useState<projectListDataTpye[]>([]);

	const getProjectList = async () => {
		const { accessToken, loginType } = getLoginInfo();

		const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/project`, {
			headers: { authorization: `Bearer ${accessToken}`, loginType },
		});

		setProjectListData(response.data.projectList);
	};

	useEffect(() => {
		dispatch(getSocketData({ taskBox: [], taskItems: {} }));
		getProjectList();
	}, []);

	return (
		<Container>
			<ProjectCardListContainer>
				<ProjectCreateBtn to="/project/create">+ 레시피를 추가해보세요</ProjectCreateBtn>
				{projectListData.map((data, index) => (
					<ProjectCard key={index} data={data} />
				))}
			</ProjectCardListContainer>
		</Container>
	);
};

export default ProjectCardList;
