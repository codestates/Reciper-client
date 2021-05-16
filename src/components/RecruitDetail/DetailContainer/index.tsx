import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import DetailComment from '../DetailComment';
import DetailContent from '../DetailContent';
import DetailTop from '../DetailTop';
import DetailWriter from '../DetailWriter';

import { FullDiv } from './styles';
import { Container } from './styles';

const DetailContainer = (): JSX.Element => {
	const { id: params } = useParams<{ id: string }>();

	const [topData, setTopData] = useState({
		name: '',
		view: 0,
		commentCount: 0,
		simpleDesc: '',
	});

	const [contentData, setContentData] = useState({
		detailTitle: '',
		uploadImage: '',
		detailDesc: '',
		recruitMembers: [],
		requireStack: [],
		serviceStep: '',
		period: '',
	});

	const [commentListData, setCommentListData] = useState([]);

	useEffect(() => {
		const localStorage_loginInfo = window.localStorage.getItem('loginInfo') as string;
		const { accessToken, loginType } = JSON.parse(localStorage_loginInfo);

		// redux로 수정 예정
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/recruitBoard/${params}`, {
				headers: { authorization: `Bearer ${accessToken}`, loginType },
			})
			.then(data => {
				console.log(data.data);
				const {
					name,
					commentsList,
					view,
					simpleDesc,
					detailTitle,
					uploadImage,
					detailDesc,
					recruitMembers,
					requireStack,
					serviceStep,
					period,
				} = data.data;

				setTopData({ name, view, commentCount: commentsList.length, simpleDesc });
				setContentData({ detailTitle, uploadImage, detailDesc, recruitMembers, requireStack, serviceStep, period });
				setCommentListData(commentsList);
			});
	}, []);

	/*
		top = name, commantList.length, view, simpleDesc
		content = detailTitle, uploadImage, detailDesc, recruitMembers, requireStack, serviceStep, period
	*/
	return (
		<FullDiv>
			<Container>
				<DetailTop {...topData} />
				<DetailContent {...contentData} />
				<DetailWriter />
				<DetailComment commentListData={commentListData} params={params} />
			</Container>
		</FullDiv>
	);
};

export default DetailContainer;
