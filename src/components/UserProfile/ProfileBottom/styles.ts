import styled from 'styled-components';

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

export const ProfileRecipeCard = styled.div`
	cursor: pointer;
	transition: 0.1s;
	overflow: hidden;
	width: 200px;
	height: 270px;
	border-radius: 3px;
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);

	&:hover {
		transform: scale(1.03);
	}
`;

export const RecipeCardImg = styled.div`
	width: 100%;
	height: 80px;
	background-color: ${({ theme }) => theme.color.pointColor};
	background-size: 100% 100%;
	background-position: center;
`;

export const RecipeCardContent = styled.div`
	padding: 16px 24px;
`;

export const RecipeCardtitle = styled.div`
	padding-bottom: 10px;
	font-family: 'NanumSquareB';
	font-size: 24px;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};

	& > div {
		padding: 4px 0;
		font-family: 'NanumSquareR';
		font-size: 14px;
		color: #444242;
	}
`;

export const RecipeCardDescription = styled.div`
	overflow: hidden;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	line-height: 1.6em;
	height: 5.6em;
	padding: 10px 0;
	font-family: 'NanumSquareR';
	font-size: 14px;
	color: #444242;
`;
