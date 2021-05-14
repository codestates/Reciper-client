import React, { ChangeEvent, useEffect, useState } from 'react';

import CreateTop from '../CreateTop';
import CreateBottom from '../CreateBottom';

import { FullDiv, Container, CreateTitleInput, CreateBtnWrap } from './styles';
import Button from '../../Common/Button';
import { recruitCreateDataType, recruitCreateBottomDataType, recruitCreateTopDataType } from '../../../types/types';
import axios from 'axios';
import useInput from '../../../hooks/useInput';

const CreaateContainer = (): JSX.Element => {
	const [name, onChangeName] = useInput<string>('');
	const [topMockData, setTopMockData] = useState<recruitCreateTopDataType>({
		simple_desc: '',
		recruit_members: [{ position: '', career: '', personnel: '', deadline: '' }],
		require_stack: [],
		service_step: '',
		period: '',
	});
	const [bottomMockData, setBottomMockData] = useState<recruitCreateBottomDataType>({
		detail_title: '',
		detail_desc: '',
	});
	const [mockData, setMockData] = useState<recruitCreateDataType>({
		name,
		...topMockData,
		...bottomMockData,
	});

	useEffect(() => {
		setMockData({ name, ...topMockData, ...bottomMockData });
	}, [topMockData, bottomMockData]);

	const onResponseCreateData = () => {
		const getLoginInfo = localStorage.getItem('loginInfo');
		const { accessToken, loginType } = JSON.parse(getLoginInfo as string);

		console.log(mockData);

		axios
			.post(`${process.env.REACT_APP_SERVER_URL}/recruitBoard`, mockData, {
				headers: { authorization: `Bearer ${accessToken}`, loginType },
			})
			.then(data => console.log('전송', data.data));
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
