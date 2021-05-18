import React from 'react';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import chatAvatar1 from '../../../images/chatAvatar1.png';
import chatAvatar2 from '../../../images/chatAvatar2.png';
import chatAvatar3 from '../../../images/chatAvatar3.png';

import {
	LandingFifthContainer,
	ServiceContent,
	ServiceBackground,
	ServiceMenu,
	ServiceMessage,
	RightComment,
	LeftComment,
	ServiceChatArrow,
	ServiceMenuCalendar,
	ServiceMenuChat,
	ServiceMenuHome,
	ServiceMenuKanban,
	ServiceMenuLine,
	ServiceArrowWrapper,
	ChatUserName,
	ChatCreateAt,
	ChatUserContent,
	ChatInputWrapper,
	ChatSendButton,
	ChatSendWrapper,
} from './styles';

const LandingFifth = (): JSX.Element => {
	const ChatAnimatedItem = {
		firstChat: useScrollFadeIn({ direction: 'late-up', duration: 2, delay: 0 }),
		secondChat: useScrollFadeIn({ direction: 'late-up', duration: 2, delay: 0.4 }),
		thirdChat: useScrollFadeIn({ direction: 'late-up', duration: 2, delay: 0.6 }),
	};
	return (
		<LandingFifthContainer>
			<ServiceMessage>
				실시간으로 소통하세요!
				<br />
				<div>문구 생각 중</div>
			</ServiceMessage>
			<ServiceBackground>
				<ServiceMenu>
					<span>
						<ServiceMenuHome />
					</span>
					<span>
						<ServiceMenuLine />
					</span>
					<span>
						<ServiceMenuCalendar />
					</span>
					<span>
						<ServiceMenuKanban />
					</span>
					<span>
						<ServiceMenuChat />
					</span>
					<ServiceArrowWrapper>
						<ServiceChatArrow />
					</ServiceArrowWrapper>
				</ServiceMenu>
				<ServiceContent>
					<div>
						<RightComment {...ChatAnimatedItem.firstChat}>
							<img src={chatAvatar1} alt="첫번째 채팅 프로필사진" />
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
							<img src={chatAvatar2} alt="두번째 채팅 프로필사진" />
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
							<img src={chatAvatar3} alt="세번째 채팅 프로필사진" />
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
					</div>
					<ChatInputWrapper>
						<div>
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
