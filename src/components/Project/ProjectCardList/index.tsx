import React from 'react';
import { Container } from '../MyInfo/styles';
import ProjectCard from '../ProjectCard';

import { ProjectCardListContainer, ProjectCreateBtn } from './styles';

const ProjectCardList = (): JSX.Element => {
	return (
		<Container>
			<ProjectCardListContainer>
				<ProjectCreateBtn to="/">+ 레시피를 추가해보세요</ProjectCreateBtn>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</ProjectCardListContainer>
		</Container>
	);
};

export default ProjectCardList;
