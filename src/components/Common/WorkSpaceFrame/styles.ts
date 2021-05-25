import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Frame = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	font-family: 'NanumSquareR';
	background-color: #1c1f3b;
`;

////////////////////////////////////////
////////          Side          ////////
////////////////////////////////////////

export const SideBar = styled.div`
	position: relative;
	width: 66px;
	height: 100%;
	padding: 0 18px;
	background-color: #1c1f3b;
`;

export const SideBarTop = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 100%;
	height: 60px;
	margin-bottom: 30px;
	border-bottom: 1px solid #fff;
`;

export const SideBarMid = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
	flex-direction: column;
	position: relative;
	width: 100%;
`;

export const SideBarBottom = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
	flex-direction: column;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 20px 18px;
`;

export const Pointer = styled.div`
	position: absolute;
	right: -18px;
	width: 0px;
	height: 0px;
	border-top: 10px solid transparent;
	border-right: 10px solid #fff;
	border-bottom: 10px solid transparent;
	border-left: 10px solid transparent;
`;

export const HomeIcon = styled(Link)`
	${({ theme }) => theme.align.flexHorizontal}
	font-size: 23px;
	color: #fff;
`;

export const ChatIcon = styled(Link)`
	${({ theme }) => theme.align.flexHorizontal}
	margin-bottom: 30px;
	font-size: 27px;
	color: #fff;
`;

export const KanbanIcon = styled(Link)`
	${({ theme }) => theme.align.flexHorizontal}
	margin-bottom: 30px;
	font-size: 24px;
	color: #fff;
`;

export const CalendarIcon = styled(Link)`
	${({ theme }) => theme.align.flexHorizontal}
	font-size: 20px;
	color: #fff;
`;

export const InviteIcon = styled.button`
	${({ theme }) => theme.align.flexCenter}
	margin-bottom: 30px;
	margin-left: 2px;
	font-size: 27px;
	color: #fff;
`;

export const ProfileLink = styled(Link)`
	${({ theme }) => theme.align.flexCenter}
`;

////////////////////////////////////////
////////          List          ////////
////////////////////////////////////////

export const ListWrap = styled.div`
	width: 240px;
	height: 100%;
	padding: 0 20px;
	background-color: #fff;
	border-right: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 20px 0 0 0;
`;

export const ListTop = styled.div`
	${({ theme }) => theme.align.flexVertical}
	width: 100%;
	height: 60px;
	margin-bottom: 10px;
	color: #aaa;
`;

export const ListTitle = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexVertical}
	margin-bottom: 5px;
	font-family: 'NanumSquareB';

	& > span {
		padding-left: 5px;
	}

	& > svg {
		transition: 0.1s;
	}

	&.off > svg {
		transform: rotate(-90deg);
	}
`;

export const ListItemWrap = styled.div`
	overflow: hidden;
	width: 100%;

	&.on {
		display: block;
	}

	&.off {
		display: none;
	}
`;

export const ListItem = styled(Link)`
	cursor: pointer;
	overflow: hidden;
	display: block;
	position: relative;
	transition: 0.1s;
	height: 30px;
	padding: 6px 20px 0 21px;
	text-overflow: ellipsis;
	color: #555;

	& > svg {
		position: absolute;
		top: 9px;
		right: 10px;
		opacity: 0;
		transition: 0.1s;
		font-size: 12px;
		color: #fff;
	}

	&:hover {
		color: #fff;
		background-color: ${({ theme }) => theme.color.pointColor};
	}

	&:hover > svg {
		opacity: 1;
	}

	&.active {
		color: #fff;
		background-color: ${({ theme }) => theme.color.pointColor};
	}
`;

export const AddInput = styled.input`
	width: 100%;
	height: 30px;
	margin-top: 5px;
	padding: 0 10px;
	font-family: 'NanumsquareR';
	font-size: 14px;
	color: #555;
	border: 1px solid ${({ theme }) => theme.color.lineColor};

	&::placeholder {
		font-size: 13px;
	}
`;

export const AddListItemBtn = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexVertical}
	margin-top: 5px;
	font-size: 17px;
	color: #888;

	& > svg {
		transition: 0.1s;
		color: #a6a6a8;
	}

	&:hover > svg {
		color: ${({ theme }) => theme.color.pointColor};
	}

	& > span {
		padding-left: 4px;
		font-size: 15px;
	}
`;

export const DeleteAlert = styled.div`
	${({ theme }) => theme.align.positionCenter}
	padding: 30px;
	background-color: #fff;
	border-radius: 3px;

	& > p {
		font-size: 18px;
		margin-bottom: 20px;
	}
`;

export const DeleteAlertBtnWrap = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
`;

////////////////////////////////////////
////////        Content         ////////
////////////////////////////////////////

export const ContentWrap = styled.div`
	width: calc(100% - 304px);
	height: 100%;
	background-color: #fff;
`;

export const ContentTop = styled.div`
	${({ theme }) => theme.align.flexVertical};
	width: 100%;
	height: 60px;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};

	& > p {
		padding: 0 20px;
		font-family: 'NanumSquareB';
		font-size: 20px;
	}
`;

export const ContentBody = styled.div`
	overflow-x: auto;
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 60px);
`;
