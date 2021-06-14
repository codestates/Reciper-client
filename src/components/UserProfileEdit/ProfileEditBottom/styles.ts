import styled from 'styled-components';
import { RiCodeBoxFill } from 'react-icons/ri';

export const EditButton = styled.div`
	${({ theme }) => theme.align.flexCenter}
`;

export const ProfileCareerContainer = styled.div`
	${({ theme }) => theme.align.flexVertical}
	flex-direction: row;
`;

export const CareerInput = styled.div`
	width: 130px;
	margin-right: 8px;
`;

// --------------------TODO: Add Stack Input------------------

export const SearchCodeIcon = styled(RiCodeBoxFill)`
	position: absolute;
	top: 8px;
	left: 10px;
	font-size: 25px;
	color: ${({ theme }) => theme.color.lineColor};
`;

export const AddStackContainer = styled.div`
	margin-top: -24px;
	margin-left: 112px;
`;

export const StackClear = styled.span`
	cursor: pointer;
	width: fit-content;
	margin-right: 10px;
	font-size: 14px;
	color: #666;

	&:hover {
		font-family: 'NanumSquareR';
		color: ${({ theme }) => theme.color.warningColor};
	}
`;

export const StackMaximum = styled.span`
	margin-left: 8px;
	font-family: 'NanumSquareR';
	font-size: 16px;
	color: ${({ theme }) => theme.color.warningColor};
`;

export const ToggleMessage = styled.p`
	margin-left: 8px;
	font-family: 'NanumSquareR';
	color: ${({ theme }) => theme.color.pointColor};
`;

// --------------------TODO: project ------------------

export const ShowProject = styled.div`
	margin-top: 30px;
`;
