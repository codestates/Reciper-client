import React from 'react';
import { useSelector } from 'react-redux';

import StackTag from '../../Common/StackTag';

import { getRecruitDetailSelector } from '../../../reducer/recruitDetail';

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

const DetailContent = (): JSX.Element => {
	const { data } = useSelector(getRecruitDetailSelector);

	return (
		<DetailContentContainer>
			<DetailSubTitle>{data.detailTitle}</DetailSubTitle>
			<DetailDescription dangerouslySetInnerHTML={{ __html: data.detailDesc }}></DetailDescription>

			<DetailRecruiteTitle>모집 인원</DetailRecruiteTitle>
			{data.recruitMembers.map((list, index) => (
				<DetailRecruiteList key={index}>
					{`- ${list.position}`}
					<span>{`${list.career}/${list.personnel}명/~${list.deadline}까지`}</span>
				</DetailRecruiteList>
			))}

			<DetailStackTitle>기술 스택</DetailStackTitle>
			{data.requireStack.map((stack, index) => (
				<StackTag key={index}>{stack}</StackTag>
			))}

			<DetailStageTitle>개발 단계</DetailStageTitle>
			<DetailStageText>{data.serviceStep}</DetailStageText>

			<DetailDeadLineTitle>목표 기한</DetailDeadLineTitle>
			<DetailDeadLineText>{`~${data.period}`}</DetailDeadLineText>
		</DetailContentContainer>
	);
};
``;

export default DetailContent;
