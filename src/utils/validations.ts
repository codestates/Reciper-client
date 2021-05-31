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
	const koreanPattern = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;

	const pass =
		url.length >= 4 &&
		url.length <= 15 &&
		!specialPattern.test(url) &&
		!koreanPattern.test(url) &&
		url.search(spacePattern) === -1;

	return pass;
};
