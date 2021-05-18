import React from 'react';
import { useSelector } from 'react-redux';

import { getRecruitDetailSelector } from '../../../reducer/recruitDetail';

import {
	DetailCommentIcon,
	DetailSimpleIntro,
	DetailTopContainer,
	DetailTopInfo,
	DetailTopTitle,
	DetailViewIcon,
} from './styles';

const DetailTop = (): JSX.Element => {
	const { data } = useSelector(getRecruitDetailSelector);

	return (
		<DetailTopContainer>
			<DetailTopTitle>{data.name}</DetailTopTitle>
			<DetailTopInfo>
				<span>
					<DetailViewIcon /> 조회 {data.view}
				</span>
				<span>
					<DetailCommentIcon /> 댓글 {data.commentCount}
				</span>
			</DetailTopInfo>
			<DetailSimpleIntro>{data.simpleDesc}</DetailSimpleIntro>
		</DetailTopContainer>
	);
};
export default DetailTop;
