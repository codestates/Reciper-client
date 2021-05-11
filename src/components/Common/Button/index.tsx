import React from 'react';
import { ButtonTag } from './styles';

interface Props {
	children: string;
	size: string;
	buttonType: string;
	onEvent: () => void;
}

const Button = (props: Props): JSX.Element => {
	return (
		<ButtonTag {...props} onClick={props.onEvent}>
			{props.children}
		</ButtonTag>
	);
};

Button.defaultProps = {
	size: 'small',
	buttonType: 'basic',
};

export default Button;
