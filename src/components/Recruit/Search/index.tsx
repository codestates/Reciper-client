import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recruitSelector, removeStack, resetStack, setSort } from '../../../reducer/recruit';

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
	const [sortValue, setSortValue] = useState<string>('최신순');

	const dispatch = useDispatch();
	const { stacks } = useSelector(recruitSelector);

	useEffect(() => {
		dispatch(setSort(sortValue));
	}, [sortValue]);

	return (
		<SearchContiner>
			<SearchStackContiner>
				{stacks.length ? <SearchStackClear onClick={() => dispatch(resetStack())}>조건 초기화</SearchStackClear> : null}
				{stacks.map((stack, index) => (
					<StackTag key={index} type="delete" deleteEvent={() => dispatch(removeStack(index))}>
						{stack}
					</StackTag>
				))}
			</SearchStackContiner>
			<SearchFormContiner>
				<CreateLink to="/recruitcreate">모집글 작성하기</CreateLink>
				<div style={{ display: 'flex' }}>
					<SearchInputContiner>
						<SearchCodeIcon />
						<StackSearchCustom width="long" height="long" margin="0 10px 0 0" />
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
