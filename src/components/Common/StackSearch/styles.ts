import styled from 'styled-components';

export const StackSearchContainer = styled.div<{ height: string; margin: string }>`
	width: 130px;
	height: ${({ height }) => (height === 'short' ? '32px' : '40px')};
	margin: ${({ margin }) => margin};
	position: relative;
	font-family: 'NanumSquareR';
`;

export const StackSearchInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 0 10px;
	font-size: 14px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&::placeholder {
		color: ${({ theme }) => theme.color.lineColor};
	}
`;

export const StackList = styled.div`
	overflow: auto;
	overflow-x: hidden;
	position: absolute;
	z-index: 10;
	width: 100%;
	max-height: 200px;
	background-color: #fff;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-top: none;
	border-radius: 3px;
`;

export const Stack = styled.div`
	width: 100%;
	padding: 8px 10px;
	&:hover {
		background-color: ${({ theme }) => theme.color.pointColor};
		color: #fff;
	}
`;
