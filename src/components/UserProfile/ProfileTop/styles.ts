import styled from 'styled-components';

export const ProfileContainer = styled.div`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: column;
	width: 60%;
	margin: 0 auto;
	padding: 132px 32px 132px 32px;
`;

export const ProfileTitle = styled.div`
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	padding: 10px 32px 10px 32px;
	width: 800px;
	height: 60px;
	font-family: NanumSquareB;
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
	${({ theme }) => theme.align.flexVertical};
	flex-direction: row;
	width: 800px;
	padding: 40px 8px;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const ProfileImg = styled.div`
	display: flex;
	flex-direction: column;
	width: 272px;
	height: 308px;

	& > div {
		overflow: hidden;
		${({ theme }) => theme.align.flexVertical};
		width: 272px;
		height: 272px;
		border-radius: 100%;

		& > div {
			${({ theme }) => theme.align.flexCenter};
			width: 100%;
			height: 100%;
			font-family: 'NanumSquareR';
			font-size: 110px;
			color: #fff;
		}

		& > form {
			${({ theme }) => theme.align.positionCenter};
			right: 28px;
			width: content-fit;
		}

		& > p {
			${({ theme }) => theme.align.flexCenter};
			width: 100%;
			font-family: 'NanumSquareR';
			font-size: 140px;
			color: #fff;
		}
	}

	& > span {
		cursor: pointer;
		width: content-fit;
		padding: 10px 4px;
		font-family: 'NanumSquareR';
		font-size: 14px;
		color: #333;
		text-align: center;
		border-radius: 3px;

		&:hover {
			color: ${({ theme }) => theme.color.warningColor};
		}
	}
`;

// --------------------TODO: image personal info-------------------------

export const ProfileUserInfoCard = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 72px;
	padding: 12px 0px;
	width: 100%;

	& > div {
		display: flex;
		flex-direction: column;

		height: 72px;
		margin-bottom: 8px;
	}
`;

export const ProfileSubTitle = styled.div`
	${({ theme }) => theme.align.flexVertical};
	width: 134px;
	height: 40px;
	font-family: 'NanumSquareB';
	font-size: 16px;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

export const ProfileUserInfo = styled.div`
	${({ theme }) => theme.align.flexVertical};
	width: 100%;
	height: 40px;
	font-family: 'NanumSquareR';
	font-size: 16px;
	text-align: left;

	& > div {
		color: #545454;
	}
`;
