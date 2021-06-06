import React, { Dispatch, KeyboardEvent, SetStateAction, useCallback } from 'react';
import { useSelector } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { getProfileInfoSelector } from '../../../../reducer/profile';
import { taskCommentDataType } from '../../../../types/types';
import timeStamp from '../../../../utils/timeStamp';
import ProfileImage from '../../ProfileImage';
import { Section, SectionTitle } from '../styles';
import {
	WritingWrap,
	CommentWrap,
	WritingInput,
	CommentItem,
	CommentInfo,
	CommentContent,
	CommentUser,
} from './styles';

interface Props {
	comment: taskCommentDataType[];
	setComment: Dispatch<SetStateAction<taskCommentDataType[]>>;
}

const Comment = ({ comment, setComment }: Props): JSX.Element => {
	const userInfo = useSelector(getProfileInfoSelector);

	const [commentValue, onChangeCommentValue, setCommentValue] = useInput<string>('');

	const addComment = useCallback((): void => {
		setComment([
			...comment,
			{
				body: commentValue,
				writer: {
					profileColor: userInfo.profileColor,
					profileImage: userInfo.uploadImage,
					userName: userInfo.name,
					id: userInfo.id,
				},
			},
		]);
		setCommentValue('');
	}, [comment, commentValue]);

	const deleteComment = useCallback(
		(index: number): void => {
			const commentCopy = [...comment];
			commentCopy.splice(index, 1);

			setComment(commentCopy);
		},
		[comment],
	);

	return (
		<Section>
			<SectionTitle>댓글</SectionTitle>
			<WritingWrap>
				<WritingInput
					placeholder="작성 후 Enter를 누르세요"
					value={commentValue}
					onChange={onChangeCommentValue}
					onKeyPress={(e: KeyboardEvent) => e.key === 'Enter' && addComment()}
				/>
			</WritingWrap>
			<CommentWrap>
				{comment.map((comment, index) => (
					<CommentItem key={index}>
						<ProfileImage
							width="30px"
							height="30px"
							profileColor={comment.writer.profileColor}
							profileImage={comment.writer.profileImage}
							userName={comment.writer.userName}
						/>
						<CommentInfo>
							<CommentUser>
								<p>
									{comment.writer.userName}{' '}
									<span>{timeStamp(comment.createdAt ? new Date(comment.createdAt) : new Date())}</span>
								</p>
								<button onClick={() => deleteComment(index)}>삭제</button>
							</CommentUser>
							<CommentContent>{comment.body}</CommentContent>
						</CommentInfo>
					</CommentItem>
				))}
			</CommentWrap>
		</Section>
	);
};

export default Comment;
