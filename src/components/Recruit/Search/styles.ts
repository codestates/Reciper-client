import styled from 'styled-components';
import { RiCodeBoxFill } from 'react-icons/ri';

import StackSearch from '../../Common/StackSearch';
import { Link } from 'react-router-dom';

export const SearchContiner = styled.div`
	display: flex;
	flex-direction: column;
	width: 92.5%;
	margin: 30px 0;
	font-family: 'NanumSquareR';
`;

export const SearchStackContiner = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 20px;
	margin-bottom: 10px;
`;

export const StackSearchCustom = styled(StackSearch)`
	& > input {
		padding-left: 40px;
	}
`;

export const SearchStackClear = styled.span`
	cursor: pointer;
	margin-right: 10px;
	font-size: 12px;
	color: #666;
`;

export const SearchFormContiner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SearchInputContiner = styled.div`
	position: relative;
`;

export const SearchCodeIcon = styled(RiCodeBoxFill)`
	position: absolute;
	top: 8px;
	left: 10px;
	font-size: 25px;
	color: ${({ theme }) => theme.color.lineColor};
`;

export const CreateLink = styled(Link)`
	${({ theme }) => theme.align.flexCenter}
	transition: 0.1s;
	width: 130px;
	height: 40px;
	font-size: 14px;
	color: #333;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&:hover {
		color: #fff;
		background-color: ${({ theme }) => theme.color.pointColor};
		border: 1px solid ${({ theme }) => theme.color.pointColor};
	}
`;
