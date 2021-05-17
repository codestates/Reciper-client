import styled from 'styled-components';

export const ProfileContainer = styled.div`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: column;
	width: 1000px;
	margin: 0 auto;
	padding: 114px 42px 42px 42px;
`;

export const ProfileTitle = styled.div`
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	padding: 10px 32px 10px 32px;
	width: 800px;
	height: 60px;
	font-family: 'NanumSquareB';
	font-size: 26px;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};

	& > div {
		cursor: pointer;
		${({ theme }) => theme.align.flexVertical}
		transition: 0.1s;
		margin-top: 20px;
		font-family: 'NanumSquareR';
		font-size: 14px;

		&:hover {
			color: #478bff;
		}
	}
`;

// --------------------TODO: user profile Card-------------------------

export const ProfileUserCard = styled.div`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: row;
	width: 800px;
	padding: 40px 28px 40px 28px;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const ProfileImg = styled.div`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: column;
	width: 240px;
	height: 240px;

	& > div {
		overflow: hidden;
		${({ theme }) => theme.align.flexVertical}
		width: 200px;
		height: 200px;
		border-radius: 100%;

		& > div {
			${({ theme }) => theme.align.flexCenter}
			width: 100%;
			height: 100%;
			font-family: 'NanumSquareR';
			font-size: 110px;
			color: #fff;
		}

		& > form {
			${({ theme }) => theme.align.positionCenter}
			right: 28px;
			width: content-fit;
		}
	}

	& > span {
		cursor: pointer;
		width: 200px;
		margin-top: 10px;
		font-family: 'NanumSquareR';
		font-size: 14px;
		color: #f15525;
		text-align: center;
	}
`;

// --------------------TODO: image upload-------------------------

export const ProfileImageUploadWrapper = styled.div`
	position: relative;

	& > img {
		width: 100%;
	}

	&:hover > div {
		background-color: rgba(0, 0, 0, 0.3);

		& > span {
			opacity: 1;
		}
	}
`;

export const ProfileUserImage = styled.img`
	width: 100%;
`;

export const ProfileImageUploadButton = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexCenter}
	position: absolute;
	top: 0;
	left: 0;
	transition: 0.3s;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0);

	& > span {
		opacity: 0;
		transition: 0.3s;
		font-family: 'NanumSquareR';
		font-size: 18px;
		color: #fff;
	}
`;

// --------------------TODO: image personal info-------------------------

export const ProfileUserInfoCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 12px 68px;
	width: 100%;

	& > div {
		${({ theme }) => theme.align.flexVertical}
		margin-bottom: 28px;
	}
`;

export const ProfileUserEmail = styled.div`
	${({ theme }) => theme.align.flexVertical}
	width: 250px;
	height: 32px;
	padding: 12px;
	font-family: 'NanumSquareR';
	color: #545454;
	background-color: #dcdcdc;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;
`;

export const ProfileSubTitle = styled.span`
	${({ theme }) => theme.align.flexVertical}
	width: 120px;
	height: 30px;
	font-family: 'NanumSquareB';
`;

export const ProfileUserInfo = styled.span`
	${({ theme }) => theme.align.flexVertical}
	position: relative;

	height: 30px;
	font-family: 'NanumSquareR';
	text-align: left;

	& > div {
		color: #545454;
	}
`;

// --------------------TODO: user Develop intro Card------------------

export const UserDetailIntroCard = styled.div`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: column;
	width: 700px;
`;

export const ProfileUserDetailInfo = styled.div`
	padding: 50px 52px 30px 52px;
	width: 800px;

	& > div {
		${({ theme }) => theme.align.flexVertical}
		margin-bottom: 28px;
	}
`;
export const ProfileCareer = styled.span`
	margin-right: 20px;
`;

export const StacksContainer = styled.div`
	width: 600px;
	padding: 20px 28px;
`;

export const ProfileStacks = styled.span`
	margin: 0 8px -5px -5px;
`;

export const ProfileUserRecipeInfo = styled.div`
	width: 700px;
	padding-bottom: 30px;
`;

export const RecipeCardInitSetting = styled.div`
	& > div {
		margin-top: 20px;
	}
`;

export const ProfileInProgressRecipe = styled(RecipeCardInitSetting)`
	margin-bottom: 40px;
`;

export const ProfileSuccessRecipe = styled(RecipeCardInitSetting)``;

// --------------------TODO: Card Design------------------

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
