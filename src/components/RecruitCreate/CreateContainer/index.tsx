import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateTop from '../CreateTop';
import CreateBottom from '../CreateBottom';
import Button from '../../Common/Button';

import useInput from '../../../hooks/useInput';

import { getRecruitCreateSelector, postCreateData, writingAction } from '../../../reducer/recruitCreate';

import { FullDiv, Container, CreateTitleInput, CreateBtnWrap } from './styles';

const CreaateContainer = (): JSX.Element => {
	const dispatch = useDispatch();
	const getCreateData = useSelector(getRecruitCreateSelector);
	const [name, onChangeName] = useInput<string>('');

	useEffect(() => {
		dispatch(writingAction({ name }));
	}, [name]);

	const onResponseCreateData = async () => {
		if (!getCreateData.loading) {
			dispatch(postCreateData(getCreateData.data));
		}
	};

	return (
		<FullDiv>
			<Container>
				<CreateTitleInput placeholder="레시피 이름을 입력하세요" onChange={onChangeName} />
				<CreateTop />
				<CreateBottom />
				<CreateBtnWrap>
					<Button size="medium" clickEvent={onResponseCreateData}>
						모집 작성
					</Button>
				</CreateBtnWrap>
			</Container>
		</FullDiv>
	);
};

export default CreaateContainer;
