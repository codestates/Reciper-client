import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProjectCardListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 920px;
	padding-bottom: 120px;
`;

export const ProjectCreateBtn = styled(Link)`
	${({ theme }) => theme.align.flexCenter};
	transition: 0.2s;
	width: 286px;
	height: 208px;
	margin: 10px;
	color: #a6a6a8;
	background-color: #e6e6e8;
	border-radius: 2px;

	&:hover {
		color: #969698;
		background-color: #d6d6d8;
	}
`;
