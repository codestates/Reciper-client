import React from 'react';

import RecruitCard from '../RecruitCard';
import Search from '../Search';

import { CardListContainer } from './styles';

const RecruitCardList = (): JSX.Element => {
	const ex = ['1', '2', '3', '4', '5', '6']; // 디자인 확인용 데이터입니다. 삭제 바람
	return (
		<CardListContainer>
			<Search />
			{ex.map((card, index) => (
				<RecruitCard key={index} path={card} />
			))}
		</CardListContainer>
	);
};
export default RecruitCardList;
