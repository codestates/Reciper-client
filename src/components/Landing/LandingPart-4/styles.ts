import styled from 'styled-components';
import { AiOutlineHome, AiOutlineLine } from 'react-icons/ai';
import { RiArrowLeftSFill } from 'react-icons/ri';

export const LandingFourthContainer = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 100%;
	min-height: 200vh;
	padding: 0 70px;
	background-color: #24272c;
`;

export const ServiceWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	width: 90%;
`;

export const ServiceBackground = styled.div`
	${({ theme }) => theme.align.flexCenter};
	width: 80vw;
	height: 60vh;
	background-color: #1c1f3b;
	border-radius: 3px;
`;

export const ServiceMenu = styled.div`
	${({ theme }) => theme.align.flexVertical};
	flex-direction: column;
	width: 2.5vw;
	height: 60vh;
	font-size: 1.5vw;
	color: #fff;
`;

export const ServiceMenuHome = styled(AiOutlineHome)`
	margin-top: 16px;
`;

export const ServiceMenuLine = styled(AiOutlineLine)``;

export const ServiceMenuChat = styled.div`
	${({ theme }) => theme.align.flexCenter};
	padding: 8px 0;
	font-size: 1.7vw;
`;

export const ServiceMenuKanban = styled.div`
	${({ theme }) => theme.align.flexCenter};
	padding: 8px 0;
`;

export const ServiceMenuCalendar = styled.div`
	${({ theme }) => theme.align.flexCenter};
	padding: 10px 0;
	font-size: 1.25vw;
`;

export const ServiceContent = styled.div`
	object-fit: cover;
	overflow: hidden;
	${({ theme }) => theme.align.flexCenter};
	width: 42.5vw;
	height: 60vh;
	background-color: #fff;
	border-radius: 20px 3px 3px 0;

	& > img {
		width: 100%;
		height: 100%;
	}
`;

export const ServiceDescription = styled.div`
	width: 80%;
	padding: 0 32px;
	font-family: 'NanumSquarEB';
	font-size: 2.2vw;
	color: #fff;
	text-align: center;

	& > div {
		line-height: 2vw;
		margin-top: 1.2vw;
		font-family: 'NanumSquarB';
		text-align: left;
		font-size: 1.2vw;
	}
`;

// -------------TODO: 칸반보드-------------

export const KanbanWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin: 50vh 0;
`;

export const ServiceKanbanArrow = styled(RiArrowLeftSFill)`
	position: absolute;
	font-size: 1.8vw;
	left: 1vw;
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
	font-size: 1.5vw;
	left: 1.05vw;
	color: #fff;
`;
