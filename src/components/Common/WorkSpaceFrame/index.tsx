import React, { KeyboardEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import ProfileImage from '../ProfileImage';
import { getProfileInfoSelector } from '../../../reducer/profile';
import {
	addRoom,
	deleteRoom,
	editRoom,
	getRoomsListInfo,
	getroomsListSelector,
	resetRoomList,
} from '../../../reducer/roomsList';

import {
	AddInput,
	AddListItemBtn,
	CalendarIcon,
	ChatIcon,
	ContentBody,
	ContentTop,
	ContentWrap,
	EditButton,
	Frame,
	HomeIcon,
	InviteIcon,
	KanbanIcon,
	ListItem,
	ListItemWrap,
	ListTitle,
	ListTop,
	ListWrap,
	Pointer,
	ProfileLink,
	SideBar,
	SideBarBottom,
	SideBarMid,
	SideBarTop,
	SettingAlert,
	DeleteAlertBtnWrap,
	EditAlertBtnWrap,
} from './styles';

import { AiOutlineHome, AiOutlineUsergroupAdd, AiOutlineClose } from 'react-icons/ai';
import { RiAddBoxFill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import calendarCheck from '@iconify/icons-bi/calendar-check';
import project24 from '@iconify/icons-octicon/project-24';
import chatTeardropDotsLight from '@iconify/icons-ph/chat-teardrop-dots-light';
import Modal from '../Modal';
import Button from '../Button';
import useInput from '../../../hooks/useInput';
import { getProjectInfo } from '../../../reducer/projectInfo';
import Input from '../Input';
import { getSocketData } from '../../../reducer/kanban';
import InviteMemner from './InviteMember';

interface frameInitType {
	workSpaceType: string;
	pointerTop: string;
	listType: string;
}

interface Props {
	children: ReactNode;
}

const WorkSpaceFrame = ({ children }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { roomsList } = useSelector(getroomsListSelector);
	const userInfo = useSelector(getProfileInfoSelector);
	const historyPath = history.location.pathname.split('/');
	const currentURL = historyPath[2];
	const currentAddress = historyPath[3];
	const currentRoom = historyPath[4];

	const [frameInitState, setFrameInitState] = useState<frameInitType>({
		workSpaceType: '',
		pointerTop: '',
		listType: '',
	});

	const [contentTop, setContentTop] = useState<string>(currentRoom);
	const [openList, setOpenList] = useState<boolean>(true);
	const [openAddInput, setOpenAddInput] = useState<boolean>(false);
	const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);
	const [showEditAlert, setShowEditAlert] = useState<boolean>(false);
	const [showInviteMember, setShowInviteMember] = useState<boolean>(false);
	const [SettingTarget, setSettingTarget] = useState<number>(0);
	const [listName, onChangeListName, setListName] = useInput<string>('');

	const loadInitState = useCallback((): void => {
		if (currentAddress === 'chat') {
			const initState = {
				workSpaceType: '??????',
				listType: '??????',
				pointerTop: '3px',
			};

			setFrameInitState(initState);
		}

		if (currentAddress === 'kanban') {
			const initState = {
				workSpaceType: '????????????',
				listType: '??????',
				pointerTop: '58px',
			};

			setFrameInitState(initState);
		}

		if (currentAddress === 'calendar') {
			const initState = {
				workSpaceType: '?????????',
				listType: '??????',
				pointerTop: '111px',
			};

			setFrameInitState(initState);
		}
	}, []);

	// TODO: room ??????
	const addListItem = useCallback(
		(e: KeyboardEvent<HTMLInputElement>): void => {
			const value = e.currentTarget.value;
			if (value.trim() === '') {
				return;
			}

			if (e.key === 'Enter') {
				const roomValue = {
					currentURL: currentURL,
					currentAddress: currentAddress === 'calendar' ? 'kanban' : currentAddress,
					roomName: { name: value },
				};

				dispatch(addRoom(roomValue));
				setOpenAddInput(false);
			}
		},
		[roomsList],
	);

	const openDeleteAlert = useCallback((e, index: number) => {
		e.preventDefault();
		e.stopPropagation();

		setShowDeleteAlert(true);
		setSettingTarget(index);
	}, []);

	const openEditAlert = useCallback((e, index: number) => {
		e.preventDefault();
		e.stopPropagation();

		setShowEditAlert(true);
		setSettingTarget(index);
	}, []);

	// TODO: room ??????
	const deleteListItem = useCallback((): void => {
		const roomValue = {
			currentURL: currentURL,
			currentAddress: currentAddress === 'calendar' ? 'kanban' : currentAddress,
			roomName: { name: roomsList[SettingTarget] },
		};

		dispatch(deleteRoom(roomValue));

		setShowDeleteAlert(false);
		setContentTop('General');

		history.push(`/workspace/${currentURL}/${currentAddress}/General`);
	}, [roomsList, SettingTarget]);

	// TODO: room ??????
	const onChangeListNameEnter = useCallback((): void => {
		if (listName.trim() === '') {
			return;
		}

		const roomValue = {
			currentURL: currentURL,
			currentAddress: currentAddress === 'calendar' ? 'kanban' : currentAddress,
			roomName: { name: roomsList[SettingTarget] },
			changeName: { name: listName },
		};

		dispatch(editRoom(roomValue));

		setContentTop(listName);
		setSettingTarget(SettingTarget);
		setListName('');
		setShowEditAlert(false);

		history.push(`/workspace/${currentURL}/${currentAddress}/${listName}`);
	}, [listName]);

	const activeListItem = useCallback((): void => {
		const items = document.querySelectorAll('.items');
		const currentIndex = roomsList.indexOf(contentTop);

		items.forEach(item => {
			item.classList.remove('active');
		});
		if (currentIndex !== -1) {
			items[currentIndex].classList.add('active');
		}
	}, [contentTop, roomsList]);

	useEffect(() => {
		const roomValue = {
			currentURL,
			currentAddress: currentAddress === 'calendar' ? 'kanban' : currentAddress,
		};

		dispatch(getRoomsListInfo(roomValue));
		dispatch(getProjectInfo(currentURL));
		loadInitState();

		return () => {
			dispatch(resetRoomList());
		};
	}, []);

	useEffect(() => {
		// ?????? ?????? ??? General ?????? ???????????????
		const items = document.querySelectorAll('.items')[0];

		if (items) {
			items.classList.add('active');
		}
	}, [roomsList]);

	useEffect(() => {
		activeListItem();
	}, [contentTop, roomsList]);

	return (
		<Frame>
			<SideBar>
				<SideBarTop>
					<HomeIcon to="/project">
						<AiOutlineHome />
					</HomeIcon>
				</SideBarTop>
				<SideBarMid>
					<Pointer style={{ top: `${frameInitState.pointerTop}` }} />
					<ChatIcon
						to={`/workspace/${currentURL}/chat/General`}
						onClick={() => dispatch(getSocketData({ taskBox: [], taskItems: {} }))}
					>
						<Icon icon={chatTeardropDotsLight} />
					</ChatIcon>
					<KanbanIcon to={`/workspace/${currentURL}/kanban/${contentTop}`}>
						<Icon icon={project24} />
					</KanbanIcon>
					<CalendarIcon to={`/workspace/${currentURL}/calendar/${contentTop}`}>
						<Icon icon={calendarCheck} />
					</CalendarIcon>
				</SideBarMid>
				<SideBarBottom>
					<InviteIcon onClick={() => setShowInviteMember(true)}>
						<AiOutlineUsergroupAdd />
					</InviteIcon>
					<ProfileLink to={`/profile/${userInfo.id}`}>
						<ProfileImage
							width="35px"
							height="35px"
							profileImage={userInfo.uploadImage}
							profileColor={userInfo.profileColor}
							userName={userInfo.name}
						/>
					</ProfileLink>
				</SideBarBottom>
			</SideBar>
			<ListWrap>
				<ListTop>?????????????????? {frameInitState.workSpaceType}</ListTop>
				<ListTitle className={openList ? 'on' : 'off'} onClick={() => setOpenList(openList => !openList)}>
					<MdKeyboardArrowDown />
					<span>{frameInitState.listType}</span>
				</ListTitle>
				<ListItemWrap className={openList ? 'on' : 'off'}>
					{roomsList.map((item, index) => (
						<ListItem
							className="items"
							key={index}
							to={`/workspace/${currentURL}/${currentAddress}/${item}`}
							onClick={() => setContentTop(item)}
						>
							{item}
							{index > 0 && <EditButton onClick={e => openEditAlert(e, index)} />}
							{index > 0 && <AiOutlineClose onClick={e => openDeleteAlert(e, index)} />}
						</ListItem>
					))}
					{openAddInput && <AddInput autoFocus placeholder={`?????? ??? Enter??? ????????????.`} onKeyPress={addListItem} />}
					<AddListItemBtn onClick={() => setOpenAddInput(openAddInput => !openAddInput)}>
						<RiAddBoxFill />
						<span>{frameInitState.listType} ??????</span>
					</AddListItemBtn>
				</ListItemWrap>
			</ListWrap>
			<ContentWrap>
				<ContentTop>
					<p>{contentTop}</p>
				</ContentTop>
				<ContentBody style={{ backgroundColor: `${currentAddress === 'kanban' && '#f6f6f8'}` }}>{children}</ContentBody>
			</ContentWrap>
			{showDeleteAlert && (
				<Modal setShowModal={setShowDeleteAlert}>
					<SettingAlert>
						<p>?????? ??? ????????? ?????? ???????????????. ?????? ???????????????????</p>
						<DeleteAlertBtnWrap>
							<Button
								size="medium"
								margin="0 10px 0 0"
								buttonType="cancel"
								clickEvent={() => setShowDeleteAlert(false)}
							>
								??????
							</Button>
							<Button size="medium" backgroundColor="delete" clickEvent={deleteListItem}>
								??????
							</Button>
						</DeleteAlertBtnWrap>
					</SettingAlert>
				</Modal>
			)}
			{showEditAlert && (
				<Modal setShowModal={setShowEditAlert}>
					<SettingAlert>
						<p>???????????? ?????? {currentAddress === 'chat' ? '??????' : '??????'} ????????? ???????????????</p>
						<Input
							width={'long'}
							height={'long'}
							initValue={listName}
							placeholderText={currentAddress === 'chat' ? 'ex) ????????????, ??????' : 'ex) 1??????, 2??????'}
							changeEvent={onChangeListName}
							keyEvent={e => e.key === 'Enter' && onChangeListNameEnter()}
						/>
						<EditAlertBtnWrap>
							<Button size="medium" margin="0 10px 0 0" buttonType="cancel" clickEvent={() => setShowEditAlert(false)}>
								??????
							</Button>
							<Button size="medium" clickEvent={onChangeListNameEnter}>
								??????
							</Button>
						</EditAlertBtnWrap>
					</SettingAlert>
				</Modal>
			)}
			{showInviteMember && (
				<Modal setShowModal={setShowInviteMember}>
					<InviteMemner />
				</Modal>
			)}
		</Frame>
	);
};

export default WorkSpaceFrame;
