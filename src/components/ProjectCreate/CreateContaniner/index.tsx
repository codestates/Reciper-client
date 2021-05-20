import React, { useState } from 'react';
import { projectCreateDataType } from '../../../types/types';
import SectionOne from '../SectionOne';
import SectionTwo from '../SectionTwo';
import { Container, Inner, SecrionDotBtnWrap, SectionDotBtn } from './styles';

const CreateContainer = (): JSX.Element => {
	const [chapter, setChapter] = useState(true);
	const [projectInfo, setProjectInfo] = useState<projectCreateDataType>({
		name: '',
		projectURL: '',
	});

	return (
		<Container>
			<Inner>
				<SecrionDotBtnWrap>
					<SectionDotBtn className={chapter ? 'on' : ''} />
					<SectionDotBtn className={chapter ? '' : 'on'} />
				</SecrionDotBtnWrap>
				{chapter ? (
					<SectionOne setChapter={setChapter} setProjectInfo={setProjectInfo} />
				) : (
					<SectionTwo projectInfo={projectInfo} />
				)}
			</Inner>
		</Container>
	);
};

export default CreateContainer;
