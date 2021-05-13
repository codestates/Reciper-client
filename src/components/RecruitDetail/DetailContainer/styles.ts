import styled from 'styled-components';

export const FullDiv = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
`;

export const Container = styled.div`
	width: 800px;
	margin: 50px 0 150px 0;
	font-family: 'NanumSquareR';
`;
