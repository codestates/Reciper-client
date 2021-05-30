import styled from 'styled-components';

export const DescContainer = styled.textarea`
	resize: none;
	transition: 0.1s;
	width: calc(100% - 80px);
	height: 80px;
	padding: 10px;
	font-family: 'NanumSquareR';
	font-size: 16px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;
`;
