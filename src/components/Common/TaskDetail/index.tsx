import React, { Dispatch, forwardRef, KeyboardEvent, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { Socket } from 'socket.io-client';
import { useParams } from 'react-router';

import useInput from '../../../hooks/useInput';
import dateFormat from '../../../utils/dateformat';
import Input from '../Input';
import ProfileImage from '../ProfileImage';
import Assignees from './Assignees';

import {
	kanbanDataType,
	taskDataType,
	taskChackListDataType,
	taskCommentDataType,
	RecruitWriterDataType,
} from '../../../types/types';

import { getProfileInfoSelector } from '../../../reducer/profile';
import { deleteTaskItem, kanbanDataSelector } from '../../../reducer/kanban';

import {
	CheckBtn,
	CheckListInput,
	CheckListWrap,
	Comment,
	CommentContent,
	CommentInfo,
	CommentUser,
	CommentWrap,
	ContentWrap,
	DescTextArea,
	Item,
	Section,
	SectionTitle,
	TaskDetailContainer,
	WritingInput,
	WritingWrap,
	CheckDeleteBtn,
	PeriodWrap,
	DateCustomBtn,
	ColorLabelWrap,
	FlexSection,
} from './styles';

interface Props {
	targetTask: string;
	socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	setData: Dispatch<SetStateAction<taskDataType>>;
}

const TaskDetail = ({ targetTask, socket, setShowModal, setData }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const { part } = useParams<{ part: string }>();
	const userInfo = useSelector(getProfileInfoSelector);
	const { taskBox, taskItems }: kanbanDataType = useSelector(kanbanDataSelector);
	const taskData: taskDataType = taskItems[targetTask];

	const [checkListValue, onChangeCheckListValue, setCheckListValue] = useInput<string>('');
	const [commentValue, onChangeCommentValue, setCommentValue] = useInput<string>('');

	const [taskTitle, onChangeTaskTitle] = useInput<string>(taskData.taskTitle);
	const [desc, setDesc] = useState<string>(taskData.desc);
	const [checkList, setCheckList] = useState<taskChackListDataType[]>(taskData.checkList);
	const [comment, setComment] = useState<taskCommentDataType[]>(taskData.comment);
	const [startDate, setStartDate] = useState<Date>();
	const [endDate, setEndDate] = useState<Date>();
	const [selectedMember, setSelectedMember] = useState<RecruitWriterDataType[]>(taskData.assignees);

	const addCheckList = useCallback((): void => {
		setCheckList([...checkList, { isChecked: false, desc: checkListValue }]);
		setCheckListValue('');
	}, [checkList, checkListValue]);

	const deleteCheckList = useCallback(
		(e, index: number): void => {
			e.stopPropagation();
			const checkListCopy = [...checkList];
			checkListCopy.splice(index, 1);

			setCheckList(checkListCopy);
		},
		[checkList],
	);

	const listChecked = useCallback(
		(index: number): void => {
			const checkListCopy = [...checkList];
			checkListCopy[index] = { ...checkListCopy[index], isChecked: !checkListCopy[index].isChecked };

			setCheckList(checkListCopy);
		},
		[checkList],
	);

	const addComment = useCallback((): void => {
		setComment([
			...comment,
			{
				body: commentValue,
				writer: {
					profileColor: userInfo.profileColor,
					profileImage: userInfo.uploadImage,
					userName: userInfo.name,
					id: userInfo.id,
				},
			},
		]);
		setCommentValue('');
	}, [comment, commentValue]);

	const deleteComment = useCallback(
		(index: number): void => {
			const commentCopy = [...comment];
			commentCopy.splice(index, 1);

			setComment(commentCopy);
		},
		[comment],
	);

	const onDeleteTaskItem = () => {
		let target = [0, 0];

		taskBox.forEach((box, index) => {
			if (box.tasks.indexOf(targetTask) + 1) {
				target = [index, box.tasks.indexOf(targetTask)];
			}
		});

		socket?.emit('deleteTaskItem', { targetListIndex: target[0], targetIndex: target[1], part });
		dispatch(deleteTaskItem({ targetListIndex: target[0], targetIndex: target[1] }));
		setShowModal(false);
	};

	const DatePickerCustomBtn = forwardRef(({ value, onClick, type }: any, ref: any) => {
		return (
			<DateCustomBtn className="example-custom-input" onClick={onClick} ref={ref}>
				{value ? value : type === 'start' ? 'Strat Date' : 'End Date'}
			</DateCustomBtn>
		);
	});
	DatePickerCustomBtn.displayName = 'custom btn';

	useEffect(() => {
		setData({
			taskTitle,
			desc,
			checkList,
			comment,
			startDate: dateFormat(startDate as Date, 'md'),
			endDate: dateFormat(endDate as Date, 'md'),
			taskColor: taskData.taskColor,
			assignees: selectedMember,
			dragging: false,
		});
	}, [taskTitle, desc, checkList, comment, startDate, endDate, selectedMember]);

	return (
		<TaskDetailContainer>
			<Input
				width="long"
				height="long"
				margin="0 0 20px 0"
				placeholderText="테스크 이름을 작성하세요"
				initValue={taskTitle}
				changeEvent={onChangeTaskTitle}
			/>
			<Section>
				<SectionTitle>테스크 내용</SectionTitle>
				<DescTextArea value={desc} onChange={e => setDesc(e.target.value)} />
			</Section>
			<FlexSection>
				<Assignees selectedMember={selectedMember} setSelectedMember={setSelectedMember} />
				<ColorLabelWrap>
					<SectionTitle>컬러 라벨</SectionTitle>
				</ColorLabelWrap>
			</FlexSection>
			<FlexSection>
				<SectionTitle style={{ margin: '0' }}>기간</SectionTitle>
				<PeriodWrap>
					<DatePicker
						dateFormat="M월 d일"
						selected={startDate}
						onChange={date => setStartDate(date as Date)}
						customInput={<DatePickerCustomBtn type={'start'} />}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						monthsShown={2}
					/>
					<DatePicker
						dateFormat="M월 d일"
						selected={endDate}
						onChange={date => setEndDate(date as Date)}
						customInput={<DatePickerCustomBtn type={'end'} />}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						minDate={startDate}
						monthsShown={2}
					/>
				</PeriodWrap>
			</FlexSection>
			<Section>
				<SectionTitle>체크리스트</SectionTitle>
				<CheckListInput
					value={checkListValue}
					placeholder="작성 후 Enter를 누르세요"
					onChange={onChangeCheckListValue}
					onKeyPress={(e: KeyboardEvent) => e.key === 'Enter' && addCheckList()}
				/>
				<CheckListWrap>
					{checkList.map((list, index) => (
						<Item key={index} className={list.isChecked ? 'checked' : ''} onClick={() => listChecked(index)}>
							<ContentWrap>
								<CheckBtn className="checkBtn" />
								<span>{list.desc}</span>
							</ContentWrap>
							<CheckDeleteBtn onClick={e => deleteCheckList(e, index)} />
						</Item>
					))}
				</CheckListWrap>
			</Section>
			<button onClick={() => onDeleteTaskItem()}>삭제ㅔㅔㅔㅔ</button>
			<Section>
				<SectionTitle>댓글</SectionTitle>
				<WritingWrap>
					<ProfileImage
						width="30px"
						height="30px"
						profileColor={userInfo.profileColor}
						profileImage={userInfo.uploadImage}
						userName={userInfo.name}
					/>
					<WritingInput
						placeholder="작성 후 Enter를 누르세요"
						value={commentValue}
						onChange={onChangeCommentValue}
						onKeyPress={(e: KeyboardEvent) => e.key === 'Enter' && addComment()}
					/>
				</WritingWrap>
				<CommentWrap>
					{comment.map((comment, index) => (
						<Comment key={index}>
							<ProfileImage
								width="30px"
								height="30px"
								profileColor={userInfo.profileColor}
								profileImage={userInfo.uploadImage}
								userName={userInfo.name}
							/>
							<CommentInfo>
								<CommentUser>
									<p>
										{userInfo.name} <span>10분 전</span>
									</p>
									<button onClick={() => deleteComment(index)}>삭제</button>
								</CommentUser>
								<CommentContent>{comment.body}</CommentContent>
							</CommentInfo>
						</Comment>
					))}
				</CommentWrap>
			</Section>
		</TaskDetailContainer>
	);
};

export default TaskDetail;
