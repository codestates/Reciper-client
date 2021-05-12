import React from 'react';
import { StackTagContainer } from './styles';

interface Props {
	children: string;
}

const StackTag = ({ children }: Props): JSX.Element => {
	return <StackTagContainer>{children}</StackTagContainer>;
};

export default StackTag;
