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
	cursor: pointer;
	position: relative;

	&:hover > div {
		background-color: rgba(0, 0, 0, 0.3);

		& > span {
			opacity: 1;
		}
	}
`;

export const ProfileImageUploadButton = styled.div`
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

export const ProfileSubTitle = styled.div`
	${({ theme }) => theme.align.flexVertical}
	width: 120px;
	height: 30px;
	font-family: 'NanumSquareB';
`;

export const ProfileUserInfo = styled.div`
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
export const ProfileCareer = styled.div`
	margin-right: 20px;
`;

export const StacksContainer = styled.div`
	width: 600px;
	padding: 20px 28px;
`;

export const ProfileStacks = styled.span`
	margin: 0 8px -5px -5px;
`;
