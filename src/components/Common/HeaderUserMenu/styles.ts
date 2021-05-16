import styled from 'styled-components';

export const UserMenu = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 100;
	color: #545454;
`;

export const MenuContainer = styled.div`
	cursor: pointer;
	overflow: hidden;
	display: inline-block;
	position: absolute;
	top: 68px;
	right: 28px;
	z-index: 10;
	width: 160px;
	max-height: calc(100vh - 20px);
	font-family: NanumSquareR;
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

export const MenuItem = styled.div`
	padding: 12px;
	font-size: 14px;

	&:hover {
		color: #fff;
		background-color: ${({ theme }) => theme.color.pointColor};
	}
	& > a {
		font-size: 14px;
		color: #545454;

		&:hover {
			color: #fff;
		}
	}
`;
