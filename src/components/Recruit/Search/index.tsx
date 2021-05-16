import React, { useCallback, useEffect, useState } from 'react';

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

const Search = (): JSX.Element => {
	const sortData: string[] = ['최신순', '오래된 순'];
	const [sortValue, setSortValue] = useState<string>('');
	const [stack, setStack] = useState<string>('');
	const [stackBucket, setStackBucket] = useState<string[]>([]);

	useEffect(() => {
		if (stack) {
			setStackBucket([...stackBucket, stack]);
		}
	}, [stack]);

	const onDeleteStack = useCallback(
		(index: number) => {
			const deleteStack = [...stackBucket];
			deleteStack.splice(index, 1);
			setStackBucket(deleteStack);
		},
		[stack],
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
					<Select height="long" optionData={sortData} setState={setSortValue}>
						최신 순
					</Select>
				</div>
			</SearchFormContiner>
		</SearchContiner>
	);
};

export default Search;
