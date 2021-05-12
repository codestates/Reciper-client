import React, { ChangeEvent } from 'react';
import { InputTag } from './styles';

interface Props {
	width: string;
	height: string;
	placeholderText: string;
	onEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props): JSX.Element => {
	return <InputTag {...props} placeholder={props.placeholderText} onChange={props.onEvent} />;
};

Input.defaultProps = {
	width: 'short',
	height: 'short',
};

export default Input;
