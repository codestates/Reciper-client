import styled from 'styled-components';
import {
	CreateSubTitle,
	CreateTitle,
	CreateUrl,
	CreateUrlWrap,
	SectionBtnWrap,
} from '../ProjectCreate/CreateContaniner/styles';

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

export const EditTitle = styled(CreateTitle)`
	opacity: 1;
	margin-left: 0;
`;
export const EditSubTitle = styled(CreateSubTitle)`
	opacity: 1;
	margin-left: 0;
`;
export const EditUrlWrap = styled(CreateUrlWrap)`
	opacity: 1;
	margin-left: 0;
	margin-bottom: 30px;
`;
export const EditUrl = styled(CreateUrl)`
	opacity: 1;
	margin-left: 0;
`;
export const EditBtnWrap = styled(SectionBtnWrap)`
	opacity: 1;
	margin-left: 0;
`;
