import React, { ForwardedRef, forwardRef, useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../styles/react-datepicker-custom.css';
import { useDispatch } from 'react-redux';

import Input from '../../Common/Input';
import Select from '../../Common/Select';
import StackSearch from '../../Common/StackSearch';
import StackTag from '../../Common/StackTag';

import useInput from '../../../hooks/useInput';
import dateFormat from '../../../utils/dateformat';

import { recruitMembersDataType } from '../../../types/types';

import { writingAction } from '../../../reducer/recruitCreate';

import { CreateSection, CreateSubGuideTitle } from '../CreateContainer/styles';
import {
	CreatTopContainer,
	CreateInputContainer,
	CreateRecruitList,
	DeleteRecruitListBtn,
	AddRecruitListBtn,
	RecruitStackWrap,
	RecruitStackClear,
	DatePickerCustomInput,
} from './styles';

const CreateTop = (): JSX.Element => {
	const dispatch = useDispatch();
	const positionEx = ['프론트엔드', '백엔드', '풀스택'];
	const careerEx = ['경력무관', '1년', '2년', '3년', '5년', '10년'];
	const personnelEx = ['1', '2', '3', '4', '5'];
	const stageEx = ['모집', '기획', '개발'];

	const [recruitMembers, setRecruitMembers] = useState<recruitMembersDataType[]>([]);
	const [selectReset, setSelectReset] = useState<boolean>(false);

	const [requireStack, setRequireStack] = useState<string[]>([]);
	const [stackValue, setStackValue] = useState<string>('');

	const [simpleDesc, onChangeSimpleDesc] = useInput<string>('');
	const [position, setPosition] = useState<string>('');
	const [career, setCareer] = useState<string>('');
	const [personnel, setPersonnel] = useState<string>('');
	const [serviceStep, setServiceStep] = useState<string>('');
	const [period, setPeriod] = useState<Date | [Date, Date] | null>();
	const [deadline, setDeadline] = useState<Date | [Date, Date] | null>();

	useEffect(() => {
		dispatch(writingAction({ simpleDesc }));
	}, [simpleDesc]);

	useEffect(() => {
		dispatch(writingAction({ recruitMembers }));
	}, [recruitMembers]);

	useEffect(() => {
		dispatch(writingAction({ requireStack }));
	}, [requireStack]);

	useEffect(() => {
		dispatch(writingAction({ serviceStep }));
	}, [serviceStep]);

	useEffect(() => {
		dispatch(writingAction({ period: dateFormat(period as Date) }));
	}, [period]);

	useEffect(() => {
		if (stackValue) {
			setRequireStack([...requireStack, stackValue]);
		}
	}, [stackValue]);

	const onAddRecruitMembers = () => {
		// ReacruitMember를 추가하는 이벤트입니다.
		if (!(position && career && personnel && deadline)) {
			return;
		}

		const recruitMembersFrame: recruitMembersDataType = {
			position,
			career,
			personnel,
			deadline: dateFormat(deadline as Date),
		};

		setDeadline(null);
		setSelectReset(!selectReset);
		setRecruitMembers([...recruitMembers, recruitMembersFrame]);
	};

	const onDeleteRecruitMembers = useCallback(
		// ReacruitMember를 제거하는 이벤트입니다.
		(index: number) => {
			const deleteMembers = [...recruitMembers];
			deleteMembers.splice(index, 1);
			setRecruitMembers(deleteMembers);
		},
		[recruitMembers],
	);

	const onDeleteStackTag = useCallback(
		// StackTag를 제거하는 이벤트 입니다.
		(index: number) => {
			const deleteStackTag = [...requireStack];
			deleteStackTag.splice(index, 1);
			setRequireStack(deleteStackTag);
		},
		[requireStack],
	);

	const DatePickerCustomBtn = forwardRef(
		({ value, onClick, initialValue }: any, ref: ForwardedRef<HTMLButtonElement>) => (
			<DatePickerCustomInput
				style={{ color: `${value ? '#000' : '#d6d6d8'}` }}
				className="example-custom-input"
				onClick={onClick}
				ref={ref}
			>
				{value || initialValue}
			</DatePickerCustomInput>
		),
	);
	DatePickerCustomBtn.displayName = 'custom btn';

	return (
		<>
			<CreatTopContainer>
				<CreateSection>
					<CreateSubGuideTitle>레시피 한 줄 소개</CreateSubGuideTitle>
					<Input
						width="long"
						height="long"
						placeholderText="ex) 위치 기반 소셜 플랫폼 개발"
						changeEvent={onChangeSimpleDesc}
					/>
				</CreateSection>
				<CreateSection>
					<CreateSubGuideTitle>모집 인원</CreateSubGuideTitle>
					{recruitMembers.map((list, index) => (
						<CreateRecruitList key={index}>
							{`${list.position}`} <span>{`${list.career}/${list.personnel}명/~${list.deadline}까지`}</span>
							<DeleteRecruitListBtn onClick={() => onDeleteRecruitMembers(index)}>제거</DeleteRecruitListBtn>
						</CreateRecruitList>
					))}
					<CreateInputContainer>
						<Select
							height="long"
							margin="0 10px 0 0"
							optionData={positionEx}
							resetValue={selectReset}
							setState={setPosition}
						>
							포지션
						</Select>
						<Select
							height="long"
							margin="0 10px 0 0"
							optionData={careerEx}
							resetValue={selectReset}
							setState={setCareer}
						>
							경력
						</Select>
						<Select
							height="long"
							margin="0 10px 0 0"
							optionData={personnelEx}
							resetValue={selectReset}
							setState={setPersonnel}
						>
							인원
						</Select>
						<DatePicker
							dateFormat="yyyy-MM-dd"
							selected={deadline as Date | null | undefined}
							customInput={<DatePickerCustomBtn initialValue="모집 기한" />}
							onChange={date => setDeadline(date)}
						/>
						<AddRecruitListBtn onClick={onAddRecruitMembers}>추가</AddRecruitListBtn>
					</CreateInputContainer>
				</CreateSection>
				<CreateSection>
					<CreateSubGuideTitle>기술 스택</CreateSubGuideTitle>
					<StackSearch height="long" setState={setStackValue} />
					<RecruitStackWrap>
						{requireStack.map((stack, index) => (
							<StackTag key={index} type="delete" deleteEvent={() => onDeleteStackTag(index)}>
								{stack}
							</StackTag>
						))}
						{requireStack.length ? (
							<RecruitStackClear onClick={() => setRequireStack([])}>조건 초기화</RecruitStackClear>
						) : null}
					</RecruitStackWrap>
				</CreateSection>
				<CreateSection>
					<CreateSubGuideTitle>서비스 단계</CreateSubGuideTitle>
					<Select height="long" margin="0 10px 0 0" optionData={stageEx} setState={setServiceStep}>
						서비스 단계
					</Select>
				</CreateSection>
				<CreateSection>
					<CreateSubGuideTitle>예상 기간</CreateSubGuideTitle>
					<DatePicker
						dateFormat="yyyy-MM-dd"
						selected={period as Date | null | undefined}
						customInput={<DatePickerCustomBtn initialValue="모집 기한" />}
						onChange={date => setPeriod(date)}
					/>
				</CreateSection>
			</CreatTopContainer>
		</>
	);
};

export default CreateTop;
