import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const CheckListInput = styled.input`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	margin-bottom: 10px;
	font-family: 'NanumSquareR';
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;
`;
export const CheckListWrap = styled.div`
	overflow: auto;
	width: 100%;
	max-height: 90px;

	&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 50px;
	}
`;

export const CheckListItem = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	width: 100%;
	margin-bottom: 5px;

	& > span {
		font-size: 16px;
	}

	&.checked .checkBtn {
		background-color: ${({ theme }) => theme.color.pointColor};
		border: 1px solid ${({ theme }) => theme.color.pointColor};
	}

	&.checked span {
		color: #e6e6e8;
		text-decoration: line-through;
	}
`;

export const ContentWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
`;

export const CheckBtn = styled.div`
	width: 10px;
	height: 10px;
	margin-right: 10px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 100%;
`;

export const CheckDeleteBtn = styled(AiOutlineClose)`
	margin-right: 5px;
	font-size: 14px;
	color: #c6c6c8;
`;
