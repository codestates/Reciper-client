import styled from 'styled-components';

export const FullDiv = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
`;

export const Container = styled.div`
	width: 800px;
	margin: 50px 0 150px 0;
	font-family: 'NanumSquareR';
`;

export const CreateTitleInput = styled.input`
	${({ theme }) => theme.align.flexVertical}
	width: 100%;
	height: 80px;
	padding: 20px 30px;
	font-family: 'NanumSquareB';
	font-size: 35px;

	&::placeholder {
		color: ${({ theme }) => theme.color.lineColor};
	}
`;

export const CreateSection = styled.div`
	padding: 0 30px;
	margin-bottom: 30px;
`;

export const CreateSubGuideTitle = styled.p`
	margin-bottom: 10px;
	font-family: 'NanumSquareB';
	font-size: 20px;
`;

export const CreateBtnWrap = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
`;
