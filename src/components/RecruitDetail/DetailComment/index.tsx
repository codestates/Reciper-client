import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Common/Button';
import ProfileImage from '../../Common/ProfileImage';

import timeStamp from '../../../utils/timeStamp';

import { RecruitDetailCommentDataType } from '../../../types/types';

import { getProfileInfoSelector } from '../../../reducer/profile';
import { addCommentData, deleteCommentData, getRecruitDetailSelector } from '../../../reducer/recruitDetail';

import {
	CommentWriter,
	CommentWritingContainer,
	CommentWritingInput,
	DetailCommentContainer,
	CommentWritingBtnWrap,
	CommentContainer,
	Comment,
	CommentLeft,
	CommentRight,
	CommentInfoWrap,
	CommentUserName,
	CommentTimeStamp,
	CommentText,
	CommentDeleteBtn,
} from './styles';

interface Props {
	params: string;
}

const DetailComment = ({ params }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { data } = useSelector(getRecruitDetailSelector);
	const userInfo = useSelector(getProfileInfoSelector);
	const [commentBody, setCommentBody] = useState<string>('');

	const onAddComment = () => {
		if (!commentBody.trim()) {
			return;
		}

		const data = { body: commentBody };
		dispatch(addCommentData({ params, data }));
		setCommentBody('');
	};

	const CommentWrap = (comment: RecruitDetailCommentDataType, index: number): JSX.Element => {
		const isMadeByMy = userInfo.id === comment.writer.id;

		const onDeleteComment = () => {
			dispatch(deleteCommentData({ params, id: comment.id }));
		};

		return (
			<Comment key={index}>
				<CommentLeft>
					<ProfileImage
						width="40px"
						height="40px"
						margin="0 15px 0 0"
						profileImage={comment.writer.uploadImage}
						profileColor={comment.writer.profileColor}
						userName={comment.writer.name}
					/>
				</CommentLeft>
				<CommentRight>
					<CommentInfoWrap>
						<div>
							<CommentUserName>{comment.writer.name}</CommentUserName>
							<CommentTimeStamp>{timeStamp(new Date(comment.createdAt))}</CommentTimeStamp>
						</div>
						{isMadeByMy && <CommentDeleteBtn onClick={onDeleteComment}>삭제</CommentDeleteBtn>}
					</CommentInfoWrap>
					<CommentText>{comment.body}</CommentText>
				</CommentRight>
			</Comment>
		);
	};

	return (
		<DetailCommentContainer>
			<CommentWritingContainer>
				<CommentWriter>
					<ProfileImage
						width="40px"
						height="40px"
						margin="0 10px 0 0"
						profileImage={userInfo.uploadImage}
						profileColor={userInfo.profileColor}
						userName={userInfo.name}
					/>
					{userInfo.name}
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
			<CommentContainer>{data.commentsList.map((comment, index) => CommentWrap(comment, index))}</CommentContainer>
		</DetailCommentContainer>
	);
};

export default DetailComment;
