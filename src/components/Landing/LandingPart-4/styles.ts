import styled from 'styled-components';
import { BiCalendarCheck } from 'react-icons/bi';
import { BsKanban, BsChatDots } from 'react-icons/bs';
import { TiHomeOutline } from 'react-icons/ti';
import { AiOutlineLine } from 'react-icons/ai';
import { RiArrowLeftSFill } from 'react-icons/ri';

export const LandingFourthContainer = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 100%;
	min-height: 200vh;
	padding: 70px;
	background-color: #24272c;
`;

export const ServiceWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 1400px;
`;

export const ServiceBackground = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 800px;
	height: 500px;
	margin: 20px 0;
	background-color: #1c1f3b;
	border-radius: 3px;
`;
export const ServiceMenu = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: column;
	width: 48px;
	height: 500px;
	font-size: 28px;
	color: #fff;
`;

export const ServiceMenuHome = styled(TiHomeOutline)`
	margin-top: 16px;
	font-size: 24px;
`;

export const ServiceMenuLine = styled(AiOutlineLine)``;

export const ServiceMenuCalendar = styled(BiCalendarCheck)`
	margin: 4px 0 10px 0;
	font-size: 26px;
`;

export const ServiceMenuKanban = styled(BsKanban)`
	margin: 10px 0;
	font-size: 22px;
`;

export const ServiceMenuChat = styled(BsChatDots)`
	margin: 10px 0;
	font-size: 22px;
`;

export const ServiceCalendarArrow = styled(RiArrowLeftSFill)`
	position: absolute;
	left: 7px;
	bottom: 116px;
	color: #fff;
`;

export const ServiceKanbanArrow = styled(RiArrowLeftSFill)`
	position: absolute;
	left: 7px;
	bottom: 65px;
	color: #fff;
`;

export const ServiceContent = styled.div`
	width: 800px;
	height: 500px;
	background-color: #fff;
	border-radius: 20px 3px 3px 3px;
`;

export const ServiceDescription = styled.div`
	padding: 32px;
	font-family: 'NanumSquareB';
	font-size: 30px;
	color: #fff;
	text-align: center;

	& > div {
		margin-top: 20px;
		font-size: 28px;
	}
`;

// -------------TODO: 캘린더-------------

export const CalendarWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 500px;
	margin: 20px 0 300px 0;
`;

// -------------TODO: 칸반보드-------------

export const KanbanWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;
