const dateFormat = (date: Date): string => {
	if (date) {
		const yyyy: number = date.getFullYear();
		let mm: string | number = date.getMonth() + 1;
		let dd: string | number = date.getDate();

		mm = mm >= 10 ? mm : `0${mm}`;
		dd = dd >= 10 ? dd : `0${dd}`;

		return `${yyyy}-${mm}-${dd}`;
	} else {
		return '';
	}
};

export default dateFormat;
