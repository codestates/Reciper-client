import { useCallback, useState, Dispatch, ChangeEvent, SetStateAction } from 'react';

type ReturnTypes<T> = [
	T,
	(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
	Dispatch<SetStateAction<T>>,
];

const useInput = <T>(initialData: T): ReturnTypes<T> => {
	const [value, setValue] = useState(initialData);
	const handler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(e.target.value as unknown as T);
	}, []);

	return [value, handler, setValue];
};

export default useInput;
