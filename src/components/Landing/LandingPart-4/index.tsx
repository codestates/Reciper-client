import React from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import kanbanboard from '../../../images/kanbanboard.gif';

import Icon from '@iconify/react';
import chatTeardropDotsLight from '@iconify/icons-ph/chat-teardrop-dots-light';
import calendarCheck from '@iconify/icons-bi/calendar-check';
import project24 from '@iconify/icons-octicon/project-24';

import {
	ServiceBackground,
	ServiceContent,
	LandingFourthContainer,
	ServiceMenu,
	ServiceWrapper,
	ServiceMenuHome,
	ServiceMenuLine,
	ServiceCalendarArrow,
	ServiceKanbanArrow,
	ServiceDescription,
	CalendarWrapper,
	KanbanWrapper,
	ServiceMenuCalendar,
	ServiceMenuChat,
	ServiceMenuKanban,
} from './styles';

// TODO: 웹 서비스 소개

const LandingFourth = (): JSX.Element => {
	const KanbanAnimatedItem = {
		background: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0 }),
		menuHome: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
		menuLine: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
		menuChat: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.4 }),
		menuKanban: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.6 }),
		menuCalendar: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.7 }),
		arrow: useScrollFadeIn({ direction: 'up', duration: 1, delay: 2 }),
		content: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.8 }),
	};

	const CalendarAnimatedItem = {
		background: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0 }),
		menuHome: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
		menuLine: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
		menuChat: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.4 }),
		menuKanban: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.6 }),
		menuCalendar: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.7 }),
		arrow: useScrollFadeIn({ direction: 'up', duration: 1, delay: 2 }),
		content: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.8 }),
	};

	return (
		<LandingFourthContainer>
			<ServiceWrapper>
				{/* TODO: 칸반보드 */}
				<KanbanWrapper>
					<ServiceBackground>
						<ServiceMenu>
							<div {...KanbanAnimatedItem.menuHome}>
								<ServiceMenuHome />
							</div>
							<div {...KanbanAnimatedItem.menuLine}>
								<ServiceMenuLine />
							</div>
							<ServiceMenuChat {...KanbanAnimatedItem.menuChat}>
								<Icon icon={chatTeardropDotsLight} />
							</ServiceMenuChat>
							<ServiceMenuKanban {...KanbanAnimatedItem.menuKanban}>
								<Icon icon={project24} />
							</ServiceMenuKanban>
							<ServiceMenuCalendar {...KanbanAnimatedItem.menuCalendar}>
								<Icon icon={calendarCheck} />
							</ServiceMenuCalendar>
							<div {...KanbanAnimatedItem.arrow}>
								<ServiceKanbanArrow />
							</div>
						</ServiceMenu>
						<ServiceContent {...KanbanAnimatedItem.content}>
							<img src={kanbanboard} />
						</ServiceContent>
					</ServiceBackground>
					<ServiceDescription>
						체계적인 시스템, 뛰어난 효과
						<br />
						<div>문구 생각 중</div>
					</ServiceDescription>
				</KanbanWrapper>

				{/* TODO: 캘린더 */}
				<CalendarWrapper>
					<ServiceBackground>
						<ServiceMenu>
							<div {...CalendarAnimatedItem.menuHome}>
								<ServiceMenuHome />
							</div>
							<div {...CalendarAnimatedItem.menuLine}>
								<ServiceMenuLine />
							</div>
							<ServiceMenuChat {...CalendarAnimatedItem.menuChat}>
								<Icon icon={chatTeardropDotsLight} />
							</ServiceMenuChat>
							<ServiceMenuKanban {...CalendarAnimatedItem.menuKanban}>
								<Icon icon={project24} />
							</ServiceMenuKanban>
							<ServiceMenuCalendar {...CalendarAnimatedItem.menuCalendar}>
								<Icon icon={calendarCheck} />
							</ServiceMenuCalendar>
							<div {...CalendarAnimatedItem.arrow}>
								<ServiceCalendarArrow />
							</div>
							<div {...CalendarAnimatedItem.arrow}>
								<ServiceCalendarArrow />
							</div>
						</ServiceMenu>
						<ServiceContent {...CalendarAnimatedItem.content}></ServiceContent>
					</ServiceBackground>
					<ServiceDescription>
						유연한 업무 관리, 같이 사용하세요!
						<br />
						<div>문구 생각 중</div>
					</ServiceDescription>
				</CalendarWrapper>
			</ServiceWrapper>
		</LandingFourthContainer>
	);
};

export default LandingFourth;
