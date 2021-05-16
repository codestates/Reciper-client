import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { RecruitListDataType } from '../../../types/types';
import getLoginInfo from '../../../utils/getLoginInfo';

import RecruitCard from '../RecruitCard';
import Search from '../Search';

import { CardListContainer } from './styles';

const RecruitCardList = (): JSX.Element => {
	const observeTarget = useRef<HTMLDivElement>(null);
	const [recruitList, setRecruitList] = useState<RecruitListDataType[]>([]);
	const [order, setOrder] = useState<number>(1);

	const option = {
		root: null,
		rootMargin: '0px',
		threshold: 0,
	};

	const infinite = () => {
		setOrder(order + 1);
		console.log(order);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(infinite, option);

		if (observeTarget.current) {
			observer.observe(observeTarget.current as Element);
		}

		const { accessToken, loginType } = getLoginInfo();

		// redux로 변경 예정
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/recruitList/${order}`, {
				headers: { authorization: `Bearer ${accessToken}`, loginType },
			})
			.then(data => {
				setRecruitList([...recruitList, ...data.data.boardList]);
			});
	}, []);

	return (
		<CardListContainer>
			<Search />
			{recruitList && recruitList.map((data, index) => <RecruitCard key={index} data={data} />)}
			<div ref={observeTarget}></div>
		</CardListContainer>
	);
};
export default RecruitCardList;
