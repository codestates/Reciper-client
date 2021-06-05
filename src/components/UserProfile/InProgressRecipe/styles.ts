import styled from 'styled-components';
import { BsPeopleFill } from 'react-icons/bs';

export const RecipeContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const RecipeWrapper = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: row;
	width: 420px;
	heigth: 60px;
	margin: 4px 0;
	padding: 8px 6px;
	font-family: NanumSquareR;
	border-radius: 3px;

	&:hover {
		background-color: #eee;
	}
`;

export const RecipeImage = styled.div<{ projectColor: string }>`
	${({ theme }) => theme.align.flexCenter};
	width: 32px;
	height: 32px;
	color: #fff;
	font-size: 20px;
	background-color: ${({ projectColor }) => projectColor};
	border-radius: 2px;
`;

export const RecipeInfoWrapper = styled.div`
	${({ theme }) => theme.align.flexVertical};
	width: 100%;
	flex-direction: row;
	font-size: 16px;

	& > p {
		width: 220px;
		margin: 0 8px;
	}

	& > div {
		${({ theme }) => theme.align.flexVertical};
		margin-right: 12px;
		font-size: 15px;
		color: #595555;
	}
`;

export const RecipeMembersIcon = styled(BsPeopleFill)`
	font-size: 18px;
	color: #595555;
`;
