import React from 'react';

import Button from '../../Common/Button';

import {
	CommentWriter,
	CommentWritingContainer,
	CommentWritingInput,
	DetailCommentContainer,
	CommentWriterProfileImg,
	CommentWritingBtnWrap,
	CommentContainer,
	Comment,
	CommentLeft,
	CommentRight,
	CommentUserProfileImg,
	CommentInfoWrap,
	CommentUserName,
	CommentTimeStamp,
	CommentText,
} from './styles';

const DetailComment = (): JSX.Element => {
	return (
		<DetailCommentContainer>
			<CommentWritingContainer>
				<CommentWriter>
					<CommentWriterProfileImg>W</CommentWriterProfileImg>
					곽은욱
				</CommentWriter>
				<CommentWritingInput placeholder="댓글을 작성해주세요" />
				<CommentWritingBtnWrap>
					<Button size="medium" clickEvent={() => console.log('작성')}>
						댓글 작성
					</Button>
				</CommentWritingBtnWrap>
			</CommentWritingContainer>
			<CommentContainer>
				<Comment>
					<CommentLeft>
						<CommentUserProfileImg>W</CommentUserProfileImg>
					</CommentLeft>
					<CommentRight>
						<CommentInfoWrap>
							<CommentUserName>곽은욱</CommentUserName>
							<CommentTimeStamp>4시간전</CommentTimeStamp>
						</CommentInfoWrap>
						<CommentText>많이 많이 연락하세요~!</CommentText>
					</CommentRight>
				</Comment>
			</CommentContainer>
		</DetailCommentContainer>
	);
};

export default DetailComment;
