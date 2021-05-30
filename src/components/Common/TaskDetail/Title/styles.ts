import styled from 'styled-components';

export const TitleContainer = styled.input`
	transition: 0.1s;
	width: calc(100% - 80px);
	height: 40px;
	padding: 0 10px;
	font-family: 'NanumSquareB';
	font-size: 18px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
`;
