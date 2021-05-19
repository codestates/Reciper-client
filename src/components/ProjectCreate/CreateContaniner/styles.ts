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
	width: 100%;
`;

export const SecrionDotBtnWrap = styled.div`
	margin-bottom: 10px;
`;

export const SectionDotBtn = styled.button`
	width: 10px;
	height: 10px;
	margin-right: 10px;
	background-color: #c4c4c4;
	border-radius: 100%;

	&.on {
		background-color: #478bff;
	}
`;

export const CreateTitle = styled.p`
	margin-bottom: 60px;
	font-size: 40px;
`;

export const CreateSubTitle = styled.p`
	margin-bottom: 10px;
	font-size: 18px;
`;

export const CreateUrlWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	margin-bottom: 40px;
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
	margin-bottom: 20px;
	font-family: 'NanumSquareR';
	font-size: 16px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&:placeholder {
		color: ${({ theme }) => theme.color.lineColor};
	}
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
`;

export const SectionBtnWrap = styled.div`
	${({ theme }) => theme.align.flexHorizontal}
	margin-top: 40px;
`;
