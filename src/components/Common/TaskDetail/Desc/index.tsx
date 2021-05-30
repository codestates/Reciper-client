import React, { ChangeEvent } from 'react';
import { FlexSection, SectionTitle } from '../styles';
import { DescContainer } from './styles';

interface Props {
	desc: string;
	onChangeDesc: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Desc = ({ desc, onChangeDesc }: Props): JSX.Element => {
	return (
		<FlexSection style={{ alignItems: 'flex-start' }}>
			<SectionTitle style={{ margin: '0', width: '80px' }}>내용</SectionTitle>
			<DescContainer value={desc} onChange={onChangeDesc} placeholder="테스크 내용을 작성하세요" />
		</FlexSection>
	);
};

export default Desc;
