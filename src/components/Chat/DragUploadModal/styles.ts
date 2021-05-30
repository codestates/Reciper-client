import styled from 'styled-components';

export const ModalWrapper = styled.div`
	${({ theme }) => theme.align.flexCenter};
	flex-direction: column;
	position: relative;
	width: 416px;
	padding: 16px;
	color: #fff;
	background-color: ${({ theme }) => theme.color.pointColor};
	border-radius: 4px;
`;

export const UploadImageWrapper = styled.div`
	object-fit: cover;
`;

export const Image = styled.img`
	position: absolute;
	top: -175px;
	left: -136px;
	width: 300px;
	height: 200px;
`;

export const TextWrapper = styled.div`
	width: 100%;
	padding: 32px;
	text-align: center;
	border: 3px dashed rgba(255, 255, 255, 0.3);
	border-radius: 4px;

	& > p {
		margin-top: 12px;
		font-size: 16px;
	}
`;
