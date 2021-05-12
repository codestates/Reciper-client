import React, { ChangeEvent, KeyboardEvent } from 'react';
import { InputTag } from './styles';

interface Props {
	width: string;
	height: string;
	margin: string;
	padding: string;
	initValue?: string;
	placeholderText: string;
	changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
	keyEvent?: (e: KeyboardEvent) => void;
}

/*
	정해진 props로 Button 컴포넌트를 조절할 수 있습니다.
	width 
		1. short - width: 250px
		2. long - width: 100%
	height 
		1. short - height: 32px
		2. long - height: 40px
	margin - '0 10px 0 0' 처럼 전달해주면 마진이 적용 됨 (default: 0)
	padding - 마진과 동일 (default: 0 10px)
	placeholderText - placeholder가 필요할 시 전달하여 사용
	ChangeEvent - change 이벤트가 필요할 시 전달하여 사용
	KeyEvent - keyboard 이벤트가 필요할 시 전달하여 사용
*/

const Input = (props: Props): JSX.Element => {
	return (
		<InputTag
			{...props}
			placeholder={props.placeholderText}
			value={props.initValue}
			onChange={props.changeEvent}
			onKeyPress={props.keyEvent}
		/>
	);
};

Input.defaultProps = {
	width: 'short',
	height: 'short',
	margin: '0',
	padding: '0 10px',
};

export default Input;
