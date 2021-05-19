import React from 'react';
import SectionOne from '../SectionOne';
import SectionTwo from '../SectionTwo';
import { Container, Inner, SecrionDotBtnWrap, SectionDotBtn } from './styles';

const CreateContainer = (): JSX.Element => {
	return (
		<Container>
			<Inner>
				<SecrionDotBtnWrap>
					<SectionDotBtn className="on" />
					<SectionDotBtn />
				</SecrionDotBtnWrap>
				<SectionOne />
				{/* <SectionTwo /> */}
			</Inner>
		</Container>
	);
};

export default CreateContainer;
