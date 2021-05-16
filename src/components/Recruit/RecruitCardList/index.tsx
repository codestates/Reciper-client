import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RecruitListDataType } from '../../../types/types';
import getLoginInfo from '../../../utils/getLoginInfo';

import RecruitCard from '../RecruitCard';
import Search from '../Search';

import { CardListContainer } from './styles';

const RecruitCardList = (): JSX.Element => {
	const observeTarget = useRef<HTMLDivElement>(null);
	const [recruitList, setRecruitList] = useState<RecruitListDataType[]>([]);
	const [order, setOrder] = useState<number>(1);

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
		const { accessToken, loginType } = getLoginInfo();

		// redux로 변경 예정
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/recruitList/${order}`, {
				headers: { authorization: `Bearer ${accessToken}`, loginType },
			})
			.then(data => {
				setRecruitList([...recruitList, ...data.data.boardList]);
			});
	}, [order]);

	console.log(recruitList);

	return (
		<CardListContainer>
			<Search />
			{recruitList && recruitList.map((data, index) => <RecruitCard key={index} data={data} />)}
			<div style={{ width: '100%', height: '50px' }} ref={observeTarget}></div>
		</CardListContainer>
	);
};
export default RecruitCardList;
