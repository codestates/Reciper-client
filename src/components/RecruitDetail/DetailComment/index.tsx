import React, { ChangeEvent, useState } from 'react';
import timeStamp from '../../../utils/timeStamp';

import Button from '../../Common/Button';

import { RecruitDetailCommentDataType } from '../../../types/types';

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
import { axiosRequest } from '../../../utils/axios';

interface Props {
	commentListData: RecruitDetailCommentDataType[];
	params: string;
}

const DetailComment = ({ commentListData, params }: Props): JSX.Element => {
	const [commentBody, setCommentBody] = useState<string>('');

	const onAddComment = () => {
		const data = { body: commentBody };

		axiosRequest('post', `/recruitBoardComment/${params}`, data);
	};

	return (
		<DetailCommentContainer>
			<CommentWritingContainer>
				<CommentWriter>
					<CommentWriterProfileImg>W</CommentWriterProfileImg>
					곽은욱
				</CommentWriter>
				<CommentWritingInput
					placeholder="댓글을 작성해주세요"
					value={commentBody}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCommentBody(e.target.value)}
				/>
				<CommentWritingBtnWrap>
					<Button size="medium" clickEvent={onAddComment}>
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
								<CommentUserName>{comment.writer.name}</CommentUserName>
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
