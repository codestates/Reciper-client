import React from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

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
	ServiceKanbanArrow,
	ServiceDescription,
	CalendarWrapper,
	KanbanWrapper,
	ServiceMenuCalendar,
	ServiceMenuChat,
	ServiceMenuKanban,
	ServiceCalendarArrow,
} from './styles';

const LandingFourth = (): JSX.Element => {
	const KanbanAnimatedItem = {
		background: useScrollFadeIn({ direction: 'up', duration: 0.5, delay: 0 }),
		menuHome: useScrollFadeIn({ direction: 'up', duration: 0.3, delay: 0.2 }),
		menuLine: useScrollFadeIn({ direction: 'up', duration: 0.3, delay: 0.4 }),
		menuChat: useScrollFadeIn({ direction: 'up', duration: 0.3, delay: 0.5 }),
		menuKanban: useScrollFadeIn({ direction: 'up', duration: 0.3, delay: 0.6 }),
		menuCalendar: useScrollFadeIn({ direction: 'up', duration: 0.3, delay: 0.7 }),
		content: useScrollFadeIn({ direction: 'up', duration: 0.5, delay: 0.1 }),
	};

	const CalendarAnimatedItem = {
		background: useScrollFadeIn({ direction: 'up', duration: 0.5, delay: 0 }),
		menuHome: useScrollFadeIn({ direction: 'up', duration: 0.3, delay: 0.2 }),
		menuLine: useScrollFadeIn({ direction: 'up', duration: 0.3, delay: 0.4 }),
		menuChat: useScrollFadeIn({ direction: 'up', duration: 0.3, delay: 0.5 }),
		menuKanban: useScrollFadeIn({ direction: 'up', duration: 0.3, delay: 0.6 }),
		menuCalendar: useScrollFadeIn({ direction: 'up', duration: 0.3, delay: 0.7 }),
		content: useScrollFadeIn({ direction: 'up', duration: 0.5, delay: 0.1 }),
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
								<ServiceKanbanArrow />
							</ServiceMenuKanban>
							<ServiceMenuCalendar {...KanbanAnimatedItem.menuCalendar}>
								<Icon icon={calendarCheck} />
							</ServiceMenuCalendar>
						</ServiceMenu>
						<ServiceContent {...KanbanAnimatedItem.content}>
							<img src={`${process.env.REACT_APP_SERVER_URL}/images/Kanbanboard.gif`} />
						</ServiceContent>
					</ServiceBackground>
					<ServiceDescription>
						체계적인 시스템, 뛰어난 효과
						<br />
						<div>
							프로젝트를 하다 보면 이슈관리와 일정관리가 중요하다는 것을 깨닫게 됩니다. 이러한 점에서 팀원들과
							칸반보드를 체계적으로 관리할 수 있도록 도와주는 칸반보드 피드백 기능과 실시간 공유 서비스를 제공합니다.{' '}
							<br />
							<br />
							체계적으로 관리하기 위해서는 팀원들과 실시간으로 관리할 수 있어야 한다고 믿었고, 저희는 팀원이 칸반보드를
							수정할 경우 실시간으로 확인할 수 있는 서비스를 제공합니다.
							<br />
							<br /> 관리가 필요한 이슈마다 일정 관리와 체크 리스트를 통해 더 정확하고 체계적으로 이슈 관리를 할 수
							있습니다.
						</div>
					</ServiceDescription>
				</KanbanWrapper>

				{/* TODO: 캘린더 */}
				<CalendarWrapper>
					<ServiceDescription>
						유연한 업무 관리, 같이 사용하세요!
						<br />
						<div>
							칸반보드는 캘린더를 통해서도 관리할 수 있습니다. 칸반보드를 통해 이슈와 일정을 관리하고 캘린더로 한 눈에
							볼 수 있는 서비스까지 제공을 합니다.
							<br />
							<br />
							간편하고 더 빠른 협업을 위해 캘린더와 칸반보드를 연동하는 서비스를 제공합니다. 이러한 서비스들은 팀이
							이루고자 하는 목표에 더 빨리 도달할 수 있도록 도와줍니다.
							<br />
							<br />
							업무 관리가 유연하고 편리할수록 프로젝트 완성도를 더 효율적으로 극대화 할 수 있습니다. 모두가 협동하여
							최고의 프로젝트를 만들어 보세요.
						</div>
					</ServiceDescription>
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
								<ServiceCalendarArrow />
							</ServiceMenuCalendar>
						</ServiceMenu>
						<ServiceContent {...CalendarAnimatedItem.content}>
							<img src={`${process.env.REACT_APP_SERVER_URL}/images/Calendar.gif`} />
						</ServiceContent>
					</ServiceBackground>
				</CalendarWrapper>
			</ServiceWrapper>
		</LandingFourthContainer>
	);
};

export default LandingFourth;
