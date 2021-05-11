import React from 'react';
import { InputTag } from './styles';

interface Props {
	width: string;
	height: string;
	placeholderText: string;
}

const Input = (props: Props): JSX.Element => {
	return <InputTag {...props} placeholder={props.placeholderText} />;
};

Input.defaultProps = {
	width: 'short',
	height: 'short',
};

export default Input;
