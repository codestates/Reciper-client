import { HiChevronDoubleRight } from 'react-icons/hi';
import styled from 'styled-components';

export const SideBarContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 400px;
	height: calc(100vh - 60px);
	padding: 30px 20px;
	background-color: #fff;
	border-left: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const CloseBtn = styled(HiChevronDoubleRight)`
	font-size: 22px;
`;
