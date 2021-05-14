import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import useInput from '../../../hooks/useInput';
import { recruitCreateTopDataType, recruitMembersDataType } from '../../../types/types';
import Input from '../../Common/Input';
import Select from '../../Common/Select';
import StackSearch from '../../Common/StackSearch';
import StackTag from '../../Common/StackTag';
import { CreateSection, CreateSubGuideTitle } from '../CreateContainer/styles';
import {
	CreatTopContainer,
	CreateInputContainer,
	CreateRecruitList,
	DeleteRecruitListBtn,
	AddRecruitListBtn,
	RecruitStackWrap,
	RecruitStackClear,
} from './styles';

interface Props {
	setTopMockData: Dispatch<SetStateAction<recruitCreateTopDataType>>;
}

const CreateTop = ({ setTopMockData }: Props): JSX.Element => {
	const positionEx = ['프론트엔드', '백엔드'];
	const careerEx = ['경력무관', '1년', '2년', '3년', '5년', '10년'];
	const personnelEx = ['1', '2', '3', '4', '5'];
	const stageEx = ['모집', '기획', '개발'];

	const [recruit_members, setRecruit_members] = useState<recruitMembersDataType[]>([]);
	const [require_stack, setRequire_stack] = useState<string[]>([]);
	const [stackValue, setStackValue] = useState<string>('');
	const [selectReset, setSelectReset] = useState<boolean>(false);

	const [simple_desc, onChangeSimple_desc] = useInput<string>('');

	const [position, setPosition] = useState<string>('');
	const [career, setCareer] = useState<string>('');
	const [personnel, setPersonnel] = useState<string>('');
	const [service_step, setService_step] = useState<string>('');

	const [period, setPeriod] = useState<string>(''); // 데이터피커
	const [deadline, setDeadline] = useState<string>(''); // 데이터피커로 변경 할 예정

	useEffect(() => {
		setTopMockData({
			simple_desc,
			recruit_members,
			require_stack,
			service_step,
			period,
		});
	}, [simple_desc, position, career, personnel, deadline, require_stack, service_step, period, recruit_members]);

	useEffect(() => {
		if (stackValue) {
			setRequire_stack([...require_stack, stackValue]);
		}
	}, [stackValue]);

	const onAddRecruitMembers = () => {
		if (!(position && career && personnel && deadline)) {
			return;
		}

		const recruitMembersFrame: recruitMembersDataType = {
			position,
			career,
			personnel,
			deadline,
		};

		setSelectReset(!selectReset);
		setRecruit_members([...recruit_members, recruitMembersFrame]);
	};

	const onDeleteRecruitMembers = useCallback(
		(index: number) => {
			const deleteMembers = [...recruit_members];
			deleteMembers.splice(index, 1);
			setRecruit_members(deleteMembers);
		},
		[recruit_members],
	);

	const onDeleteStackTag = useCallback(
		(index: number) => {
			const deleteStackTag = [...require_stack];
			deleteStackTag.splice(index, 1);
			setRequire_stack(deleteStackTag);
		},
		[require_stack],
	);

	return (
		<>
			<CreatTopContainer>
				<CreateSection>
					<CreateSubGuideTitle>레시피 한 줄 소개</CreateSubGuideTitle>
					<Input
						width="long"
						height="long"
						placeholderText="ex) 위치 기반 소셜 플랫폼 개발"
						changeEvent={onChangeSimple_desc}
					/>
				</CreateSection>
				<CreateSection>
					<CreateSubGuideTitle>모집 인원</CreateSubGuideTitle>
					{recruit_members.map((list, index) => (
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
						{/* 데이터피커로 대체 예정 */}
						<Input
							width="short"
							height="long"
							placeholderText="모집 기한"
							changeEvent={e => setDeadline(e.target.value)}
						/>
						<AddRecruitListBtn onClick={onAddRecruitMembers}>추가</AddRecruitListBtn>
					</CreateInputContainer>
				</CreateSection>
				<CreateSection>
					<CreateSubGuideTitle>기술 스택</CreateSubGuideTitle>
					<StackSearch height="long" setState={setStackValue} />
					<RecruitStackWrap>
						{require_stack.map((stack, index) => (
							<StackTag key={index} type="delete" deleteEvent={() => onDeleteStackTag(index)}>
								{stack}
							</StackTag>
						))}
						{require_stack.length ? (
							<RecruitStackClear onClick={() => setRequire_stack([])}>조건 초기화</RecruitStackClear>
						) : null}
					</RecruitStackWrap>
				</CreateSection>
				<CreateSection>
					<CreateSubGuideTitle>서비스 단계</CreateSubGuideTitle>
					<Select height="long" margin="0 10px 0 0" optionData={stageEx} setState={setService_step}>
						서비스 단계
					</Select>
				</CreateSection>
				<CreateSection>
					<CreateSubGuideTitle>예상 기간</CreateSubGuideTitle>
					{/* 데이터피커로 대체 예정*/}
					<Input width="short" height="long" placeholderText="예상 기간" changeEvent={e => setPeriod(e.target.value)} />
				</CreateSection>
			</CreatTopContainer>
		</>
	);
};

export default CreateTop;
