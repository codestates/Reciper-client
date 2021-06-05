import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ToggleSwitch, ToggleSliderRound } from './styles';

interface Props {
	children: React.ReactNode;
	isOpenProject: boolean;
	changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

/*
	정해진 props로 Toggle 컴포넌트를 조정할 수 있습니다.

	children: 토글로 인하여 경고 메세지를 남기고 싶을 때 사용합니다.

	isToggled: 토글의 상태를 확인하고 요청에 필요할 때 사용합니다.

	changeEvent: 토글의 상태에 변화를 줄 때 사용합니다.
	 onClick={() => setIsOpen(!isOpenProject)}
*/

const ToggleButton = ({ children, isOpenProject, changeEvent }: Props): JSX.Element => {
	return (
		<>
			<ToggleSwitch>
				<input type="checkbox" checked={isOpenProject} onChange={changeEvent} />
				<ToggleSliderRound />
			</ToggleSwitch>
			{children}
		</>
	);
};

export default ToggleButton;
