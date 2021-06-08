import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateTop from '../CreateTop';
import CreateBottom from '../CreateBottom';
import Button from '../../Common/Button';

import useInput from '../../../hooks/useInput';

import {
	getRecruitCreateSelector,
	postCreateData,
	successLoading,
	writingAction,
} from '../../../reducer/recruitCreate';

import { FullDiv, Container, CreateTitleInput, CreateBtnWrap, ValidFalseMessage } from './styles';
import { useHistory } from 'react-router';
import { recruitCreateDataType } from '../../../types/types';

const CreaateContainer = (): JSX.Element => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { data, loading }: { data: recruitCreateDataType; loading: boolean } = useSelector(getRecruitCreateSelector);
	const [name, onChangeName] = useInput<string>('');
	const [valid, setValid] = useState<boolean>(true);

	const onValidation = useCallback((data: recruitCreateDataType): void => {
		const { detailDesc, detailTitle, name, period, recruitMembers, requireStack, serviceStep, simpleDesc } = data;

		if (
			detailDesc &&
			detailTitle &&
			name &&
			period &&
			serviceStep &&
			simpleDesc &&
			recruitMembers.length &&
			requireStack.length
		) {
			setValid(true);
			return;
		}

		setValid(false);
	}, []);

	const onResponseCreateData = useCallback(() => {
		if (valid) {
			dispatch(postCreateData(data));
		}
	}, [data, valid]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		dispatch(writingAction({ name }));
	}, [name]);

	useEffect(() => {
		onValidation(data);

		if (loading) {
			history.push('/recruit');

			dispatch(successLoading());
		}
	}, [data, loading]);

	return (
		<FullDiv>
			<Container>
				<CreateTitleInput placeholder="레시피 이름을 입력하세요" onChange={onChangeName} />
				<CreateTop />
				<CreateBottom />
				<ValidFalseMessage>{!valid && '작성란을 모두 작성해주세요.'}</ValidFalseMessage>
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
