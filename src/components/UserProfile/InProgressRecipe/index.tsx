import dayjs from 'dayjs';
import React from 'react';
import { ProjectList } from '../../../types/types';
import { RecipeContainer, RecipeImage, RecipeInfoWrapper, RecipeMembersIcon, RecipeWrapper } from './styles';

interface Props {
	projectList: ProjectList[];
	isOpen: boolean;
}

const InprogressRecipe = ({ projectList, isOpen }: Props): JSX.Element => {
	console.log(projectList);
	return (
		<>
			{isOpen ? (
				<>
					{projectList ? (
						<RecipeContainer>
							{projectList.map((project: ProjectList) => (
								<RecipeWrapper key={project.id}>
									<RecipeImage projectColor={project.projectColor}>{project.name[0]}</RecipeImage>
									<RecipeInfoWrapper>
										<p>{project.name}</p>
										<div>
											<RecipeMembersIcon />
											{project.members.length}
										</div>
										<div>{dayjs(project.createdAt).format('YY-MM-DD')} ~</div>
									</RecipeInfoWrapper>
								</RecipeWrapper>
							))}
						</RecipeContainer>
					) : (
						<div>현재 개발중인 레시피가 없습니다.</div>
					)}
				</>
			) : (
				<div>비공개 입니다</div>
			)}
		</>
	);
};

export default InprogressRecipe;
