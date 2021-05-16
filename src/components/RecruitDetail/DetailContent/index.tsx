import React from 'react';

import StackTag from '../../Common/StackTag';

import { RecruitDetailConentDataType } from '../../../types/types';

import {
	DetailContentContainer,
	DetailDescription,
	DetailRecruiteTitle,
	DetailSubTitle,
	DetailRecruiteList,
	DetailStackTitle,
	DetailStageTitle,
	DetailStageText,
	DetailDeadLineTitle,
	DetailDeadLineText,
} from './styles';

const DetailContent = ({
	detailTitle,
	detailDesc,
	recruitMembers,
	requireStack,
	serviceStep,
	period,
}: RecruitDetailConentDataType): JSX.Element => {
	return (
		<DetailContentContainer>
			<DetailSubTitle>{detailTitle}</DetailSubTitle>
			<DetailDescription dangerouslySetInnerHTML={{ __html: detailDesc }}></DetailDescription>

			<DetailRecruiteTitle>모집 인원</DetailRecruiteTitle>
			{recruitMembers.map((list, index) => (
				<DetailRecruiteList key={index}>
					{`- ${list.position}`}
					<span>{`${list.career}/${list.personner}명/~${list.deadline}까지`}</span>
				</DetailRecruiteList>
			))}

			<DetailStackTitle>기술 스택</DetailStackTitle>
			{requireStack.map((stack, index) => (
				<StackTag key={index}>{stack}</StackTag>
			))}

			<DetailStageTitle>개발 단계</DetailStageTitle>
			<DetailStageText>{serviceStep}</DetailStageText>

			<DetailDeadLineTitle>목표 기한</DetailDeadLineTitle>
			<DetailDeadLineText>{`~${period}`}</DetailDeadLineText>
		</DetailContentContainer>
	);
};
``;

export default DetailContent;
