import React, { useState } from 'react';
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

const LoginModal = (): JSX.Element => {
	const [changeGuide, setChangeGuide] = useState(false);

	const onChangeGuideText = () => {
		return changeGuide ? '회원가입' : '로그인';
	};

	return (
		<LoginModalContainer>
			<LoginTitle>{onChangeGuideText()}</LoginTitle>
			<EmailLoginForm>
				<input placeholder="이메일을 입력하세요." />
				<button>{onChangeGuideText()}</button>
			</EmailLoginForm>
			<Line />
			<GoogleLoginBtn>
				<GoogleIcon />
				구글 이메일로 로그인
			</GoogleLoginBtn>
			<GithubLoginBtn>
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
