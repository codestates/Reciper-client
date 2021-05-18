import React from 'react';
import { useSelector } from 'react-redux';

import { getRecruitDetailSelector } from '../../../reducer/recruitDetail';

import { DetailWriterContainer, DetailWriterTitle, DetailWriterInfo } from './styles';

const DetailWriter = (): JSX.Element => {
	const { data } = useSelector(getRecruitDetailSelector);
	const loginSuccess = localStorage.getItem('loginSuccess');

	return (
		<DetailWriterContainer>
			<DetailWriterTitle>담당자 연락처</DetailWriterTitle>
			<DetailWriterInfo>
				<p>이름</p> <span>{data.writer.name}</span>
			</DetailWriterInfo>
			<DetailWriterInfo>
				<p>이메일</p> <span>{loginSuccess === 'success' ? data.writer.email : '로그인 후 확인 가능합니다.'}</span>
			</DetailWriterInfo>
			<DetailWriterInfo>
				<p>전화번호</p> <span>{loginSuccess === 'success' ? data.writer.mobile : '로그인 후 확인 가능합니다.'}</span>
			</DetailWriterInfo>
		</DetailWriterContainer>
	);
};

export default DetailWriter;
