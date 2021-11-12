import React, { useCallback, useEffect, useRef, useState } from 'react';

import RecruitCard from '../RecruitCard';
import Search from '../Search';
import SkeletonLoading from '../SkeletonLoading';

import { REQUEST_STATE } from '../../../types/types';

import { CardListContainer, EmptyList } from './styles';
import emptyListImage from '../../../images/empty_list.svg';
import { getRecruitData, recruitSelector, resetList } from '../../../reducer/recruit';
import { useDispatch, useSelector } from 'react-redux';

const RecruitCardList = (): JSX.Element => {
	const observeTarget = useRef<HTMLAnchorElement>(null);
	const [order, setOrder] = useState<number>(1);

	const dispatch = useDispatch();
	const { requsetState, recruitList, isEnd, isEmpty, stacks, sortValue } = useSelector(recruitSelector);

	const infiniteScroll = useCallback(
		([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			if (entry.isIntersecting) {
				observer.unobserve(entry.target);
				setOrder(order => order + 1);
				dispatch(getRecruitData({ order, sortValue, stacks }));
			}
		},
		[order, stacks, sortValue],
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		dispatch(resetList());
		dispatch(getRecruitData({ order: 1, stacks, sortValue }));
	}, [stacks, sortValue]);

	useEffect(() => {
		if (isEnd || !observeTarget.current) return;

		const observer = new IntersectionObserver(infiniteScroll, { threshold: 0 });

		observer.observe(observeTarget.current as Element);
	}, [recruitList, isEnd]);

	return (
		<CardListContainer>
			<Search />

			{recruitList.map((data, index) => {
				const lastCard = recruitList.length === index + 1;

				return <RecruitCard key={index} data={data} observeTarget={lastCard ? observeTarget : null} />;
			})}

			{requsetState === REQUEST_STATE.PENDING && <SkeletonLoading />}

			{isEmpty && requsetState === REQUEST_STATE.SUCCESS && (
				<EmptyList>
					<img src={emptyListImage} />
					<p>검색 결과가 없습니다.</p>
				</EmptyList>
			)}
		</CardListContainer>
	);
};

export default RecruitCardList;
