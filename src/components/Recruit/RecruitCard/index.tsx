import React from 'react';
import { RecruitListDataType } from '../../../types/types';
import timeStamp from '../../../utils/timeStamp';

import StackTag from '../../Common/StackTag';

import {
	CardContainer,
	CardImgContainer,
	CardInfoContainer,
	CardInfoContent,
	CardInfoStackContainer,
	CardInfoTitle,
	CardInfoWriter,
	CardTimeStamp,
	CardViewIcon,
	CardCommentIcon,
} from './styles';

interface Props {
	data: RecruitListDataType;
}

const RecruitCard = ({ data }: Props): JSX.Element => {
	const { id, name, simpleDesc, commentCount, view, requireStack, uploadImage, createdAt } = data;

	return (
		<CardContainer to={`/recruit/${id}`}>
			<CardImgContainer>
				<img src={`${process.env.REACT_APP_SERVER_URL}/images/${uploadImage}`} />
			</CardImgContainer>
			<CardInfoContainer>
				<CardInfoTitle>{name}</CardInfoTitle>
				<CardInfoWriter>
					{/* 여기 이름 수정해야함! */}
					by Woogie
					<span>
						<CardViewIcon /> {`${view}`}
					</span>
					<span>
						<CardCommentIcon /> {`${commentCount}`}
					</span>
				</CardInfoWriter>
				<CardInfoContent>{simpleDesc}</CardInfoContent>
				<CardInfoStackContainer>
					{requireStack.slice(0, 3).map((stack, index) => (
						<StackTag key={index}>{stack}</StackTag>
					))}
				</CardInfoStackContainer>
				<CardTimeStamp>{timeStamp(new Date(createdAt))}</CardTimeStamp>
			</CardInfoContainer>
		</CardContainer>
	);
};

export default RecruitCard;
