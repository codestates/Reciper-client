import React, { ChangeEvent } from 'react';
import { FlexSection, SectionTitle } from '../styles';
import { TitleContainer } from './styles';

interface Props {
	taskTitle: string;
	onChangeTaskTitle: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Title = ({ taskTitle, onChangeTaskTitle }: Props): JSX.Element => {
	return (
		<FlexSection>
			<SectionTitle style={{ margin: '0', width: '80px' }}>제목</SectionTitle>
			<TitleContainer value={taskTitle} onChange={onChangeTaskTitle}></TitleContainer>
		</FlexSection>
	);
};

export default Title;
