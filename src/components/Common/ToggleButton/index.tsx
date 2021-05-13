import React, { useState, ChangeEvent } from 'react';
import { Toggle_Switch, Toggle_SliderRound } from './styles';

interface Props {
	children: React.ReactNode;
	isToggled: boolean;
	changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

/*
	정해진 props로 Toggle 컴포넌트를 조정할 수 있습니다.

	children: 토글로 인하여 경고 메세지를 남기고 싶을 때 사용합니다.

	isToggled: 토글의 상태를 확인하고 요청에 필요할 때 사용합니다.

	changeEvent: 토글의 상태에 변화를 줄 때 사용합니다.
*/

const ToggleButton = ({ children, isToggled, changeEvent }: Props): JSX.Element => {
	const [showMessage, setShowMessage] = useState<boolean>(false);

	return (
		<>
			<Toggle_Switch onClick={() => setShowMessage(!showMessage)}>
				<input type="checkbox" checked={isToggled} onChange={changeEvent} />
				<Toggle_SliderRound />
			</Toggle_Switch>
			{children}
		</>
	);
};

export default ToggleButton;
