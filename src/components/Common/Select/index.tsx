import React, { useState, MouseEvent, useEffect } from 'react';
import { Option, OptionContainer, SelectForm, ToggleArrowIcon } from './styles';

interface Props {
	children: string;
	height: string;
	margin: string;
	optionData: string[];
}

/*
	정해진 props로 Button 컴포넌트를 조절할 수 있습니다.
	height 
		1. short - height: 32px
		2. long - height: 40px
	margin - '0 10px 0 0' 처럼 전달해주면 마진이 적용 됨
	optionData - option을 생성하기 위한 string[] 타입을 전달 시켜 사용
*/

const Select = (props: Props): JSX.Element => {
	const [showOptions, setShowOptions] = useState<boolean>(false);
	const [mouseOut, setMouseOut] = useState<boolean>(false);
	const [selectedValue, setSelectedValue] = useState<string>('');

	const on = (e: MouseEvent) => {
		e.stopPropagation();
		setShowOptions(!showOptions);
	};

	useEffect(() => {
		if (mouseOut) {
			setShowOptions(false);
		}
	}, [mouseOut]);

	return (
		<>
			<SelectForm {...props} onClick={on} onMouseLeave={() => setMouseOut(true)} onMouseOver={() => setMouseOut(false)}>
				{selectedValue ? <span style={{ color: '#000' }}>{selectedValue}</span> : props.children}
				<ToggleArrowIcon />
				{showOptions && (
					<OptionContainer {...props}>
						{props.optionData.map((option, index: number) => (
							<Option key={index} onClick={() => setSelectedValue(option)}>
								{option}
							</Option>
						))}
					</OptionContainer>
				)}
			</SelectForm>
		</>
	);
};

Select.defaultProps = {
	height: 'short',
	margin: '0',
};

export default Select;
