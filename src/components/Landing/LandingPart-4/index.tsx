import React from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

import {
	ServiceBackground,
	ServiceContent,
	LandingFourthContainer,
	ServiceMenu,
	ServiceWrapper,
	ServiceMenuCalendar,
	ServiceMenuKanban,
	ServiceMenuChat,
	ServiceMenuHome,
	ServiceMenuLine,
	ServiceCalendarArrow,
	ServiceKanbanArrow,
	ServiceDescription,
	CalendarWrapper,
	KanbanWrapper,
} from './styles';

// TODO: 웹 서비스 소개

const LandingFourth = (): JSX.Element => {
	const CalendarAnimatedItem = {
		background: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0 }),
		menuHome: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
		menuLine: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
		menuCalendar: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.4 }),
		menuKanban: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.5 }),
		menuChat: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.6 }),
		arrow: useScrollFadeIn({ direction: 'up', duration: 1, delay: 1.4 }),
		content: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.8 }),
	};

	const KanbanAnimatedItem = {
		background: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0 }),
		menuHome: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
		menuLine: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
		menuCalendar: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.4 }),
		menuKanban: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.5 }),
		menuChat: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.6 }),
		arrow: useScrollFadeIn({ direction: 'up', duration: 1, delay: 1.4 }),
		content: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.8 }),
	};

	return (
		<LandingFourthContainer>
			<ServiceWrapper>
				{/* TODO: 캘린더 */}
				<CalendarWrapper>
					<ServiceBackground {...CalendarAnimatedItem.background}>
						<ServiceMenu>
							<span {...CalendarAnimatedItem.menuHome}>
								<ServiceMenuHome />
							</span>
							<span {...CalendarAnimatedItem.menuLine}>
								<ServiceMenuLine />
							</span>
							<span {...CalendarAnimatedItem.menuCalendar}>
								<ServiceMenuCalendar />
							</span>
							<span {...CalendarAnimatedItem.menuKanban}>
								<ServiceMenuKanban />
							</span>
							<span {...CalendarAnimatedItem.menuChat}>
								<ServiceMenuChat />
							</span>
							<span {...CalendarAnimatedItem.arrow}>
								<ServiceCalendarArrow />
							</span>
						</ServiceMenu>
						<ServiceContent {...CalendarAnimatedItem.content}></ServiceContent>
					</ServiceBackground>
					<ServiceDescription>
						체계적인 시스템, 뛰어난 효과
						<br />
						<div>문구 생각 중</div>
					</ServiceDescription>
				</CalendarWrapper>

				{/* TODO: 칸반보드 */}
				<KanbanWrapper>
					<ServiceBackground>
						<ServiceMenu>
							<span {...KanbanAnimatedItem.menuHome}>
								<ServiceMenuHome />
							</span>
							<span {...KanbanAnimatedItem.menuLine}>
								<ServiceMenuLine />
							</span>
							<span {...KanbanAnimatedItem.menuCalendar}>
								<ServiceMenuCalendar />
							</span>
							<span {...KanbanAnimatedItem.menuKanban}>
								<ServiceMenuKanban />
							</span>
							<span {...KanbanAnimatedItem.menuChat}>
								<ServiceMenuChat />
							</span>
							<span {...KanbanAnimatedItem.arrow}>
								<ServiceKanbanArrow />
							</span>
						</ServiceMenu>
						<ServiceContent {...KanbanAnimatedItem.content}></ServiceContent>
					</ServiceBackground>
					<ServiceDescription>
						유연한 업무 관리, 같이 사용하세요!
						<br />
						<div>문구 생각 중</div>
					</ServiceDescription>
				</KanbanWrapper>
			</ServiceWrapper>
		</LandingFourthContainer>
	);
};

export default LandingFourth;
