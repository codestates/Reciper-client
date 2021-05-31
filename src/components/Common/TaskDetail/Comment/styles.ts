import styled from 'styled-components';

export const WritingWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	width: 100%;
	margin-bottom: 20px;
`;

export const WritingInput = styled.input`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&::placeholder {
		font-family: 'NanumSquareR';
	}
`;

export const CommentWrap = styled.div`
	overflow: auto;
	width: 100%;
	max-height: 100px;
`;

export const CommentItem = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 20px;
`;

export const CommentInfo = styled.div`
	width: 100%;
	margin-left: 10px;
`;

export const CommentUser = styled.div`
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	width: 100%;
	margin-bottom: 7px;

	& > p {
		font-size: 15px;
	}

	& span,
	button {
		margin-left: 5px;
		font-size: 13px;
		color: #c6c6c8;
	}
`;

export const CommentContent = styled.p`
	font-size: 14px;
`;
