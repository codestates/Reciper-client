import styled from 'styled-components';

export const UserDetailIntroCard = styled.div`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: column;
	width: 700px;
`;

export const ProfileUserDetailInfo = styled.div`
	padding: 50px 52px 30px 52px;
	width: 800px;

	& > div {
		display: flex;
		height: 3.7vw;
	}
`;

export const ProfileCareer = styled.p`
	margin-right: 20px;
	color: #000;
`;

export const StacksContainer = styled.div`
	display: flex;
	width: 550px;
	padding: 0 5px;
`;

export const ProfileStacks = styled.span`
	margin: 0 8px -5px -5px;
`;

// --------------------TODO: user project Card------------------

export const ProfileUserRecipeInfo = styled.div`
	width: 700px;
	padding-bottom: 30px;
`;

export const RecipeCardInitSetting = styled.div`
	& > div {
		margin-top: 14px;
	}
`;

export const ProfileInProgressRecipe = styled(RecipeCardInitSetting)`
	margin-bottom: 40px;
`;

export const ProfileSuccessRecipe = styled(RecipeCardInitSetting)``;
