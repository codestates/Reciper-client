const sequentialEvent = (ref: HTMLDivElement, className: string, delay: number): void => {
	Array.from(ref.children).map((node, index) => {
		(i => {
			setTimeout(() => {
				node.classList.add(className);
			}, delay * i);
		})(index);
	});
};

export default sequentialEvent;
