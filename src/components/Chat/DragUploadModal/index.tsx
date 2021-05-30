import React from 'react';
import { Image, ModalWrapper, TextWrapper, UploadImageWrapper } from './styles';
import uploadImage from '../../../images/uploadImage.svg';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

interface Props {
	room: string;
}

const DragUploadModal = ({ room }: Props): JSX.Element => {
	const dragAnimatedImage = {
		dragUploadWrapper: useScrollFadeIn({ direction: 'late-up', duration: 0.4, delay: 0 }),
		dragUploadImage: useScrollFadeIn({ direction: 'up', duration: 0.8, delay: 0.5 }),
	};
	return (
		<ModalWrapper {...dragAnimatedImage.dragUploadWrapper}>
			<UploadImageWrapper {...dragAnimatedImage.dragUploadImage}>
				<Image src={uploadImage} />
			</UploadImageWrapper>
			<TextWrapper>
				<div>#{`${room}에 올리기`}</div>
				<p>{'팀원들과 당신의 소중한 자료를 공유해 보세요 :)'}</p>
			</TextWrapper>
		</ModalWrapper>
	);
};

export default DragUploadModal;
