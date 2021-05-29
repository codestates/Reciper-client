import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { ChatDataType, ChatSectionType } from '../types/types';

dayjs.locale('ko');
export const chatSection = (chatBucket: ChatDataType[]): ChatSectionType => {
	const sections: ChatSectionType = {};

	chatBucket.forEach(chat => {
		let date = dayjs(chat.createdAt);
		date = date.add(9, 'hour');

		const monthDate = dayjs(date).format('M월 D일 ddd요일');

		if (Array.isArray(sections[monthDate])) {
			sections[monthDate].push(chat);
		} else {
			sections[monthDate] = [chat];
		}
	});

	return sections;
};

/* 수도코드
 {
	 월: [chat1, chat2],
	 화: [chat3, chat4],
	 .....
 }
*/
