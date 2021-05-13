import React, { useState } from 'react';

import CreateTop from '../CreateTop';
import CreateBottom from '../CreateBottom';

import { FullDiv, Container, CreateTitleInput, CreateBtnWrap } from './styles';
import Button from '../../Common/Button';
import { recruitCreateDataType, recruitMembersDataType } from '../../../types/types';

const CreaateContainer = (): JSX.Element => {
	const [mockData, setMockData] = useState<recruitCreateDataType>({
		name: '',
		simple_desc: '',
		recruit_members: { position: '', career: '', personnel: '', deadline: '' },
		require_stack: '',
		service_step: '',
		period: '',
		detail_title: '',
		detail_desc: '',
	});

	return (
		<FullDiv>
			<Container>
				<CreateTitleInput placeholder="레시피 이름을 입력하세요" />
				<CreateTop setMockData={setMockData} />
				<CreateBottom />
				<CreateBtnWrap>
					<Button size="medium" clickEvent={() => console.log(mockData)}>
						모집 작성
					</Button>
				</CreateBtnWrap>
			</Container>
		</FullDiv>
	);
};

export default CreaateContainer;
