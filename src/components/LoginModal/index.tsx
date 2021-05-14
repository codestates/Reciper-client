import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

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

import useInput from '../../hooks/useInput';

const LoginModal = (): JSX.Element => {
	const history = useHistory();
	const [email, onChangeEmail] = useInput<string>('');
	const [changeGuide, setChangeGuide] = useState<boolean>(false);

	const onChangeGuideText = useCallback((): string => {
		return changeGuide ? '회원가입' : '로그인';
	}, []);

	const onLogin = useCallback(
		(type: string): void => {
			window.localStorage.setItem('location', history.location.pathname);

			if (type === 'google') {
				window.location.assign(`${process.env.REACT_APP_GOOGLE_LOGIN_URL}`);
			}
			if (type === 'github') {
				window.location.assign(`${process.env.REACT_APP_GITHUB_LOGIN_URL}`);
			}
			if (type === 'email') {
				axios.post(`${process.env.REACT_APP_SERVER_URL}/sendEmail`, { email });
				alert('해당 메일에 인증번호가 전송되었습니다.');
			}
		},
		[email],
	);

	return (
		<LoginModalContainer>
			<LoginTitle>{onChangeGuideText()}</LoginTitle>
			<EmailLoginForm>
				<Input width="short" height="short" placeholderText="이메일을 입력하세요." changeEvent={onChangeEmail} />
				<Button size="small" clickEvent={() => onLogin('email')}>
					{onChangeGuideText()}
				</Button>
			</EmailLoginForm>
			<Line />
			<GoogleLoginBtn onClick={() => onLogin('google')}>
				<GoogleIcon />
				구글 이메일로 로그인
			</GoogleLoginBtn>
			<GithubLoginBtn onClick={() => onLogin('github')}>
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
