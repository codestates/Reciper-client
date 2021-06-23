import axios from 'axios';
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { stackDataType } from '../../../types/types';
import getLoginInfo from '../../../utils/getLoginInfo';
import { NoneStack, Stack, StackList, StackSearchContainer, StackSearchInput } from './styles';

interface Props {
	width: string;
	height: string;
	margin: string;
	setState: Dispatch<SetStateAction<string>>;
}

/*
	width (default: short)
		1. short - 130px;
		2. long - 250px;
	height (default: short)
	 	1. short - 32px;
		2. long - 40px;
	margin - '10px 10px'와 같은 형태로 작성 (default: 0)
	setState - setState를 전달하여 선택한 스택 값을 끌어 올린다.
*/

const StackSearch = (props: Props): JSX.Element => {
	const [showStacks, setShowStacks] = useState<boolean>(false);
	const [mouseOut, setMouseOut] = useState<boolean>(false);
	const [fixStackData, setFixStackData] = useState<stackDataType[]>([]);
	const [filteredStack, setFilterdStack] = useState<stackDataType[]>([]);
	const [initialValue, setInitialValue] = useState<string>('');

	const onStackSearchFocus = useCallback(() => {
		onStackFilter();
		setShowStacks(true);
	}, [fixStackData]);

	const onStackFilter = useCallback((): void => {
		if (initialValue) {
			const filtered = fixStackData.filter(stack => {
				const reg = new RegExp(initialValue, 'i');
				const match = reg.exec(stack.name);

				if (match) {
					return true;
				}
			});

			setFilterdStack(filtered);
		} else {
			setFilterdStack(fixStackData);
		}
	}, [initialValue, fixStackData]);

	const onSelectedStack = useCallback((stack: string): void => {
		props.setState(stack);
		setShowStacks(false);
		setInitialValue('');
	}, []);

	useEffect(() => {
		const { accessToken, loginType } = getLoginInfo();

		const getStackData = async (): Promise<void> => {
			const stackData = await axios.get(`${process.env.REACT_APP_SERVER_URL}/stacks`, {
				headers: { authorization: `Bearer ${accessToken}`, loginType },
			});

			setFixStackData(stackData.data.data);
		};

		getStackData();
	}, []);

	useEffect(() => {
		if (mouseOut) {
			setShowStacks(false);
		}
	}, [mouseOut]);

	useEffect(() => {
		onStackFilter();
	}, [initialValue]);

	return (
		<StackSearchContainer {...props} onMouseLeave={() => setMouseOut(true)} onMouseOver={() => setMouseOut(false)}>
			<StackSearchInput
				placeholder="기술 태그 검색"
				value={initialValue}
				onFocus={onStackSearchFocus}
				onChange={e => setInitialValue(e.target.value)}
			/>
			{showStacks && (
				<StackList>
					{filteredStack.map((stack, index) => (
						<Stack key={index} onClick={() => onSelectedStack(stack.name)}>
							{stack.name}
						</Stack>
					))}
					{filteredStack.length === 0 && <NoneStack>검색 결과가 없습니다.</NoneStack>}
				</StackList>
			)}
		</StackSearchContainer>
	);
};

StackSearch.defaultProps = {
	width: 'short',
	height: 'short',
	margin: '0',
};

export default StackSearch;
