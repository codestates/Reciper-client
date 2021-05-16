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
	width: 410px;
	height: 150px;

	& > img {
		width: 100%;
	}
`;
