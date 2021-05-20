import styled from 'styled-components';

export const HeaderContainer = styled.div<{
	isScrollBackground: boolean;
	isScrollShadow: boolean;
	isScrollTransition: boolean;
}>`
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	position: fixed;
	z-index: 10;
	transition: ${({ isScrollTransition }) => (isScrollTransition ? 'all 0.5s ease-in-out' : 'none')};
	width: 100%;
	height: 72px;
	padding: 0 32px;
	background-color: ${({ isScrollBackground }) => (isScrollBackground ? '#fff' : 'none')};
	box-shadow: ${({ isScrollShadow }) => (isScrollShadow ? '0px 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
`;

export const LogoWrapper = styled.a`
	margin-top: -8px;
	font-family: 'Pacifico';
	font-size: 26px;
	color: ${({ theme }) => theme.color.pointColor};
`;

export const Logo = styled.img`
	margin: 0 6px -6px 0;
`;

export const HeaderRight = styled.div`
	${({ theme }) => theme.align.flexCenter}
`;

export const initialFont = styled.div`
	font-family: 'NanumSquareR';
	font-size: 15px;
	color: #000;
`;

export const Nav = styled(initialFont)<{ isLineColor: boolean }>`
	padding-right: 30px;
	border-right: ${({ isLineColor }) => (isLineColor ? '0.5px solid #d6d6d8' : '1px solid #000')};

	& > a {
		color: #000;
		margin-left: 30px;
	}
`;

export const LoginBtn = styled(initialFont)`
	cursor: pointer;
	margin-left: 30px;
`;
