import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Modal from '../components/Common/Modal';
import { axiosRequest } from '../utils/axios';
import getLoginInfo from '../utils/getLoginInfo';
import LoginModal from '../components/Common/LoginModal';
import Button from '../components/Common/Button';
import styled from 'styled-components';

const JoinProject = (): JSX.Element => {
	const history = useHistory();
	const url = new URL(window.location.href);

	const [isLogin, setIsLogin] = useState<boolean>(true);
	const [showModal, setShowModal] = useState<boolean>(false);

	useEffect(() => {
		const { email: loginEmail } = getLoginInfo();
		const authorizationCode = url.searchParams.get('code');
		const email = url.searchParams.get('email');
		const projectURL = url.searchParams.get('projectURL');

		if (email === loginEmail) {
			axiosRequest('post', '/projectParticipate', { email, authorizationCode, projectURL });
			history.push(`/workspace/${projectURL}/chat/General`);
		} else {
			setIsLogin(false);
		}
	}, [url]);

	return (
		<>
			{isLogin ? (
				<Container>
					<Text>워크 스페이스로 이동 중</Text>
				</Container>
			) : (
				<Container>
					<Text>로그인이 필요한 서비스입니다.</Text>
					<BtnWrap>
						<Button size="medium" clickEvent={() => setShowModal(true)}>
							로그인
						</Button>
					</BtnWrap>
					{showModal && (
						<Modal setShowModal={setShowModal}>
							<LoginModal />
						</Modal>
					)}
				</Container>
			)}
		</>
	);
};

const Container = styled.div`
	${({ theme }) => theme.align.positionCenter}
`;

const Text = styled.p`
	font-family: 'NanumsquareR';
	font-size: 24px;
`;

const BtnWrap = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
	margin-top: 30px;
`;

export default JoinProject;
