import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RecruitListDataType } from '../../../types/types';

import RecruitCard from '../RecruitCard';
import Search from '../Search';

import { CardListContainer } from './styles';

const RecruitCardList = (): JSX.Element => {
	const observeTarget = useRef<HTMLDivElement>(null);
	const [recruitList, setRecruitList] = useState<RecruitListDataType[]>([]);
	const [order, setOrder] = useState<number>(1);
	const [sortValue, setSortValue] = useState<string>('DESC');
	const [stackBucket, setStackBucket] = useState<string[]>([]);

	useEffect(() => {
		if (recruitList.length >= 1 && recruitList[recruitList.length - 1].id !== 1) {
			const option = {
				threshold: 0,
			};

			const infinite: IntersectionObserverCallback = ([entry], observer) => {
				if (entry.isIntersecting) {
					observer.unobserve(entry.target);
					setOrder(order + 1);
				}
			};

			const observer = new IntersectionObserver(infinite, option);
			observer.observe(observeTarget.current as Element);
		}
	}, [recruitList]);

	useEffect(() => {
		// redux로 변경 예정
		// 필터는 정상 작동 하지만 order의 중단 점을 찾지 못해 인피니티 스크롤이 끝 없이 돌아 감
		axios
			.post(`${process.env.REACT_APP_SERVER_URL}/filterRecruitList/${order}/DESC`, {
				searchStacksList: stackBucket,
			})
			.then(data => {
				console.log(data);
				setRecruitList([...data.data.boardList]);
			});
	}, [order, stackBucket, sortValue]);
	console.log(stackBucket, sortValue);
	console.log(recruitList);

	return (
		<CardListContainer>
			<Search stackBucket={stackBucket} setStackBucket={setStackBucket} setSortValue={setSortValue} />
			{recruitList && recruitList.map((data, index) => <RecruitCard key={index} data={data} />)}
			<div style={{ width: '100%', height: '50px' }} ref={observeTarget}></div>
		</CardListContainer>
	);
};
export default RecruitCardList;
