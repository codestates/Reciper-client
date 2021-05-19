import React from 'react';
import Button from '../../Common/Button';
import {
	CreateSubTitle,
	CreateTitle,
	InviteInput,
	InviteItem,
	SectionBtnWrap,
	SectionConianer,
	InviteItemDeleteBtn,
} from '../CreateContaniner/styles';

const SectionTwo = (): JSX.Element => {
	return (
		<SectionConianer>
			<CreateTitle>당신의 팀원을 레시피에 초대해보세요</CreateTitle>
			<CreateSubTitle>초대하실 팀원의 이메일을 작성하세요.</CreateSubTitle>
			<InviteInput placeholder="팀원의 이메일을 입력해주세요." />
			<InviteItem>
				dmsdmr9411@gmail.com <InviteItemDeleteBtn />
			</InviteItem>
			<SectionBtnWrap>
				<Button size="medium" buttonType="cancel" clickEvent={() => console.log('1')}>
					취소
				</Button>
				<Button size="large" margin="0 0 0 20px;" clickEvent={() => console.log('1')}>
					초대 및 레시피 생성
				</Button>
			</SectionBtnWrap>
		</SectionConianer>
	);
};

export default SectionTwo;
