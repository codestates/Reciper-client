import styled from 'styled-components';

export const HeaderContainer = styled.div`
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	width: 100%;
	height: 72px;
	padding: 0 32px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.a`
	font-family: 'NanumSquareR';
	font-size: 20px;
	color: #000;
`;

export const HeaderRight = styled.div`
	${({ theme }) => theme.align.flexCenter}
`;

export const initialFont = styled.div`
	font-family: 'NanumSquareR';
	font-size: 15px;
	color: #000;
`;

export const Nav = styled(initialFont)`
	padding-right: 30px;
	border-right: 1px solid ${({ theme }) => theme.color.lineColor};

	& > a {
		color: #000;
		margin-left: 30px;
	}
`;

export const LoginBtn = styled(initialFont)`
	cursor: pointer;
	margin-left: 30px;
`;
