import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const Container = styled.div`
	${({ theme }) => theme.align.flexHorizontal};
	padding-top: 152px;
	font-family: 'NanumSquareB';
`;

export const Inner = styled.div`
	width: 620px;
`;

export const SectionConianer = styled.div`
	overflow: hidden;
	width: 100%;

	& > .on {
		transition: 0.5s 0.1s;
		opacity: 1;
		margin-left: 0;
	}

	& > .off {
		transition: 0.5s 0.1s;
		opacity: 0;
		margin-left: -100px;
	}
`;

export const SecrionDotBtnWrap = styled.div`
	display: flex;
	margin-bottom: 10px;
`;

export const SectionDotBtn = styled.span`
	display: block;
	width: 10px;
	height: 10px;
	margin-right: 10px;
	background-color: #c4c4c4;
	border-radius: 100%;

	&.on {
		transition: 0.2s;
		background-color: #478bff;
	}
`;

export const CreateTitle = styled.p`
	width: 100%;
	margin-bottom: 60px;
	font-size: 40px;

	opacity: 0;
	margin-left: 100px;
`;

export const CreateSubTitle = styled.p`
	margin-top: 30px;
	margin-bottom: 10px;
	font-size: 18px;

	opacity: 0;
	margin-left: 100px;
`;

export const InfoMessage = styled.p`
	padding: 0 10px;
	margin: 5px 0;
	font-size: 14px;
	color: ${({ theme }) => theme.color.warningColor};
`;

export const CreateInputWrap = styled.div`
	opacity: 0;
	margin-left: 200px;
`;

export const CreateUrlWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}

	opacity: 0;
	margin-left: 100px;
`;

export const CreateUrl = styled.span`
	margin-right: 10px;
	font-family: 'NanumSquareR';
	font-size: 20px;
	line-height: 0px;
`;

export const InviteInput = styled.input`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	font-family: 'NanumSquareR';
	font-size: 16px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&:placeholder {
		color: ${({ theme }) => theme.color.lineColor};
	}
`;

export const InviteEmailList = styled.div`
	margin-top: 20px;
`;

export const InviteItem = styled.div`
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	width: 100%;
	height: 40px;
	padding: 0 10px;
	margin-bottom: 10px;
	font-family: 'NanumSquareR';
	font-size: 14px;
	background-color: #f6f6f8;
	border-radius: 3px;
`;

export const InviteItemDeleteBtn = styled(AiOutlineClose)`
	cursor: pointer;
	color: #a6a6a8;
`;

export const SectionBtnWrap = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
	margin-top: 40px;

	opacity: 0;
	margin-left: 100px;
`;
