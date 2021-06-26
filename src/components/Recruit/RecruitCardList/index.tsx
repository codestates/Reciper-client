import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import RecruitCard from '../RecruitCard';
import Search from '../Search';
import SkeletonLoading from '../SkeletonLoading';

import { RecruitListDataType } from '../../../types/types';

import { CardListContainer, EmptyList, ObserveBlock } from './styles';
import emptyListImage from '../../../images/empty_list.svg';

const RecruitCardList = (): JSX.Element => {
	const observeTarget = useRef<HTMLDivElement>(null);
	const [recruitList, setRecruitList] = useState<RecruitListDataType[]>([]);
	const [order, setOrder] = useState<number>(1);
	const [sortValue, setSortValue] = useState<string>('DESC');
	const [stackBucket, setStackBucket] = useState<string[]>([]);
	const [isEnd, setIsEnd] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isEmptyList, setIsEmptyList] = useState<boolean>(false);
	const [throttleWaiting, setThrottleWaiting] = useState<boolean>(false);

	const throttle = useCallback(
		(callback: (isFilter: boolean) => void, isFilter: boolean, delay: number) => {
			if (!throttleWaiting) {
				callback(isFilter);
				setThrottleWaiting(true);

				setTimeout(() => {
					setThrottleWaiting(false);
				}, delay);
			}
		},
		[throttleWaiting],
	);

	const listDataRequest = useCallback(
		async (isFilter: boolean) => {
			setIsLoading(false);
			setIsEmptyList(false);

			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/filterRecruitList/${order}/${sortValue || '최신 순'}`,
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

				if (response.data.boardList.length === 0) {
					setIsEmptyList(true);
				}
			}, 300);
		},
		[recruitList, order, stackBucket, sortValue],
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		setIsLoading(true);

		if (!isEnd) {
			const infinite = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
				if (entry.isIntersecting) {
					observer.unobserve(entry.target);

					setOrder(order => order + 1);
				}
			};

			const observer = new IntersectionObserver(infinite, { rootMargin: '600px', threshold: 0 });

			observer.observe(observeTarget.current as Element);
		}
	}, [recruitList, isEnd]);

	useEffect(() => {
		setOrder(1);
	}, [stackBucket, sortValue]);

	useEffect(() => {
		const listDebounce = setTimeout(() => {
			if (order > 1) {
				throttle(listDataRequest, false, 500);
			} else {
				throttle(listDataRequest, true, 500);
			}
		}, 0);

		return () => {
			clearTimeout(listDebounce);
		};
	}, [order, stackBucket, sortValue]);

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
			{isEmptyList && isLoading && (
				<EmptyList>
					<img src={emptyListImage} />
					<p>검색 결과가 없습니다.</p>
				</EmptyList>
			)}
			<ObserveBlock ref={observeTarget}></ObserveBlock>
		</CardListContainer>
	);
};

export default RecruitCardList;
