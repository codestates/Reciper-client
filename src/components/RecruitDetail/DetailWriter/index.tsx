import React from 'react';
import { RecruitDetailWriterDataType } from '../../../types/types';

import { DetailWriterContainer, DetailWriterTitle, DetailWriterInfo } from './styles';

interface Props {
	writerData: RecruitDetailWriterDataType;
}

const DetailWriter = ({ writerData }: Props): JSX.Element => {
	const loginSuccess = localStorage.getItem('loginSuccess');
	console.log(loginSuccess);

	return (
		<DetailWriterContainer>
			<DetailWriterTitle>담당자 연락처</DetailWriterTitle>
			<DetailWriterInfo>
				<p>이름</p> <span>{writerData.name}</span>
			</DetailWriterInfo>
			<DetailWriterInfo>
				<p>이메일</p> <span>{loginSuccess === 'success' ? writerData.email : '로그인 후 확인 가능합니다.'}</span>
			</DetailWriterInfo>
			<DetailWriterInfo>
				<p>전화번호</p> <span>{loginSuccess === 'success' ? writerData.mobile : '로그인 후 확인 가능합니다.'}</span>
			</DetailWriterInfo>
		</DetailWriterContainer>
	);
};

export default DetailWriter;
