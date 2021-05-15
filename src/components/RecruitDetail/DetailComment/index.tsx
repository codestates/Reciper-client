import React from 'react';
import timeStamp from '../../../utils/timeStamp';

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

interface RecruitDetailCommentData {
	id: number;
	body: string;
	createdAt: string;
	updatedAt: string;
	writer: string;
	writerId: number;
	recruitBoard: { [index: string]: number | string };
}

const DetailComment = ({ commentListData }: { commentListData: RecruitDetailCommentData[] }): JSX.Element => {
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
				{commentListData.map((comment, index) => (
					<Comment key={index}>
						<CommentLeft>
							<CommentUserProfileImg>W</CommentUserProfileImg>
						</CommentLeft>
						<CommentRight>
							<CommentInfoWrap>
								<CommentUserName>{comment.writer}</CommentUserName>
								<CommentTimeStamp>{timeStamp(new Date(comment.createdAt))}</CommentTimeStamp>
							</CommentInfoWrap>
							<CommentText>{comment.body}</CommentText>
						</CommentRight>
					</Comment>
				))}
			</CommentContainer>
		</DetailCommentContainer>
	);
};

export default DetailComment;
