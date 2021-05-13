import styled from 'styled-components';

export const CreatTopContainer = styled.div`
	width: 100%;
	padding: 40px 0 10px;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};
	border-top: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const CreateInputContainer = styled.div`
	${({ theme }) => theme.align.flexVertical}
`;

export const CreateRecruitList = styled.div`
	margin-bottom: 10px;
	& > span {
		margin-left: 10px;
		color: #888;
	}
`;
