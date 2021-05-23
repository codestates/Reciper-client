import styled from 'styled-components';
import { TiArrowSortedDown } from 'react-icons/ti';

export const Container = styled.div`
	width: 200px;
`;

export const CollapseIconWrapper = styled.div`
	${({ theme }) => theme.align.flexVertical};
	margin-bottom: 8px;

	& > span {
		${({ theme }) => theme.align.flexVertical};
		font-family: NanumSquareR;
		font-size: 14px;
	}
`;

export const ArrowIcon = styled(TiArrowSortedDown)<{ collapsetest: boolean }>`
	${({ theme }) => theme.align.flexVertical};
	transition: 0.3s;
	font-size: 20px;
	${({ collapsetest }) =>
		!collapsetest &&
		`
      transform: rotate(-90deg);
      transition: 0.3s;
    `};
`;

export const CollapseItem = styled.div`
	& > a {
		cursor: pointer;
		margin-bottom: 4px;
		padding: 0 12px;
		font-family: NanumSquareR;
		font-size: 14px;
		color: #555555;
	}

	&:hover {
		color: #fff;
		background-color: ${({ theme }) => theme.color.pointColor};
	}
`;
