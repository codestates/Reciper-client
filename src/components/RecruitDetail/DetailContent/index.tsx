import React from 'react';

import StackTag from '../../Common/StackTag';

import {
	DetailContentContainer,
	DetailDescription,
	DetailImg,
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
	const recruitEx = [
		// 디자인 확인용 데이터입니다. 삭제 바람
		{ position: '프론트엔드', career: '경력무관', personnel: '2', deadline: '2021-07-01' },
		{ position: '백엔드', career: '2년 이상', personnel: '1', deadline: '2021-09-01' },
	];
	const stackEx = ['React', 'Typescript']; // 디자인 확인용 데이터입니다. 삭제 바람

	return (
		<DetailContentContainer>
			<DetailSubTitle>Reciper 같이 만드실 분 구합니다.</DetailSubTitle>
			<DetailImg />
			<DetailDescription>
				프로젝트 협업 커뮤니티 겸 협업을 위한 툴을 제작하려 합니다. <br /> 기본적이 아이디어 구상은 끝 마쳤으나 변경이
				필요한 부분이나 부족한 부분을 같이 채워 나갈 개발자를 구하고 있습니다. <br /> 현재 프론트엔드 개발자 한 분과
				백엔드 개발자 한 분이 있고 추가적으로 프론트엔드 백엔드 개발자 두 분을 더 모시려고 합니다.
			</DetailDescription>

			<DetailRecruiteTitle>모집 인원</DetailRecruiteTitle>
			{recruitEx.map((list, index) => (
				<DetailRecruiteList key={index}>
					{`- ${list.position}`}
					<span>{`${list.career}/${list.personnel}명/~${list.deadline}까지`}</span>
				</DetailRecruiteList>
			))}

			<DetailStackTitle>기술 스택</DetailStackTitle>
			{stackEx.map((stack, index) => (
				<StackTag key={index}>{stack}</StackTag>
			))}

			<DetailStageTitle>개발 단계</DetailStageTitle>
			<DetailStageText>초기 개발 단계</DetailStageText>

			<DetailDeadLineTitle>목표 기한</DetailDeadLineTitle>
			<DetailDeadLineText>~2021-06-07</DetailDeadLineText>
		</DetailContentContainer>
	);
};
``;

export default DetailContent;
