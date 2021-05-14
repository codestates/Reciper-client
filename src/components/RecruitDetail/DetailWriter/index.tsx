import React from 'react';

import { DetailWriterContainer, DetailWriterTitle, DetailWriterInfo } from './styles';

const DetailWriter = (): JSX.Element => {
	return (
		<DetailWriterContainer>
			<DetailWriterTitle>담당자 연락처</DetailWriterTitle>
			<DetailWriterInfo>
				<p>이름</p> <span>곽은욱</span>
			</DetailWriterInfo>
			<DetailWriterInfo>
				<p>이메일</p> <span>dmsdnr9411@gmail.com</span>
			</DetailWriterInfo>
			<DetailWriterInfo>
				<p>전화번호</p> <span>010-1234-1234</span>
			</DetailWriterInfo>
		</DetailWriterContainer>
	);
};

export default DetailWriter;
