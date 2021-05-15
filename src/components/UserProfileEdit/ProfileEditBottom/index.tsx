import React, { useState, KeyboardEvent } from 'react';
import { getProfileEdit } from '../../../reducer/profileEdit';
import useInput from '../../../hooks/useInput';

import { IoMdClose } from 'react-icons/io';
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
	EditButton,
	AddStackContainer,
	CurrentStack,
	StackMaximum,
	ToggleMessage,
} from '../ProfileEditTop/styles';

import { profileEditType, profileInfoDataType } from '../../../types/types';

interface Props {
	profileInfo: profileInfoDataType;
	name: string;
	mobile: string;
	aboutMe: string;
	image: string;
}

const ProfileEditBottom = ({ profileInfo, name, mobile, aboutMe, image }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [stackName, onChangeStackName, setStackName] = useInput<string>('');
	const [stackBucket, setStackBucket] = useState<string[]>([]);
	const [isToggled, setIsToggled] = useState<boolean>(false);

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
		profileImage: image,
		stacks: [...stackBucket],
	};
	console.log('data', data);

	const onAddStack = (): void => {
		if (stackName.trim() === '') {
			setStackName('');
			return;
		}
		if (stackBucket.length > 4) {
			return;
		}
		setStackBucket([...stackBucket, stackName]);
		setStackName('');
	};

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
							<span>
								<Input width="120px" placeholderText="회사 이름" initValue={office} changeEvent={onChangeoffice} />
							</span>
						</ProfileUserInfo>
						<ProfileUserInfo>
							<span>
								<Input
									width="120px"
									placeholderText="직무 (ex. 프론트엔드)"
									initValue={job}
									changeEvent={onChangeJob}
								/>
							</span>
						</ProfileUserInfo>
						<ProfileUserInfo>
							<span>
								<Input
									width="120px"
									placeholderText="경력 (ex. 1~3년)"
									initValue={period}
									changeEvent={onChangePeriod}
								/>
							</span>
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
							<Input
								placeholderText="사용 가능한 스택을 'enter'키로 추가하세요"
								initValue={stackName}
								changeEvent={onChangeStackName}
								keyEvent={(e: KeyboardEvent) => e.key === 'Enter' && onAddStack()}
							/>
							{stackBucket.length > 4 ? <StackMaximum>5개 추가 완료</StackMaximum> : null}
							<AddStackContainer>
								{stackBucket.map((stack: string, index: number) => (
									<CurrentStack key={index}>
										<StackTag>{stack}</StackTag>
										<IoMdClose onClick={() => onDeleteStack(index)} />
									</CurrentStack>
								))}
							</AddStackContainer>
						</ProfileUserInfo>
					</div>

					{/* TODO: 토글 버튼 */}
					<div>
						<ProfileSubTitle>프로젝트 공개</ProfileSubTitle>
						<ProfileUserInfo>
							<ToggleButton isToggled={isToggled} changeEvent={() => setIsToggled(!isToggled)}>
								{isToggled && <ToggleMessage>프로젝트를 공개합니다</ToggleMessage>}
							</ToggleButton>
						</ProfileUserInfo>
					</div>
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
