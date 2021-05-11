import React, { useState, MouseEvent } from 'react';
import { Option, OptionContainer, SelectForm, ToggleArrowIcon } from './styles';

interface Props {
	children: string;
	height: string;
	optionData: string[];
}

const Select = (props: Props): JSX.Element => {
	const [showOptions, setShowOptions] = useState<boolean>(false);
	const [selectedValue, setSelectedValue] = useState<string>('');

	return (
		<>
			<SelectForm {...props} onClick={() => setShowOptions(!showOptions)}>
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
};

export default Select;
