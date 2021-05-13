import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { recruitCreateDataType, recruitMembersDataType } from '../../../types/types';
import Input from '../../Common/Input';
import Select from '../../Common/Select';
import { CreateSection, CreateSubGuideTitle } from '../CreateContainer/styles';
import { CreatTopContainer, CreateInputContainer, CreateRecruitList } from './styles';

interface Props {
	setMockData: Dispatch<SetStateAction<recruitCreateDataType>>;
}

const CreateTop = ({ setMockData }: Props): JSX.Element => {
	const positionEx = ['프론트엔드', '백엔드'];
	const careerEx = ['경력무관', '1년', '2년', '3년', '5년', '10년'];
	const personnelEx = ['1', '2', '3', '4', '5'];
	const recruitEx = [
		// 디자인 확인용 데이터입니다. 삭제 바람
		{ position: '프론트엔드', career: '경력무관', personnel: '2', deadline: '2021-07-01' },
		{ position: '백엔드', career: '2년 이상', personnel: '1', deadline: '2021-09-01' },
	];
	const stackEx = ['React', 'Typescript']; // 디자인 확인용 데이터입니다. 삭제 바람
	const stageEx = ['모집', '기획', '개발'];

	const [name, setName] = useState<string>('');
	const [position, setPosition] = useState<string>('');
	const [career, setCareer] = useState<string>('');
	const [personnel, setPersonnel] = useState<string>('');
	const [deadline, setDeadline] = useState<string>('');
	const [require_stack, setRequire_stack] = useState<string>('');
	const [service_step, setService_step] = useState<string>('');
	const [period, setPeriod] = useState<string>('');

	const [recruit_members, setRecruit_members] = useState<recruitMembersDataType>({
		position: '',
		career: '',
		personnel: '',
		deadline: '',
	});

	useEffect(() => {
		setRecruit_members({
			position,
			career,
			personnel,
			deadline,
		});

		// setMockData({
		// 	recruit_members,
		// });
	}, [name, position, career, personnel, deadline, require_stack, service_step, period]);

	return (
		<>
			<CreatTopContainer>
				<CreateSection>
					<CreateSubGuideTitle>레시피 한 줄 소개</CreateSubGuideTitle>
					<Input
						width="long"
						height="long"
						placeholderText="ex) 위치 기반 소셜 플랫폼 개발"
						changeEvent={e => setName(e.target.value)}
					/>
				</CreateSection>
				<CreateSection>
					<CreateSubGuideTitle>모집 인원</CreateSubGuideTitle>
					{recruitEx.map((list, index) => (
						<CreateRecruitList key={index}>
							{`${list.position}`} <span>{`${list.career}/${list.personnel}명/~${list.deadline}까지`}</span>
						</CreateRecruitList>
					))}
					<CreateInputContainer>
						<Select height="long" margin="0 10px 0 0" optionData={positionEx} setState={setPosition}>
							포지션
						</Select>
						<Select height="long" margin="0 10px 0 0" optionData={careerEx} setState={setCareer}>
							경력
						</Select>
						<Select height="long" margin="0 10px 0 0" optionData={personnelEx} setState={setPersonnel}>
							인원
						</Select>
						{/* 데이터피커로 대체 예정 */}
						<Input
							width="short"
							height="long"
							placeholderText="모집 기한"
							changeEvent={e => setDeadline(e.target.value)}
						/>
					</CreateInputContainer>
				</CreateSection>
				<CreateSection>
					<CreateSubGuideTitle>기술 스택</CreateSubGuideTitle>
					<Select height="long" margin="0 10px 0 0" optionData={stackEx} setState={setRequire_stack}>
						기술 스택
					</Select>
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
