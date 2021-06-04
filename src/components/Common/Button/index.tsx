import React from 'react';
import { ButtonTag } from './styles';

interface Props {
	children: string;
	size: string;
	backgroundColor: string;
	buttonType: string;
	margin: string;
	clickEvent: () => void;
}

/*
	정해진 props로 Button 컴포넌트를 조정할 수 있습니다.
	size 
		1. small - width: 65px hegiht:40px
		2. medium - width: 107px hegiht:40px
		3. large - width: 167px hegiht:40px
	buttonType
		1. basic - color: #478bff
		2. cancel - borderColor: #d6d6d8
	margin - '0 10px 0 0' 처럼 전달해주면 마진이 적용 됨
	clickEvent - click 이벤트가 필요할 시 전달하여 사용

	6/4 수정
	backgroundColor
	basic - color: ${({ theme }) => theme.color.pointColor}
	delete - color: ${({ theme }) => theme.color.warnigColor}
*/

const Button = (props: Props): JSX.Element => {
	return (
		<ButtonTag {...props} onClick={props.clickEvent}>
			{props.children}
		</ButtonTag>
	);
};

Button.defaultProps = {
	size: 'small',
	backgroundColor: 'basic',
	buttonType: 'basic',
	margin: '0',
};

export default Button;
