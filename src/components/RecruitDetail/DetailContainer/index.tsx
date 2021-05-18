import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import DetailComment from '../DetailComment';
import DetailContent from '../DetailContent';
import DetailTop from '../DetailTop';
import DetailWriter from '../DetailWriter';

import { getProfileInfoSelector } from '../../../reducer/profile';
import { deleteDetailData, getDetailData, getRecruitDetailSelector } from '../../../reducer/recruitDetail';

import { DeleteBtn, DeleteBtnWrap, FullDiv } from './styles';
import { Container } from './styles';

const DetailContainer = (): JSX.Element => {
	const dispatch = useDispatch();
	const { id: params } = useParams<{ id: string }>();
	const userInfo = useSelector(getProfileInfoSelector);
	const detailData = useSelector(getRecruitDetailSelector);

	const [isMadeByMe, setIsMadeByMe] = useState<boolean>(false);

	useEffect(() => {
		dispatch(getDetailData(params));
	}, []);

	useEffect(() => {
		const { writer } = detailData.data;
		setIsMadeByMe(userInfo.id === writer.id);
	}, [detailData]);

	const onDeleteBoard = () => {
		dispatch(deleteDetailData(params));
	};

	return (
		<FullDiv>
			<Container>
				<DeleteBtnWrap>{isMadeByMe && <DeleteBtn onClick={onDeleteBoard}>게시글 삭제</DeleteBtn>}</DeleteBtnWrap>
				<DetailTop />
				<DetailContent />
				<DetailWriter />
				<DetailComment params={params} />
			</Container>
		</FullDiv>
	);
};

export default DetailContainer;
