import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

import Select from '../../Common/Select';
import StackTag from '../../Common/StackTag';

import {
	CreateLink,
	SearchCodeIcon,
	SearchContiner,
	SearchFormContiner,
	SearchInputContiner,
	SearchStackClear,
	SearchStackContiner,
	StackSearchCustom,
} from './styles';

interface Props {
	stackBucket: string[];
	setStackBucket: Dispatch<SetStateAction<string[]>>;
	setSortValue: Dispatch<SetStateAction<string>>;
	setOrder: Dispatch<SetStateAction<number>>;
}

const Search = ({ stackBucket, setStackBucket, setSortValue, setOrder }: Props): JSX.Element => {
	const sortData: string[] = ['최신순', '오래된 순'];
	const [stack, setStack] = useState<string>('');

	useEffect(() => {
		const duplicate = stackBucket.indexOf(stack) + 1; // 중복이 아닐 시 -1를 반환하기 때문에 0으로 초기화 함

		if (stack && !duplicate) {
			setStackBucket([stack, ...stackBucket]);
		}
	}, [stack]);

	const onDeleteStack = useCallback(
		(index: number) => {
			const deleteStack = [...stackBucket];
			deleteStack.splice(index, 1);

			setOrder(1);
			setStackBucket(deleteStack);
		},
		[stackBucket],
	);

	return (
		<SearchContiner>
			<SearchStackContiner>
				{stackBucket.length ? (
					<SearchStackClear onClick={() => setStackBucket([])}>조건 초기화</SearchStackClear>
				) : null}
				{stackBucket.map((stack, index) => (
					<StackTag key={index} type="delete" deleteEvent={() => onDeleteStack(index)}>
						{stack}
					</StackTag>
				))}
			</SearchStackContiner>
			<SearchFormContiner>
				<CreateLink to="/recruitcreate">모집글 작성하기</CreateLink>
				<div style={{ display: 'flex' }}>
					<SearchInputContiner>
						<SearchCodeIcon />
						<StackSearchCustom width="long" height="long" margin="0 10px 0 0" setState={setStack} />
					</SearchInputContiner>
					<Select height="long" optionData={sortData} initValue="최신순" setState={setSortValue}>
						최신순
					</Select>
				</div>
			</SearchFormContiner>
		</SearchContiner>
	);
};

export default Search;
