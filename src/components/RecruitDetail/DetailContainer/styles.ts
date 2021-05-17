import styled from 'styled-components';

export const FullDiv = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
	padding-top: 72px;
`;

export const Container = styled.div`
	width: 800px;
	margin: 50px 0 150px 0;
	font-family: 'NanumSquareR';
`;

export const DeleteBtnWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	justify-content: flex-end;
	width: 100%;
	height: 40px;
`;

export const DeleteBtn = styled.button`
	width: 107px;
	height: 40px;
	font-family: 'NanumSquareB';
	font-size: 14px;
	color: ${({ theme }) => theme.color.warningColor};
	border-radius: 3px;

	&:hover {
		background-color: ${({ theme }) => theme.color.warningColor};
		color: #fff;
	}
`;
