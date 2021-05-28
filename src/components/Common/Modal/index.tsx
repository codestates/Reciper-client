import React, { ReactNode } from 'react';
import { Dimed, Modalcontainer } from './styles';

interface Props {
	children: ReactNode;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	backgroundColor: boolean;
}

/*
	children - 필요한 모달 창을 자식 요소로 넣어주어 사용
	setShowModal - 상태로 열고 닫음을 구분 짓기 위해 setState 형식을 전달 시켜 사용
	
	5.27 수정
	background-color가 false이면 배경색 없음, 기본값은 dimed 처리
*/

const Modal = ({ children, setShowModal, backgroundColor }: Props): JSX.Element => {
	return (
		<Modalcontainer>
			<Dimed backgroundColor={backgroundColor} onClick={() => setShowModal(false)} />
			{children}
		</Modalcontainer>
	);
};

Modal.defaultProps = {
	backgroundColor: true,
};

export default Modal;
