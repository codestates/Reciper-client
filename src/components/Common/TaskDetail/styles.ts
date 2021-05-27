import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const TaskDetailContainer = styled.div`
	${({ theme }) => theme.align.positionCenter}
	width: 620px;
	padding: 40px 40px 0 40px;
	margin-right: 10px;
	font-family: 'NanumSquareR';
	background-color: #fff;
	border-radius: 3px;
`;

export const Section = styled.div`
	width: 100%;
	margin-bottom: 20px;
`;

export const SectionTitle = styled.p`
	margin-bottom: 15px;
	font-family: 'NanumSquareB';
	font-size: 16px;
`;

export const DescTextArea = styled.textarea`
	resize: none;
	width: 100%;
	height: 80px;
	padding: 10px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;
`;

export const CheckListInput = styled.input`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	margin-bottom: 10px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&::placeholder {
		font-family: 'NanumSquareR';
	}
`;

export const CheckListWrap = styled.div`
	overflow: auto;
	width: 100%;
	max-height: 90px;
`;

export const Item = styled.div`
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
	width: 12px;
	height: 12px;
	margin-right: 10px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 100%;
`;

export const CheckDeleteBtn = styled(AiOutlineClose)`
	margin-right: 5px;
	font-size: 14px;
	color: #888;
`;

export const FlexSection = styled(Section)`
	${({ theme }) => theme.align.flexVertical}
`;

export const AssigneesWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	width: 50%;
`;

export const ColorLabelWrap = styled.div`
	width: 50%;
`;

export const AddAssignees = styled.div`
	width: 30px;
	height: 30px;
	background-color: #e6e6e8;
`;

export const PeriodWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	margin-left: 20px;
	font-family: 'NanumSquareB';
`;

export const DateCustomBtn = styled.button`
	width: 100px;
	height: 32px;
	margin-right: 15px;
	font-size: 15px;
	color: #a8a8a8;
	background-color: #f6f6f8;
`;

export const WritingWrap = styled.div`
	${({ theme }) => theme.align.flexVertical}
	width: 100%;
	margin-bottom: 20px;
`;

export const WritingInput = styled.input`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	margin-left: 10px;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&::placeholder {
		font-family: 'NanumSquareR';
	}
`;

export const CommentWrap = styled.div`
	overflow: auto;
	width: 100%;
	max-height: 140px;
`;

export const Comment = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 20px;
`;

export const CommentInfo = styled.div`
	width: 100%;
	margin-left: 10px;
`;

export const CommentUser = styled.div`
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	width: 100%;
	margin-bottom: 7px;

	& > p {
		font-size: 15px;
	}

	& span,
	button {
		margin-left: 5px;
		font-size: 13px;
		color: #888;
	}
`;

export const CommentContent = styled.p`
	font-size: 14px;
`;
