import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { ColorLabelWrap, Title, ChangeColorBtn, Label, LabelWrap } from './styles';

interface Props {
	taskColor: string;
	setTaskColor: Dispatch<SetStateAction<string>>;
}

const ColorLabel = ({ taskColor, setTaskColor }: Props): JSX.Element => {
	const [openColorModal, setOpenColorModal] = useState<boolean>(false);
	const colors: string[] = [
		'#e06347',
		'#ff4752',
		'#c41c4f',
		'#e9658a',
		'#bfc0bb',
		'#00c875',
		'#fdba51',
		'#ff7e47',
		'#3b4b87',
		'#00609c',
		'#bb76b2',
		'#2c96d2',
		'#478bff',
		'#5d2838',
		'#155d4f',
		'#cd3679',
		'#fed501',
		'#a9b2b1',
		'#a0a8a5',
		'#cfb687',
	];

	const onOpenColorModal = useCallback(() => {
		setOpenColorModal(!openColorModal);
	}, [openColorModal]);

	const onChangeColor = useCallback(
		(color: string): void => {
			setTaskColor(color);
			setOpenColorModal(false);
		},
		[openColorModal],
	);

	return (
		<ColorLabelWrap>
			<Title>컬러 라벨</Title>
			<ChangeColorBtn onClick={onOpenColorModal}>+</ChangeColorBtn>
			<Label style={{ backgroundColor: `${taskColor}` }} />
			<LabelWrap>
				{openColorModal &&
					colors.map((color, index) => (
						<Label key={index} style={{ backgroundColor: `${color}` }} onClick={() => onChangeColor(color)} />
					))}
			</LabelWrap>
		</ColorLabelWrap>
	);
};

export default ColorLabel;
