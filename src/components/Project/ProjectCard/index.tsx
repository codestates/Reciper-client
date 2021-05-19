import React from 'react';
import { CardContainer, ProjectEditLink, ProjectImageWrap, ProjectName, ProjectImage, ProjectUrl } from './styles';

const ProjectCard = (): JSX.Element => {
	return (
		<CardContainer to="/">
			<ProjectImageWrap>
				<ProjectImage>R</ProjectImage>
			</ProjectImageWrap>
			<ProjectName>Reciper</ProjectName>
			<ProjectUrl>reciper.me/finalproject</ProjectUrl>
			<ProjectEditLink to="/project">레시피 설정</ProjectEditLink>
		</CardContainer>
	);
};

export default ProjectCard;
