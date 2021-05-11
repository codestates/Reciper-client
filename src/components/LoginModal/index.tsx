import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../Common/Button';
import Input from '../Common/Input';
import {
	LoginTitle,
	EmailLoginForm,
	LoginModalContainer,
	Line,
	GoogleLoginBtn,
	GithubLoginBtn,
	GithubIcon,
	GoogleIcon,
	LoginGuideText,
} from './styles';
import axios from 'axios';

const LoginModal = (): JSX.Element => {
	const [changeGuide, setChangeGuide] = useState(false);
	const history = useHistory();

	const onChangeGuideText = () => {
		return changeGuide ? '회원가입' : '로그인';
	};

	const onEmailLogin = () => {
		console.log('되겠지???');
		const data = { email: 'keu1106@naver.com' };
		axios.post(`${process.env.REACT_APP_SERVER_URL}/sendEmail`, data);
		alert('해당 메일에 인증번호가 전송되었습니다.');
	};

	const onGithubLogin = () => {
		window.localStorage.setItem('location', JSON.stringify(history.location.pathname));
		window.location.assign(`${process.env.REACT_APP_GITHUB_LOGIN_URL}`);
	};

	const onGoogleLogin = () => {
		window.localStorage.setItem('location', JSON.stringify(history.location.pathname));
		window.location.assign(`${process.env.REACT_APP_GOOGLE_LOGIN_URL}`);
	};

	return (
		<LoginModalContainer>
			<LoginTitle>{onChangeGuideText()}</LoginTitle>
			<EmailLoginForm>
				<Input width="short" height="short" placeholderText="이메일을 입력하세요." />
				<Button size="small" onEvent={onEmailLogin}>
					{onChangeGuideText()}
				</Button>
			</EmailLoginForm>
			<Line />
			<GoogleLoginBtn onClick={onGoogleLogin}>
				<GoogleIcon />
				구글 이메일로 로그인
			</GoogleLoginBtn>
			<GithubLoginBtn onClick={onGithubLogin}>
				<GithubIcon />
				깃허브 아이디로 로그인
			</GithubLoginBtn>
			<LoginGuideText>
				{changeGuide ? '계정이 이미 있으신가요?' : '아직 회원이 아니신가요?'}
				<span onClick={() => setChangeGuide(!changeGuide)}>회원가입</span>
			</LoginGuideText>
		</LoginModalContainer>
	);
};

export default LoginModal;
