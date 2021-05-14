import React from 'react';
import {
	DetailCommentIcon,
	DetailSimpleIntro,
	DetailTopContainer,
	DetailTopInfo,
	DetailTopTitle,
	DetailViewIcon,
} from './styles';

const DetailTop = (): JSX.Element => {
	return (
		<DetailTopContainer>
			<DetailTopTitle>Reciper</DetailTopTitle>
			<DetailTopInfo>
				<span>
					<DetailViewIcon /> 조회 12
				</span>
				<span>
					<DetailCommentIcon /> 댓글 1
				</span>
			</DetailTopInfo>
			<DetailSimpleIntro>
				우당탕탕 프로젝트 만들기 디자인, 기획부터 개발, 배포까지! 어느 하나 쉬운게 없네
			</DetailSimpleIntro>
		</DetailTopContainer>
	);
};
export default DetailTop;
