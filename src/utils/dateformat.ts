const dateFormat = (date: Date, type?: string): string => {
	if (date) {
		const yyyy: number = date.getFullYear();
		let mm: string | number = date.getMonth() + 1;
		let dd: string | number = date.getDate();

		dd = dd >= 10 ? dd : `0${dd}`;

		if (type === 'md') {
			return `${mm}월 ${dd}일`;
		}

		mm = mm >= 10 ? mm : `0${mm}`;
		return `${yyyy}-${mm}-${dd}`;
	} else {
		return '';
	}
};

export default dateFormat;
