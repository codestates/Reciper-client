import React from 'react';
import { StackTagCloseIcon, StackTagContainer } from './styles';

interface Props {
	children: string;
	type: string;
	deleteEvent: () => void;
}

/*
	type - 삭제 가능한 태그를 만들 때 'delete'를 전달 (default: nomal)
	deleteEvent - 삭제 이벤트 함수입니다.
*/

const StackTag = (props: Props): JSX.Element => {
	return (
		<StackTagContainer {...props}>
			{props.children}
			{props.type === 'delete' && <StackTagCloseIcon onClick={props.deleteEvent} />}
		</StackTagContainer>
	);
};

StackTag.defaultProps = {
	type: 'nomal',
	deleteEvent: null,
};

export default StackTag;
