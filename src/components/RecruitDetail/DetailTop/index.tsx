import React from 'react';

import { RecruitDetailTopDataType } from '../../../types/types';

import {
	DetailCommentIcon,
	DetailSimpleIntro,
	DetailTopContainer,
	DetailTopInfo,
	DetailTopTitle,
	DetailViewIcon,
} from './styles';

const DetailTop = ({ name, view, commentCount, simpleDesc }: RecruitDetailTopDataType): JSX.Element => {
	return (
		<DetailTopContainer>
			<DetailTopTitle>{name}</DetailTopTitle>
			<DetailTopInfo>
				<span>
					<DetailViewIcon /> 조회 {view}
				</span>
				<span>
					<DetailCommentIcon /> 댓글 {commentCount}
				</span>
			</DetailTopInfo>
			<DetailSimpleIntro>{simpleDesc}</DetailSimpleIntro>
		</DetailTopContainer>
	);
};
export default DetailTop;
