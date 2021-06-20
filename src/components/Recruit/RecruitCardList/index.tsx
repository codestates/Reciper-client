import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import RecruitCard from '../RecruitCard';
import Search from '../Search';

import { RecruitListDataType } from '../../../types/types';

import { CardListContainer, ObserveBlock } from './styles';
import SkeletonLoading from '../SkeletonLoading';

const RecruitCardList = (): JSX.Element => {
	const observeTarget = useRef<HTMLDivElement>(null);
	const [recruitList, setRecruitList] = useState<RecruitListDataType[]>([]);
	const [order, setOrder] = useState<number>(1);
	const [sortValue, setSortValue] = useState<string>('DESC');
	const [stackBucket, setStackBucket] = useState<string[]>([]);
	const [isEnd, setIsEnd] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const listDataRequest = useCallback(
		async (isFilter: boolean) => {
			setIsLoading(false);

			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/filterRecruitList/${order}/${sortValue || 'DESC'}`,
				{
					searchStacksList: stackBucket,
				},
			);

			setIsEnd(response.data.isEnd);

			// 스켈레톤 로딩을 보여주기 위해 약간의 지연 시간을 걸어줌!!
			setTimeout(() => {
				if (isFilter) {
					setRecruitList(response.data.boardList);
				} else {
					setRecruitList([...recruitList, ...response.data.boardList]);
				}
			}, 200);
		},
		[recruitList, stackBucket, sortValue],
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		setIsLoading(true);

		if (!isEnd) {
			const infinite: IntersectionObserverCallback = ([entry], observer) => {
				if (entry.isIntersecting) {
					observer.unobserve(entry.target);
					setOrder(order => order + 1);
				}
			};

			const observer = new IntersectionObserver(infinite, { rootMargin: '200px', threshold: 0 });

			observer.observe(observeTarget.current as Element);
		}
	}, [recruitList]);

	useEffect(() => {
		if (order > 1) {
			listDataRequest(false);
		} else {
			listDataRequest(true);
		}
	}, [order]);

	useEffect(() => {
		setOrder(1);
		listDataRequest(true);
	}, [stackBucket, sortValue]);

	return (
		<CardListContainer>
			<Search
				stackBucket={stackBucket}
				setStackBucket={setStackBucket}
				setSortValue={setSortValue}
				setOrder={setOrder}
			/>
			{recruitList && recruitList.map((data, index) => <RecruitCard key={index} data={data} />)}
			{!isLoading && <SkeletonLoading />}
			<ObserveBlock ref={observeTarget}></ObserveBlock>
		</CardListContainer>
	);
};

export default RecruitCardList;
