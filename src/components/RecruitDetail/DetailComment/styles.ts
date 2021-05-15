import styled from 'styled-components';

export const DetailCommentContainer = styled.div`
	padding: 40px 20px;
`;

export const CommentWritingContainer = styled.div``;

export const CommentWriter = styled.div`
	${({ theme }) => theme.align.flexVertical};
	margin-bottom: 10px;
`;

export const CommentWriterProfileImg = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 30px;
	height: 30px;
	margin-right: 15px;
	font-size: 14px;
	color: #fff;
	background-color: #478bff;
	border-radius: 100%;
`;

export const CommentWritingInput = styled.textarea`
	resize: none;
	width: 100%;
	height: 100px;
	padding: 20px;
	margin-bottom: 10px;
	font-family: 'NanumSquareR';
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&::placeholder {
		color: ${({ theme }) => theme.color.lineColor};
	}
`;

export const CommentWritingBtnWrap = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const CommentContainer = styled.div``;

export const Comment = styled.div`
	display: flex;
	padding: 30px 0;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};

	&:last-child {
		border: none;
	}
`;
export const CommentLeft = styled.div``;

export const CommentUserProfileImg = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 40px;
	height: 40px;
	margin-right: 15px;
	color: #fff;
	background-color: #478bff;
	border-radius: 100%;
`;

export const CommentRight = styled.div``;

export const CommentInfoWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	margin-bottom: 10px;
`;

export const CommentUserName = styled.span`
	font-family: 'NanumSquareB';
	margin-right: 15px;
`;

export const CommentTimeStamp = styled.span`
	font-size: 14px;
	color: #888;
`;

export const CommentText = styled.p`
	font-size: 14px;
`;
