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
	observeTarget: React.Ref<HTMLAnchorElement> | null;
}

const RecruitCard = ({ data, observeTarget }: Props): JSX.Element => {
	const { id, name, simpleDesc, commentCount, view, requireStack, uploadImage, createdAt, writer } = data;
	return (
		<CardContainer to={`/recruit/${id}`} ref={observeTarget}>
			<CardImgContainer>
				<img src={`${process.env.REACT_APP_SERVER_URL}/images/${uploadImage}`} />
			</CardImgContainer>
			<CardInfoContainer>
				<CardInfoTitle>{name}</CardInfoTitle>
				<CardInfoWriter>
					by {writer.name}
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
