import React from 'react';
import {
	DetailCommentIcon,
	DetailSimpleIntro,
	DetailTopContainer,
	DetailTopInfo,
	DetailTopTitle,
	DetailViewIcon,
} from './styles';

interface RecruitDetailTopData {
	name: string;
	view: number;
	commentCount: number;
	simpleDesc: string;
}

const DetailTop = ({ name, view, commentCount, simpleDesc }: RecruitDetailTopData): JSX.Element => {
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
