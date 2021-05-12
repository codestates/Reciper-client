import React from 'react';

import StackTag from '../../Common/StackTag';

import {
	CardContainer,
	CardImgContainer,
	CardInfoContainer,
	CardInfoContent,
	CardInfoStackContainer,
	CardInfoTitle,
	CardInfoWriter,
	CardTimeStamp,
	CardViewIcon,
	CardCommentIcon,
} from './styles';

interface Props {
	path: string;
}

const RecruitCard = ({ path }: Props): JSX.Element => {
	const ex = ['React', 'Express']; // 디자인 확인용 데이터입니다. 삭제 바람

	return (
		<CardContainer to={`/recruit/${path}`}>
			<CardImgContainer></CardImgContainer>
			<CardInfoContainer>
				<CardInfoTitle>Reciper 같이 만드실 분 구합니다.</CardInfoTitle>
				<CardInfoWriter>
					by Woogie
					<span>
						<CardViewIcon /> 12
					</span>
					<span>
						<CardCommentIcon /> 1
					</span>
				</CardInfoWriter>
				<CardInfoContent>
					우당탕탕 프로젝트 만들기 디자인, 기획부터 개발, 배포까지! 어느 하나 쉬운게 없네
				</CardInfoContent>
				<CardInfoStackContainer>
					{ex.map((stack, index) => (
						<StackTag key={index}>{stack}</StackTag>
					))}
				</CardInfoStackContainer>
				<CardTimeStamp>23분 전</CardTimeStamp>
			</CardInfoContainer>
		</CardContainer>
	);
};

export default RecruitCard;
