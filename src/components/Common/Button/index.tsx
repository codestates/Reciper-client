import React from 'react';
import { ButtonTag } from './styles';

interface Props {
	children: string;
	size: string;
	buttonType: string;
}

const Button = (props: Props): JSX.Element => {
	return <ButtonTag {...props}>{props.children}</ButtonTag>;
};

Button.defaultProps = {
	size: 'small',
	buttonType: 'basic',
};

export default Button;
