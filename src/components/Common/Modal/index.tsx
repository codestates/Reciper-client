import React, { ReactNode } from 'react';
import { Dimed } from './styles';

interface Props {
	children: ReactNode;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, setShowModal }: Props): JSX.Element => {
	return (
		<>
			<Dimed onClick={() => setShowModal(false)} />
			{children}
		</>
	);
};

export default Modal;
