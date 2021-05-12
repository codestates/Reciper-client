import React, { ReactNode } from 'react';
import { Dimed, Modalcontainer } from './styles';

interface Props {
	children: ReactNode;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

/*
	children - 필요한 모달 창을 자식 요소로 넣어주어 사용
	setShowModal - 상태로 열고 닫음을 구분 짓기 위해 setState 형식을 전달 시켜 사용
*/

const Modal = ({ children, setShowModal }: Props): JSX.Element => {
	return (
		<Modalcontainer>
			<Dimed onClick={() => setShowModal(false)} />
			{children}
		</Modalcontainer>
	);
};

export default Modal;
