import styled from 'styled-components';
import { AiOutlineHome, AiOutlineLine } from 'react-icons/ai';
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
	width: 90%;
`;

export const ServiceBackground = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 860px;
	height: 560px;
	margin: 20px 0;
	background-color: #1c1f3b;
	border-radius: 3px;
`;
export const ServiceMenu = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: column;
	width: 50px;
	height: 560px;
	font-size: 28px;
	color: #fff;
`;

export const ServiceMenuHome = styled(AiOutlineHome)`
	margin-top: 16px;
	font-size: 26px;
`;

export const ServiceMenuLine = styled(AiOutlineLine)``;

export const ServiceMenuChat = styled.div`
	${({ theme }) => theme.align.flexCenter};
	padding: 8px 0;
	font-size: 30px;
`;

export const ServiceMenuKanban = styled.div`
	${({ theme }) => theme.align.flexCenter};
	padding: 8px 0;
	font-size: 28px;
`;

export const ServiceMenuCalendar = styled.div`
	${({ theme }) => theme.align.flexCenter};
	padding: 10px 0;
	font-size: 24px;
`;

export const ServiceContent = styled.div`
	object-fit: cover;
	overflow: hidden;
	${({ theme }) => theme.align.flexCenter};
	width: 860px;
	height: 560px;
	background-color: #fff;
	border-radius: 20px 3px 3px 0;

	& > img {
		width: 100%;
		height: 100%;
	}
`;

export const ServiceDescription = styled.div`
	width: 100%;
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

// -------------TODO: 칸반보드-------------

export const KanbanWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin: 20px 0 300px 0;
`;

export const ServiceKanbanArrow = styled(RiArrowLeftSFill)`
	position: absolute;
	left: 8px;
	bottom: 52px;
	color: #fff;
`;

// -------------TODO: 캘린더-------------

export const CalendarWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

export const ServiceCalendarArrow = styled(RiArrowLeftSFill)`
	position: absolute;
	left: 8px;
	bottom: 7px;
	color: #fff;
`;
