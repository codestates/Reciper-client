import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Aa = styled.div`
	${({ theme }) => theme.align.flexCenter}
	flex-direction: column;
	height: 100vh;
`;

const Tt = styled.p`
	font-family: 'NanumSquareR';
	font-size: 30px;
	margin-bottom: 40px;
`;

const Bb = styled(Link)`
	${({ theme }) => theme.align.flexCenter}
	width: 200px;
	height: 40px;
	font-family: 'NanumSquareB';
	color: #fff;
	background-color: #478bff;
	border-radius: 3px;
`;

const WorkSpace = (): JSX.Element => {
	return (
		<Aa>
			<Tt>아직 개발 중입니다.</Tt>
			<Bb to="/project">돌아가기</Bb>
		</Aa>
	);
};

export default WorkSpace;
