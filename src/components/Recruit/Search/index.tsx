import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import Input from '../../Common/Input';
import Select from '../../Common/Select';
import StackTag from '../../Common/StackTag';

import {
	SearchCodeIcon,
	SearchContiner,
	SearchFormContiner,
	SearchInputContiner,
	SearchStackClear,
	SearchStackContiner,
} from './styles';

const Search = (): JSX.Element => {
	const selectData: string[] = ['최신순', '오래된 순'];
	const [stackName, setStackName] = useState<string>('');
	const [stackBucket, setStackBucket] = useState<string[]>([]);

	const onAddStack = () => {
		if (stackName.trim() === '') {
			setStackName('');
			return;
		}
		setStackBucket([...stackBucket, stackName]);
		setStackName('');
	};

	return (
		<SearchContiner>
			<SearchStackContiner>
				{stackBucket.length ? (
					<SearchStackClear onClick={() => setStackBucket([])}>조건 초기화</SearchStackClear>
				) : null}
				{stackBucket.map((stack, index) => (
					<StackTag key={index}>{stack}</StackTag>
				))}
			</SearchStackContiner>
			<SearchFormContiner>
				<SearchInputContiner>
					<SearchCodeIcon />
					<Input
						width="short"
						height="long"
						margin="0 10px 0 0"
						padding="0 10px 0 40px"
						initValue={stackName}
						placeholderText="기술 태그 검색"
						changeEvent={(e: ChangeEvent<HTMLInputElement>) => setStackName(e.target.value)}
						keyEvent={(e: KeyboardEvent) => e.key === 'Enter' && onAddStack()}
					/>
				</SearchInputContiner>
				<Select height="long" optionData={selectData}>
					최신 순
				</Select>
			</SearchFormContiner>
		</SearchContiner>
	);
};

export default Search;
