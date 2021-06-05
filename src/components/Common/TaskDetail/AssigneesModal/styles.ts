import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

export const ModalWrap = styled.div`
	position: absolute;
	z-index: 10;
	top: 30px;
	right: 4px;
	width: 150px;
	background-color: #fff;
	border: 1px solid ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;
`;

export const MemberItem = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexVertical}
	justify-content: space-between;
	transition: 0.1s;
	width: 100%;
	padding: 7px 12px;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};

	& svg {
		display: none;
	}

	&.selected svg {
		display: block;
	}

	&:hover {
		background-color: ${({ theme }) => theme.color.pointColor};
		border-bottom: 1px solid ${({ theme }) => theme.color.pointColor};

		& p {
			color: #fff;
		}

		& svg {
			color: #fff;
		}
	}

	&:last-child {
		border: none;
	}
`;

export const MemberInfo = styled.div`
	${({ theme }) => theme.align.flexVertical}
`;

export const MemberName = styled.p`
	font-size: 15px;
`;

export const MemberCheck = styled(AiOutlineCheck)`
	font-size: 13px;
`;
