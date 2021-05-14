import styled from 'styled-components';

export const DetailWriterContainer = styled.div`
	padding: 40px 20px 30px;
	text-align: left;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const DetailWriterTitle = styled.p`
	font-family: 'NanumSquareB';
	font-size: 18px;
	margin-bottom: 10px;
`;

export const DetailWriterInfo = styled.div`
	display: flex;
	margin-bottom: 10px;
	font-family: 'NanumSquareB';
	font-size: 16px;

	& > p {
		width: 90px;
	}

	& > span {
		font-family: 'NanumSquareR';
	}
`;
