import React, { useEffect, useState } from 'react';
import { getProfileEdit } from '../../../reducer/profileEdit';
import useInput from '../../../hooks/useInput';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Button from '../../Common/Button';
import Input from '../../Common/Input';
import StackTag from '../../Common/StackTag';
import ToggleButton from '../../Common/ToggleButton';

import {
	ProfileUserInfo,
	ProfileSubTitle,
	UserDetailIntroCard,
	ProfileUserDetailInfo,
} from '../../UserProfile/ProfileTop/styles';
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
} from '../ProfileEditTop/styles';

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
	const history = useHistory();

	const [isToggled, setIsToggled] = useState<boolean>(false);
	const [stack, setStack] = useState<string>('');

	const [gitId, onChangeGit_id] = useInput<string>(profileInfo.gitId);
	const [office, onChangeoffice] = useInput<string>(profileInfo.career.office);
	const [job, onChangeJob] = useInput<string>(profileInfo.career.job);
	const [period, onChangePeriod] = useInput<string>(profileInfo.career.period);

	const data: profileEditType = {
		name: name,
		mobile: mobile,
		gitId: gitId,
		career: {
			office: office,
			job: job,
			period: period,
		},
		isOpen: false,
		aboutMe: aboutMe,
		uploadImage: image,
		stacks: [...stackBucket],
	};

	useEffect(() => {
		if (stackBucket.length > 4) {
			return;
		}

		if (stack) {
			setStackBucket([...stackBucket, stack]);
		}
	}, [stack]);

	const onDeleteStack = (index: number): void => {
		const currentStackBucket = stackBucket.slice();
		currentStackBucket.splice(index, 1);
		setStackBucket(currentStackBucket);
	};

	const onChangeProfileInfo = (): void => {
		// TODO: 프로필 갱신 요청하기
		dispatch(getProfileEdit(data));
		history.push(`/profile/${profileInfo.id}`);
	};
	return (
		<>
			<UserDetailIntroCard>
				<ProfileUserDetailInfo>
					<div>
						<ProfileSubTitle>Github 아이디</ProfileSubTitle>
						<ProfileUserInfo>
							<Input placeholderText="아이디를 입력하세요" initValue={gitId} changeEvent={onChangeGit_id} />
						</ProfileUserInfo>
					</div>
					<div>
						<ProfileSubTitle>경력</ProfileSubTitle>
						<ProfileUserInfo>
							<ProfileCareerContainer>
								<CareerInput>
									<Input width="120px" placeholderText="회사 이름" initValue={office} changeEvent={onChangeoffice} />
								</CareerInput>
								<CareerInput>
									<Input
										width="120px"
										placeholderText="직무 (ex. 프론트엔드)"
										initValue={job}
										changeEvent={onChangeJob}
									/>
								</CareerInput>
								<CareerInput>
									<Input
										width="160px"
										placeholderText="경력 (ex. 1~3년)"
										initValue={period}
										changeEvent={onChangePeriod}
									/>
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
								<StackSearchCustom width="long" setState={setStack} />
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
							<ToggleButton isToggled={isToggled} changeEvent={() => setIsToggled(!isToggled)}>
								{isToggled && <ToggleMessage>프로젝트를 공개합니다</ToggleMessage>}
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
