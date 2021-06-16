import styled from 'styled-components';

export const ProfileImageUploadWrapper = styled.div`
	cursor: pointer;
	position: relative;
	font-family: 'NanumSquareR';

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

export const EmailInfoWrapper = styled.div`
	margin-bottom: 32px;
`;

export const ProfileUserEmail = styled.div`
	${({ theme }) => theme.align.flexVertical}
	width: 100%;
	height: 40px;
	padding: 12px;
	font-family: 'NanumSquareR';
	font-size: 16px;
	color: #545454;
	background-color: #dcdcdc;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;
`;

// --------------------TODO: validation message-------------------------

export const InvalidMessage = styled.div`
	width: 100%;
	margin-left: 112px;
	padding: 8px 0;
	font-family: 'NanumSquareR';
	font-size: 14px;
	color: ${({ theme }) => theme.color.warningColor};
	text-align: left;
`;
