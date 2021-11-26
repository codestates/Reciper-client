import React from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

import Icon from '@iconify/react';
import chatTeardropDotsLight from '@iconify/icons-ph/chat-teardrop-dots-light';
import calendarCheck from '@iconify/icons-bi/calendar-check';
import project24 from '@iconify/icons-octicon/project-24';

import {
	LandingFifthContainer,
	ServiceContent,
	ServiceBackground,
	ServiceMenu,
	ServiceMessage,
	RightComment,
	LeftComment,
	ServiceChatArrow,
	ServiceMenuHome,
	ServiceMenuLine,
	ChatUserName,
	ChatCreateAt,
	ChatUserContent,
	ChatInputWrapper,
	ChatSendButton,
	ChatSendWrapper,
	ServiceMenuChat,
	ServiceMenuKanban,
	ServiceMenuCalendar,
	ChatUploadImage,
} from './styles';
import LazyImage from '../../Common/LazyImage';

const LandingFifth = (): JSX.Element => {
	const ChatAnimatedItem = {
		firstChat: useScrollFadeIn({ direction: 'late-up', duration: 0.5, delay: 0 }),
		secondChat: useScrollFadeIn({ direction: 'late-up', duration: 0.5, delay: 0 }),
		thirdChat: useScrollFadeIn({ direction: 'late-up', duration: 0.5, delay: 0 }),
	};

	return (
		<LandingFifthContainer>
			<ServiceMessage>
				실시간으로 소통하세요!
				<br />
				<div>
					팀원을 모집했지만 바로 프로젝트를 시작하기 어려울 겁니다. 팀원들을 이끌고 실시간 채팅으로 팀을 이끌어 보세요!
					협업은 올바른 소통에서 부터 시작합니다.
					<br />
					<br />
					훌륭한 협업은 곧 당신에게 최고의 프로젝트를 가져다 줄 겁니다. 협업에 있어서 꼭 필요한 기능들을 갖춘 이 곳에서
					최고의 프로젝트는 당신을 기다리고 있습니다.
				</div>
			</ServiceMessage>
			<ServiceBackground>
				<ServiceMenu>
					<div>
						<ServiceMenuHome />
					</div>
					<div>
						<ServiceMenuLine />
					</div>
					<ServiceMenuChat>
						<Icon icon={chatTeardropDotsLight} />
						<ServiceChatArrow />
					</ServiceMenuChat>
					<ServiceMenuKanban>
						<Icon icon={project24} />
					</ServiceMenuKanban>
					<ServiceMenuCalendar>
						<Icon icon={calendarCheck} />
					</ServiceMenuCalendar>
				</ServiceMenu>
				<ServiceContent>
					<RightComment {...ChatAnimatedItem.firstChat}>
						<LazyImage src={`${process.env.REACT_APP_SERVER_URL}/images/part6-1.svg`} alt="첫번째 채팅 프로필사진" />
						<div>
							<div>
								<ChatUserName>Evan</ChatUserName>
								<ChatCreateAt>오후 21 : 35</ChatCreateAt>
							</div>
							<ChatUserContent>
								피그마 디자인 다 끝났습니다~~ <br />곧 회의 시작하네요! 캘린더 확인해주세요!
							</ChatUserContent>
						</div>
					</RightComment>
					<LeftComment {...ChatAnimatedItem.secondChat}>
						<LazyImage src={`${process.env.REACT_APP_SERVER_URL}/images/part6-2.svg`} alt="두번째 채팅 프로필사진" />
						<div>
							<div>
								<ChatUserName>James</ChatUserName>
								<ChatCreateAt>오후 21 : 48</ChatCreateAt>
							</div>
							<ChatUserContent>
								좋아요! 10시에 회의 시작하겠습니다!
								<br />곧 뵙겠습니다!
							</ChatUserContent>
						</div>
					</LeftComment>
					<RightComment {...ChatAnimatedItem.thirdChat}>
						<LazyImage src={`${process.env.REACT_APP_SERVER_URL}/images/part6-3.svg`} alt="세번째 채팅 프로필사진" />
						<div>
							<div>
								<ChatUserName>Olivia</ChatUserName>
								<ChatCreateAt>오후 21 : 53</ChatCreateAt>
							</div>
							<ChatUserContent>
								스키마 디자인 다 끝났어요!
								<br /> 오늘 칸반 보드 일정도 마무리했습니다.
							</ChatUserContent>
						</div>
					</RightComment>

					<ChatInputWrapper>
						<div>
							<ChatUploadImage />
							<ChatSendWrapper>
								<ChatSendButton />
							</ChatSendWrapper>
						</div>
					</ChatInputWrapper>
				</ServiceContent>
			</ServiceBackground>
		</LandingFifthContainer>
	);
};

export default LandingFifth;
