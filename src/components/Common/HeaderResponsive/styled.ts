import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';

export const HeaderContainer = styled.header<{ openMenu: boolean; useEmail: string }>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: fixed;
	z-index: 10;
	width: 100%;
	height: ${({ openMenu, useEmail }) => (openMenu ? (useEmail === '' ? '200px' : '340px') : '72px')};
	padding: 17px 32px;
	font-family: 'NanumSquareR';
	font-size: 18px;
	color: #000;
	background-color: #fff;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

	& > article {
		cursor: pointer;
		display: ${({ openMenu }) => (openMenu ? 'flex' : 'none')};
		flex-direction: column;
		width: 100%;
		margin-top: 16px;
		text-align: center;

		& > section:hover {
			color: ${({ theme }) => theme.color.pointColor};
		}
	}

	& > button {
		position: absolute;
		top: 24px;
		right: 32px;
		font-size: 24px;
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export const MenuItem = styled.section`
	transition: all 0.2s linear;
	padding: 8px 8px;
`;

export const HamburgerButton = styled(GiHamburgerMenu)``;
