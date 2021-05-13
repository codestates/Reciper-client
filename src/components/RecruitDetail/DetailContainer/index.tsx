import React from 'react';

import DetailComment from '../DetailComment';
import DetailContent from '../DetailContent';
import DetailTop from '../DetailTop';
import DetailWriter from '../DetailWriter';

import { FullDiv } from './styles';
import { Container } from './styles';

const DetailContainer = (): JSX.Element => {
	return (
		<FullDiv>
			<Container>
				<DetailTop />
				<DetailContent />
				<DetailWriter />
				<DetailComment />
			</Container>
		</FullDiv>
	);
};

export default DetailContainer;
