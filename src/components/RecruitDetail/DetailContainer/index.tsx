import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { RecruitDetailCommentDataType, RecruitWriterDataType } from '../../../types/types';

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

	const [commentListData, setCommentListData] = useState<RecruitDetailCommentDataType[]>([
		{
			id: 0,
			body: '',
			createdAt: '',
			updatedAt: '',
			writer: {
				aboutMe: '',
				career: '',
				createdAt: '',
				email: '',
				gitId: '',
				id: 0,
				isOpen: false,
				mobile: '',
				name: '',
				profileColor: '',
				updatedAt: '',
				uploadImage: '',
			},
		},
	]);

	const [writerData, setWriterData] = useState<RecruitWriterDataType>({
		aboutMe: '',
		career: '',
		createdAt: '',
		email: '',
		gitId: '',
		id: 0,
		isOpen: false,
		mobile: '',
		name: '',
		profileColor: '',
		updatedAt: '',
		uploadImage: '',
	});

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
					writer,
				} = data.data;

				setTopData({ name, view, commentCount: commentsList.length, simpleDesc });
				setContentData({ detailTitle, uploadImage, detailDesc, recruitMembers, requireStack, serviceStep, period });
				setCommentListData(commentsList);
				setWriterData(writer);
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
				<DetailWriter writerData={writerData} />
				<DetailComment commentListData={commentListData} params={params} />
			</Container>
		</FullDiv>
	);
};

export default DetailContainer;
