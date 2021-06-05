import React, { useCallback, useEffect, useState } from 'react';
import { getProfileEdit } from '../../../reducer/profileEdit';
import useInput from '../../../hooks/useInput';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Button from '../../Common/Button';
import Input from '../../Common/Input';
import StackTag from '../../Common/StackTag';
import ToggleButton from '../../Common/ToggleButton';
import Select from '../../Common/Select';

import { ProfileUserInfo, ProfileSubTitle } from '../../UserProfile/ProfileTop/styles';
import { UserDetailIntroCard, ProfileUserDetailInfo } from '../../UserProfile/ProfileBottom/styles';
import { SearchInputContiner, StackSearchCustom } from '../../Recruit/Search/styles';
import {
	EditButton,
	SearchCodeIcon,
	StackClear,
	CareerInput,
	AddStackContainer,
	StackMaximum,
	ToggleMessage,
	ShowProject,
	ProfileCareerContainer,
} from './styles';

import { profileEditType, profileInfoDataType } from '../../../types/types';

interface Props {
	profileInfo: profileInfoDataType;
	name: string;
	mobile: string;
	aboutMe: string;
	image: string;
	stackBucket: string[];
	setStackBucket: React.Dispatch<React.SetStateAction<string[]>>;
}

const ProfileEditBottom = ({
	profileInfo,
	name,
	mobile,
	aboutMe,
	image,
	stackBucket,
	setStackBucket,
}: Props): JSX.Element => {
	const dispatch = useDispatch();
	const jobEx = ['프론트엔드', '백엔드', '풀스택', '웹 디자이너', 'IOS 개발자', 'Android 개발자', '기타'];
	const periodEx = ['1년 미만', '1년 이상', '2년 이상', '3년 이상', '5년 이상'];
	const history = useHistory();

	const [stack, setStack] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(profileInfo.isOpen);
	const [job, setJob] = useState<string>(profileInfo.career.job);
	const [period, setPeriod] = useState<string>(profileInfo.career.period);

	const [gitId, onChangeGit_id] = useInput<string>(profileInfo.gitId);
	const [office, onChangeoffice] = useInput<string>(profileInfo.career.office);

	// TODO: 프로젝트 공개 여부
	const onOpenProject = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	const data: profileEditType = {
		name: name,
		mobile: mobile,
		gitId: gitId,
		career: {
			office: office,
			job: job,
			period: period,
		},
		isOpen: isOpen,
		aboutMe: aboutMe,
		uploadImage: image,
		stacks: [...stackBucket],
	};

	const onDeleteStack = useCallback(
		(index: number): void => {
			const currentStackBucket = stackBucket.slice();
			currentStackBucket.splice(index, 1);
			setStackBucket(currentStackBucket);
		},
		[stackBucket],
	);

	const onChangeProfileInfo = useCallback((): void => {
		// TODO: 프로필 갱신 요청하기
		if (image === '') {
			data.uploadImage = 'deleteImage';
		}

		dispatch(getProfileEdit(data));
		history.push(`/profile/${profileInfo.id}`);
	}, [data]);

	useEffect(() => {
		if (stackBucket.length > 4) {
			return;
		}

		if (stack) {
			setStackBucket([...stackBucket, stack]);
		}
	}, [stack]);

	return (
		<>
			<UserDetailIntroCard>
				<ProfileUserDetailInfo>
					<div>
						<ProfileSubTitle>Github 아이디</ProfileSubTitle>
						<ProfileUserInfo>
							<Input
								width="long"
								height="long"
								placeholderText="아이디를 입력하세요"
								initValue={gitId}
								changeEvent={onChangeGit_id}
							/>
						</ProfileUserInfo>
					</div>
					<div>
						<ProfileSubTitle>경력</ProfileSubTitle>
						<ProfileUserInfo>
							<ProfileCareerContainer>
								<CareerInput>
									<Input
										width="long"
										height="long"
										placeholderText="회사 이름"
										initValue={office}
										changeEvent={onChangeoffice}
									/>
								</CareerInput>
								<CareerInput>
									<Select height="long" optionData={jobEx} resetValue={true} setState={setJob}>
										직무
									</Select>
								</CareerInput>
								<CareerInput>
									<Select height="long" optionData={periodEx} setState={setPeriod}>
										경력
									</Select>
								</CareerInput>
							</ProfileCareerContainer>
						</ProfileUserInfo>
					</div>

					{/* TODO: 스택 추가하기 */}
					<div>
						<ProfileSubTitle>
							사용 스택
							<br />
							(최대 5개)
						</ProfileSubTitle>
						<ProfileUserInfo>
							<SearchInputContiner>
								<SearchCodeIcon />
								<StackSearchCustom width="long" height="long" margin="0 10px 0 0" setState={setStack} />
							</SearchInputContiner>
							{stackBucket.length > 4 ? <StackMaximum>5개 추가 완료</StackMaximum> : null}
							<AddStackContainer>
								{stackBucket.length ? <StackClear onClick={() => setStackBucket([])}>조건 초기화</StackClear> : null}
								{stackBucket.map((stack: string, index: number) => (
									<StackTag key={index} type="delete" deleteEvent={() => onDeleteStack(index)}>
										{stack}
									</StackTag>
								))}
							</AddStackContainer>
						</ProfileUserInfo>
					</div>

					{/* TODO: 토글 버튼 */}
					<ShowProject>
						<ProfileSubTitle>프로젝트 공개</ProfileSubTitle>
						<ProfileUserInfo>
							<ToggleButton isOpenProject={isOpen} changeEvent={onOpenProject}>
								{isOpen && <ToggleMessage>프로젝트를 공개합니다</ToggleMessage>}
							</ToggleButton>
						</ProfileUserInfo>
					</ShowProject>
				</ProfileUserDetailInfo>
			</UserDetailIntroCard>

			{/* TODO: 프로필 변경하기 */}
			<EditButton>
				<Button size="medium" clickEvent={onChangeProfileInfo}>
					프로필 변경
				</Button>
			</EditButton>
		</>
	);
};

export default ProfileEditBottom;
