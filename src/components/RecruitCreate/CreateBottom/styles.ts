import styled from 'styled-components';

export const CreatBottomContainer = styled.div`
	width: 100%;
	padding: 40px 0 10px;
	margin-bottom: 20px;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const CreateImageWrap = styled.div`
	overflow: hidden;
	${({ theme }) => theme.align.flexCenter};
	position: relative;
	width: 410px;
	height: 150px;

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

export const CreateImageUpload = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexCenter}
	position: absolute;
	top: 0;
	left: 0;
	transition: 0.1s;
	width: 100%;
	height: 100%;

	background-color: rgba(0, 0, 0, 0);

	& > span {
		opacity: 0;
		transition: 0.1s;
		font-family: 'NanumSquareR';
		font-size: 18px;
		color: #fff;
	}
`;
