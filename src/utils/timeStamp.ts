const timeStamp = (targetDate: Date): string => {
	const currentDate = new Date();

	const dateDiff: number = currentDate.getTime() - targetDate.getTime();

	const dateDiffMin: number = dateDiff / 1000 / 60;
	const dateDiffHour: number = dateDiff / 1000 / 3600;
	const dateDiffDay: number = dateDiff / 1000 / 3600 / 24;
	const dateDiffWeek: number = dateDiff / 1000 / 3600 / 24 / 7;

	if (dateDiffWeek >= 1) {
		return `${Math.floor(dateDiffWeek)}주 전`;
	}

	if (dateDiffDay >= 1) {
		return `${Math.floor(dateDiffDay)}일 전`;
	}

	if (dateDiffHour >= 1) {
		return `${Math.floor(dateDiffHour)}시간 전`;
	}

	if (dateDiffMin >= 1) {
		return `${Math.floor(dateDiffMin)}분 전`;
	}

	return `방금 전`;
};

export default timeStamp;
