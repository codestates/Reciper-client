import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

import RecruitCard from '../RecruitCard';
import Search from '../Search';

import { RecruitListDataType } from '../../../types/types';

import { CardListContainer, ObserveBlock } from './styles';

const RecruitCardList = (): JSX.Element => {
	const observeTarget = useRef<HTMLDivElement>(null);
	const [recruitList, setRecruitList] = useState<RecruitListDataType[]>([]);
	const [order, setOrder] = useState<number>(1);
	const [sortValue, setSortValue] = useState<string>('DESC');
	const [stackBucket, setStackBucket] = useState<string[]>([]);
	const [isEnd, setIsEnd] = useState<boolean>(false);

	const listDataRequest = async (isFilter: boolean) => {
		const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/filterRecruitList/${order}/DESC`, {
			searchStacksList: stackBucket,
		});

		setIsEnd(response.data.isEnd);

		if (isFilter) {
			setRecruitList(response.data.boardList);
		} else {
			setRecruitList([...recruitList, ...response.data.boardList]);
		}
	};

	useEffect(() => {
		if (!isEnd) {
			const infinite: IntersectionObserverCallback = ([entry], observer) => {
				if (entry.isIntersecting) {
					observer.unobserve(entry.target);
					setOrder(order + 1);
				}
			};

			const observer = new IntersectionObserver(infinite);
			observer.observe(observeTarget.current as Element);
		}
	}, [recruitList]);

	useEffect(() => {
		listDataRequest(false);
	}, [order]);

	useEffect(() => {
		setOrder(1);
		listDataRequest(true);
	}, [stackBucket, sortValue]);

	return (
		<CardListContainer>
			<Search stackBucket={stackBucket} setStackBucket={setStackBucket} setSortValue={setSortValue} />
			{recruitList && recruitList.map((data, index) => <RecruitCard key={index} data={data} />)}
			<ObserveBlock ref={observeTarget}></ObserveBlock>
		</CardListContainer>
	);
};

export default RecruitCardList;

// import axios from 'axios';
// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getListData, listDataSelector } from '../../../reducer/recruitList';
// import { RecruitListDataType } from '../../../types/types';

// import RecruitCard from '../RecruitCard';
// import Search from '../Search';

// import { CardListContainer } from './styles';

// const RecruitCardList = (): JSX.Element => {
// 	const dispath = useDispatch();
// 	const recruitListData = useSelector(listDataSelector);
// 	const observeTarget = useRef<HTMLDivElement>(null);
// 	const [order, setOrder] = useState<number>(1);
// 	const [sortValue, setSortValue] = useState<string>('DESC');
// 	const [stackBucket, setStackBucket] = useState<string[]>([]);
// 	const [list, setList] = useState<RecruitListDataType[]>([]);

// 	useEffect(() => {
// 		if (!recruitListData.data.isEnd && !recruitListData.loading) {
// 			const option = {
// 				threshold: 0,
// 			};

// 			const infinite: IntersectionObserverCallback = ([entry], observer) => {
// 				if (entry.isIntersecting) {
// 					observer.unobserve(entry.target);
// 					setOrder(order + 1);
// 				}
// 			};

// 			const observer = new IntersectionObserver(infinite, option);
// 			observer.observe(observeTarget.current as Element);
// 		}
// 	}, [recruitListData]);

// 	useEffect(() => {
// 		dispath(getListData({ order, sort: 'DESC', stacks: stackBucket }));
// 		setList([...list, ...recruitListData.data.boardList]);
// 	}, [order]);

// 	useEffect(() => {
// 		console.log(recruitListData.data.boardList);
// 		console.log('liiiiiist', list);
// 	}, [list]);

// 	console.log(order);

// 	return (
// 		<CardListContainer>
// 			<Search stackBucket={stackBucket} setStackBucket={setStackBucket} setSortValue={setSortValue} />
// 			{!recruitListData.loading && list.map((data, index) => <RecruitCard key={index} data={data} />)}
// 			<div style={{ width: '100%', height: '50px' }} ref={observeTarget}></div>
// 		</CardListContainer>
// 	);
// };
// export default RecruitCardList;
