import styled from 'styled-components';

export const ProfileContainer = styled.div`
	width: 800px;
	margin: 0 auto;
	padding: 42px;
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
		transition: 0.1s;
		${({ theme }) => theme.align.flexVertical}
		margin-top: 20px;
		font-family: 'NanumSquareR';
		font-size: 14px;

		&:hover {
			color: #478bff;
		}
	}
`;
// --------------------TODO: image upload-------------------------

export const Profile_UserImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 100%;
`;

// --------------------TODO: user profile Card-------------------------

export const Profile_UserCard = styled.div`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: row;
	width: 800px;
	padding: 40px 28px 0 28px;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const Profile_Img = styled.div`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: column;
	width: 240px;
	height: 240px;

	& > div {
		width: 200px;
		height: 200px;
		border-radius: 100%;

		& > div {
			${({ theme }) => theme.align.flexCenter}
			font-family: 'NanumSquareR';
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
		margin-top: 5px;
		font-family: 'NanumSquareR';
		font-size: 14px;
		color: #f15525;
	}
`;

export const ProfileEdit_Img = styled(Profile_Img)`
	& > div {
		position: absolute;
		opacity: 1;

		&:hover {
			cursor: pointer;
		}
	
		&:hover:before {
			overflow: hidden;
			opacity: 0.5;
			${({ theme }) => theme.align.flexCenter}
			width: 200px;
			height:200px;
			font-family: NanumSquareR;
			font-size: 18px;
			color: #fff;
			background-color: rgba(0, 0, 0.3);
			border-radius: 100%;
			content: '이미지 업로드'
		}
`;

export const Profile_UserInfoCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 0 12px 68px;
	width: 100%;

	& > div {
		${({ theme }) => theme.align.flexVertical}
		margin-bottom: 28px;
	}
`;

export const Profile_UserEmail = styled.div`
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

export const Profile_SubTitle = styled.span`
	${({ theme }) => theme.align.flexVertical}
	width: 120px;
	height: 30px;
	font-family: 'NanumSquareB';
`;

export const Profile_UserInfo = styled.span`
	${({ theme }) => theme.align.flexVertical}
	position: relative;

	height: 30px;
	font-family: 'NanumSquareR';
	text-align: left;

	& > div {
		color: #545454;
	}

	& > span {
		width: 140px;
		margin-right: 4px;
	}
`;

// --------------------TODO: user Develop intro Card------------------

export const UserDetailIntroCard = styled.div`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: column;
	width: 700px;
	margin: 0 auto;
`;

export const Profile_UserDetailInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding: 30px 0 40px 68px;
	width: 100%;

	& > div {
		${({ theme }) => theme.align.flexVertical}
		margin-bottom: 28px;
	}
`;

export const Profile_Stack = styled.span`
	margin-right: 8px;
`;

export const Profile_UserRecipeInfo = styled.div`
	width: 700px;
	padding: 0 68px 30px 68px;
`;

export const RecipeCard_InitSetting = styled.div`
	& > div {
		margin-top: 20px;
	}
`;

export const Profile_InProgressRecipe = styled(RecipeCard_InitSetting)`
	margin-bottom: 40px;
`;

export const Profile_SuccessRecipe = styled(RecipeCard_InitSetting)``;

// --------------------TODO: Card Design------------------

export const Profile_RecipeCard = styled.div`
	cursor: pointer;
	transition: 0.1s;
	overflow: hidden;
	width: 200px;
	height: 270px;
	border-radius: 3px;
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);

	&: hover {
		transform: scale(1.03);
	}
`;

export const RecipeCard_Img = styled.div`
	width: 100%;
	height: 80px;
	background-color: ${({ theme }) => theme.color.pointColor};
	background-size: 100% 100%;
	background-position: center;
`;

export const RecipeCard_Content = styled.div`
	padding: 16px 24px;
`;

export const RecipeCard_title = styled.div`
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

export const RecipeCard_Description = styled.div`
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

export const EditButton = styled.div`
	${({ theme }) => theme.align.flexCenter}
`;

// --------------------TODO: Add Stack Input------------------
export const AddStackContainer = styled.div`
	${({ theme }) => theme.align.flexVertical}
	position: absolute;
	top: 36px;
`;

export const CurrentStack = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexVertical}
	padding-right: 4px;
	color: #545454;
`;

export const StackClear = styled.div`
	cursor: pointer;
`;

export const StackMaximum = styled.span`
	margin-left: 8px;
	font-family: 'NanumSquareR';
	font-size: 14px;
	color: ${({ theme }) => theme.color.warningColor};
`;

export const ToggleMessage = styled.p`
	margin-left: 8px;
	font-family: 'NanumSquareR';
	color: ${({ theme }) => theme.color.pointColor};
`;
