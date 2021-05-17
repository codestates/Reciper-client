import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '../../Common/Button';

import timeStamp from '../../../utils/timeStamp';
import { axiosRequest } from '../../../utils/axios';
import { getProfileInfoSelector } from '../../../reducer/profile';

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
	CommentDeleteBtn,
} from './styles';
import axios from 'axios';
import getLoginInfo from '../../../utils/getLoginInfo';
import ProfileImage from '../../Common/ProfileImage';

interface Props {
	commentListData: RecruitDetailCommentDataType[];
	params: string;
}

const DetailComment = ({ commentListData, params }: Props): JSX.Element => {
	const [commentBody, setCommentBody] = useState<string>('');
	const userInfo = useSelector(getProfileInfoSelector);

	const onAddComment = () => {
		if (!commentBody.trim()) {
			return;
		}

		const data = { body: commentBody };

		axiosRequest('post', `/recruitBoardComment/${params}`, data);
	};

	const CommentWrap = (comment: RecruitDetailCommentDataType, index: number): JSX.Element => {
		const { accessToken, loginType } = getLoginInfo();
		const isMadeByMy = userInfo.id === comment.writer.id;

		const onDeleteComment = () => {
			axios.delete(`${process.env.REACT_APP_SERVER_URL}/recruitBoardComment/${params}/${comment.id}`, {
				headers: { authorization: `Bearer ${accessToken}`, loginType },
			});
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
			<CommentContainer>{commentListData.map((comment, index) => CommentWrap(comment, index))}</CommentContainer>
		</DetailCommentContainer>
	);
};

export default DetailComment;
