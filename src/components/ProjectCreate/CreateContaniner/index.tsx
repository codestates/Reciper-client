import React, { useState } from 'react';

import SectionOne from '../SectionOne';
import SectionTwo from '../SectionTwo';

import useInput from '../../../hooks/useInput';

import { Container, Inner, SecrionDotBtnWrap, SectionDotBtn } from './styles';

const CreateContainer = (): JSX.Element => {
	const [projectURL, onChangeProjectURL] = useInput<string>('');
	const [chapter, setChapter] = useState(true);

	return (
		<Container>
			<Inner>
				<SecrionDotBtnWrap>
					<SectionDotBtn className={chapter ? 'on' : ''} />
					<SectionDotBtn className={chapter ? '' : 'on'} />
				</SecrionDotBtnWrap>
				{chapter ? (
					<SectionOne projectURL={projectURL} onChangeProjectURL={onChangeProjectURL} setChapter={setChapter} />
				) : (
					<SectionTwo projectURL={projectURL} />
				)}
			</Inner>
		</Container>
	);
};

export default CreateContainer;
