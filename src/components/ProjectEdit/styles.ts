import styled from 'styled-components';

export const ProjectImage = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 80px;
	height: 80px;
	margin-bottom: 30px;
	font-family: 'NanumSquareR';
	font-size: 50px;
	color: #fff;
	background-color: #d44646;
	border-radius: 2px;
`;

export const ProjectDeleteBtn = styled.p`
	cursor: pointer;
	font-size: 18px;
	color: ${({ theme }) => theme.color.warningColor};
`;
