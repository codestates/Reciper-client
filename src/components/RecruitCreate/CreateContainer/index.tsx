import React, { useEffect, useState } from 'react';

import CreateTop from '../CreateTop';
import CreateBottom from '../CreateBottom';

import { FullDiv, Container, CreateTitleInput, CreateBtnWrap } from './styles';
import Button from '../../Common/Button';
import { recruitCreateDataType, recruitCreateBottomDataType, recruitCreateTopDataType } from '../../../types/types';
import axios from 'axios';
import useInput from '../../../hooks/useInput';
import { useHistory } from 'react-router';

const CreaateContainer = (): JSX.Element => {
	const history = useHistory();
	const [name, onChangeName] = useInput<string>('');
	const [topMockData, setTopMockData] = useState<recruitCreateTopDataType>({
		simpleDesc: '',
		recruitMembers: [{ position: '', career: '', personnel: '', deadline: '' }],
		requireStack: [],
		serviceStep: '',
		period: '',
	});
	const [bottomMockData, setBottomMockData] = useState<recruitCreateBottomDataType>({
		detailTitle: '',
		detailDesc: '',
		uploadImage: '',
	});
	const [mockData, setMockData] = useState<recruitCreateDataType>({
		name,
		...topMockData,
		...bottomMockData,
	});

	useEffect(() => {
		setMockData({ name, ...topMockData, ...bottomMockData });
	}, [topMockData, bottomMockData, name]);

	const onResponseCreateData = () => {
		const getLoginInfo = localStorage.getItem('loginInfo');
		const { accessToken, loginType } = JSON.parse(getLoginInfo as string);

		axios
			.post(`${process.env.REACT_APP_SERVER_URL}/recruitBoard`, mockData, {
				headers: { authorization: `Bearer ${accessToken}`, loginType },
			})
			.then(() => history.push('/recruit'));

		/*
			input이 비어 있으면 - textForm
			모집 인원 데이터가 빈 배열이면 - membersForm
			기술 스택 데이터가 빈 배열이면 - stacksForm
			서비스 단계의 텍스트가 서비스 단계면 - stepForm
			예상 기간의 텍스트가 예상 기간이면 - preiodForm
			소개 글이 비어 있으면 - detailDescForm
		*/
	};

	return (
		<FullDiv>
			<Container>
				<CreateTitleInput placeholder="레시피 이름을 입력하세요" onChange={onChangeName} />
				<CreateTop setTopMockData={setTopMockData} />
				<CreateBottom setBottomMockData={setBottomMockData} />
				<CreateBtnWrap>
					<Button size="medium" clickEvent={onResponseCreateData}>
						모집 작성
					</Button>
				</CreateBtnWrap>
			</Container>
		</FullDiv>
	);
};

export default CreaateContainer;
