import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getProfileInfoSelector } from '../../../reducer/profile';
import { RecruitDetailCommentDataType, RecruitWriterDataType } from '../../../types/types';
import getLoginInfo from '../../../utils/getLoginInfo';

import DetailComment from '../DetailComment';
import DetailContent from '../DetailContent';
import DetailTop from '../DetailTop';
import DetailWriter from '../DetailWriter';

import { DeleteBtn, DeleteBtnWrap, FullDiv } from './styles';
import { Container } from './styles';

const DetailContainer = (): JSX.Element => {
	const history = useHistory();
	const { id: params } = useParams<{ id: string }>();
	const userInfo = useSelector(getProfileInfoSelector);

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

	const isMadeByMe = userInfo.id === writerData.id;

	useEffect(() => {
		// redux로 수정 예정
		axios.get(`${process.env.REACT_APP_SERVER_URL}/recruitBoard/${params}`).then(data => {
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
			console.log(writer);
			console.log(userInfo);
		});
	}, []);

	const onDeleteBoard = () => {
		const { accessToken, loginType } = getLoginInfo();

		axios
			.delete(`${process.env.REACT_APP_SERVER_URL}/recruitBoard/${params}`, {
				headers: { authorization: `Bearer ${accessToken}`, loginType },
			})
			.then(() => history.push('/recruit'));
	};

	return (
		<FullDiv>
			<Container>
				<DeleteBtnWrap>{isMadeByMe && <DeleteBtn onClick={onDeleteBoard}>게시글 삭제</DeleteBtn>}</DeleteBtnWrap>
				<DetailTop {...topData} />
				<DetailContent {...contentData} />
				<DetailWriter writerData={writerData} />
				<DetailComment commentListData={commentListData} params={params} />
			</Container>
		</FullDiv>
	);
};

export default DetailContainer;
