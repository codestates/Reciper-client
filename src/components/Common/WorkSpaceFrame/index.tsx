import React, { KeyboardEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import ProfileImage from '../ProfileImage';
import { getProfileInfoSelector } from '../../../reducer/profile';

import {
	AddInput,
	AddListItemBtn,
	CalendarIcon,
	ChatIcon,
	ContentBody,
	ContentTop,
	ContentWrap,
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
} from './styles';

import { AiOutlineHome, AiOutlineUsergroupAdd, AiOutlineClose } from 'react-icons/ai';
import { RiAddBoxFill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import calendarCheck from '@iconify/icons-bi/calendar-check';
import project24 from '@iconify/icons-octicon/project-24';
import chatTeardropDotsLight from '@iconify/icons-ph/chat-teardrop-dots-light';

interface frameInitType {
	workSpaceType: string;
	pointerTop: string;
	listType: string;
}

interface Props {
	children: ReactNode;
	listData: string[];
}

/*
	listData - 채널, 파트에 들어갈 데이터
*/

const WorkSpaceFrame = ({ children, listData }: Props): JSX.Element => {
	const userInfo = useSelector(getProfileInfoSelector);
	const history = useHistory();
	const historyPath = history.location.pathname.split('/');
	const currentURL = historyPath[2];
	const currentAddress = historyPath[3];

	const [listItems, setListItems] = useState(['General', ...listData]);
	const [frameInitState, setFrameInitState] = useState<frameInitType>({
		workSpaceType: '',
		pointerTop: '',
		listType: '',
	});

	const [contentTop, setContentTop] = useState<string>(listItems[0]);
	const [openList, setOpenList] = useState<boolean>(true);
	const [openAddInput, setOpenAddInput] = useState<boolean>(false);

	const loadInitState = useCallback((): void => {
		if (currentAddress === 'chatting') {
			const initState = {
				workSpaceType: '채팅',
				listType: '채널',
				pointerTop: '3px',
			};

			setFrameInitState(initState);
		}

		if (currentAddress === 'kanban') {
			const initState = {
				workSpaceType: '칸반보드',
				listType: '파트',
				pointerTop: '58px',
			};

			setFrameInitState(initState);
		}

		if (currentAddress === 'calendar') {
			const initState = {
				workSpaceType: '캘린더',
				listType: '파트',
				pointerTop: '111px',
			};

			setFrameInitState(initState);
		}
	}, []);

	// 리덕스로 바꿀 예정
	const addListItem = useCallback(
		(e: KeyboardEvent<HTMLInputElement>): void => {
			const value = e.currentTarget.value;
			if (value.trim() === '') {
				return;
			}

			if (e.key === 'Enter') {
				setListItems([...listItems, value]);
				setOpenAddInput(false);
				setContentTop(value);

				history.push(`/workspace/${currentURL}/${currentAddress}/${value}`);
			}
		},
		[listItems],
	);

	// 리덕스로 바꿀 예정
	const deleteListItem = useCallback(
		(e, index: number): void => {
			e.preventDefault();
			e.stopPropagation();

			const copyList = [...listItems];
			copyList.splice(index, 1);

			setListItems(copyList);
			setContentTop('General');

			history.push(`/workspace/${currentURL}/${currentAddress}/General`);
		},
		[listItems],
	);

	const activeListItem = useCallback((): void => {
		const items = document.querySelectorAll('.items');
		const currentIndex = listItems.indexOf(contentTop);

		items.forEach(item => {
			item.classList.remove('active');
		});

		items[currentIndex].classList.add('active');
	}, [contentTop]);

	useEffect(() => {
		loadInitState();
	}, []);

	useEffect(() => {
		activeListItem();
	}, [contentTop]);

	return (
		<Frame>
			<SideBar>
				<SideBarTop>
					<HomeIcon to="/recruit">
						<AiOutlineHome />
					</HomeIcon>
				</SideBarTop>
				<SideBarMid>
					<Pointer style={{ top: `${frameInitState.pointerTop}` }} />
					<ChatIcon to={`/workspace/${currentURL}/chatting/general`}>
						<Icon icon={chatTeardropDotsLight} />
					</ChatIcon>
					<KanbanIcon to={`/workspace/${currentURL}/kanban/general`}>
						<Icon icon={project24} />
					</KanbanIcon>
					<CalendarIcon to={`/workspace/${currentURL}/calendar/general`}>
						<Icon icon={calendarCheck} />
					</CalendarIcon>
				</SideBarMid>
				<SideBarBottom>
					<InviteIcon>
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
				<ListTop>워크스페이스 {frameInitState.workSpaceType}</ListTop>
				<ListTitle className={openList ? 'on' : 'off'} onClick={() => setOpenList(openList => !openList)}>
					<MdKeyboardArrowDown />
					<span>{frameInitState.listType}</span>
				</ListTitle>
				<ListItemWrap className={openList ? 'on' : 'off'}>
					{listItems.map((item, index) => (
						<ListItem
							className="items"
							key={index}
							to={`/workspace/${currentURL}/${currentAddress}/${item}`}
							onClick={() => setContentTop(item)}
						>
							{item}
							{index > 0 && <AiOutlineClose onClick={e => deleteListItem(e, index)} />}
						</ListItem>
					))}
					{openAddInput && <AddInput placeholder={`작성 후 Enter를 누르세요.`} onKeyPress={addListItem} />}
					<AddListItemBtn onClick={() => setOpenAddInput(openAddInput => !openAddInput)}>
						<RiAddBoxFill />
						<span>{frameInitState.listType} 추가</span>
					</AddListItemBtn>
				</ListItemWrap>
			</ListWrap>
			<ContentWrap>
				<ContentTop>
					<p>{contentTop}</p>
				</ContentTop>
				<ContentBody>{children}</ContentBody>
			</ContentWrap>
		</Frame>
	);
};

export default WorkSpaceFrame;