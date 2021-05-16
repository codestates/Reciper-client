import axios from 'axios';
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { stackDataType } from '../../../types/types';
import { Stack, StackList, StackSearchContainer, StackSearchInput } from './styles';

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

	useEffect(() => {
		const getLoginInfo = localStorage.getItem('loginInfo');
		const { accessToken, loginType } = JSON.parse(getLoginInfo as string);

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

	const onStackSearchFocus = () => {
		setFilterdStack(fixStackData);
		setShowStacks(true);
	};

	const onStackFilter = (e: ChangeEvent<HTMLInputElement>): void => {
		setShowStacks(true);

		if (e.target.value) {
			const filtered = fixStackData.filter(stack => {
				const firstLowerValue = e.target.value;
				const firstUpperValue = firstLowerValue.replace(firstLowerValue[0], firstLowerValue[0].toUpperCase());
				const isLowerMatch = stack.name.indexOf(firstLowerValue) + 1;
				const isUpperMatch = stack.name.indexOf(firstUpperValue) + 1;

				return isLowerMatch + isUpperMatch;
			});
			setFilterdStack(filtered);
		}

		setInitialValue(e.target.value);
	};

	const onSelectedStack = (stack: string): void => {
		props.setState(stack);
		setShowStacks(false);
		setInitialValue('');
	};

	return (
		<StackSearchContainer {...props} onMouseLeave={() => setMouseOut(true)} onMouseOver={() => setMouseOut(false)}>
			<StackSearchInput
				placeholder="기술 태그 검색"
				value={initialValue}
				onFocus={onStackSearchFocus}
				onChange={onStackFilter}
			/>
			{showStacks && (
				<StackList>
					{filteredStack.map((stack, index) => (
						<Stack key={index} onClick={() => onSelectedStack(stack.name)}>
							{stack.name}
						</Stack>
					))}
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
