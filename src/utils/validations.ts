export const emailValid = (email: string): boolean => {
	const emailPattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	const pass = emailPattern.test(email);

	return pass;
};

export const projectNameValid = (name: string): boolean => {
	const pass = !!name && name.length <= 15;

	return pass;
};

export const projectUrlValid = (url: string): boolean => {
	const spacePattern = /\s/;
	const specialPattern = /[`~!@#$%^&*|\\\'\";:+_\/?]/gi;
	const koreanPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi;

	const pass =
		url.length >= 4 &&
		url.length <= 15 &&
		!specialPattern.test(url) &&
		!koreanPattern.test(url) &&
		url.search(spacePattern) === -1;

	return pass;
};

// TODO: 프로필 유저 인풋 검사
export const profileNameValid = (name: string): boolean => {
	const pass = !!name && name.length <= 8;

	return pass;
};

export const profileMobileValid = (mobile: string): boolean => {
	mobile = mobile.split('-').join('');
	const phonePattern = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
	const pass = phonePattern.test(mobile);

	return pass;
};

export const profileAboutMeValid = (name: string): boolean => {
	const pass = !!name && name.length <= 50;

	return pass;
};
