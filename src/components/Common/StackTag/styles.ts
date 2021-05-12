import styled from 'styled-components';

export const StackTagContainer = styled.span`
	height: 20px;
	padding: 3.5px 10px;
	margin-right: 5px;
	font-family: 'NanumSquareB';
	font-size: 12px;
	color: ${({ theme }) => theme.color.pointColor};
	background-color: #eeebff;
`;
