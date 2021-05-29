import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { ColorLabelWrap, Title, ChangeColorBtn, Label } from './styles';

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
		'#00c875',
		'#ff7e47',
		'#3b4b87',
		'#00609c',
		'#478bff',
		'#5d2838',
		'#155d4f',
		'#cd3679',
		'#fed501',
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
			{openColorModal &&
				colors.map((color, index) => (
					<Label key={index} style={{ backgroundColor: `${color}` }} onClick={() => onChangeColor(color)} />
				))}
		</ColorLabelWrap>
	);
};

export default ColorLabel;
