import styled from 'styled-components';

export const TaskDetailContainer = styled.div`
	${({ theme }) => theme.align.positionCenter}
	width: 560px;
	padding: 40px 50px 20px 50px;
	margin-right: 10px;
	font-family: 'NanumSquareR';
	background-color: #fff;
	border-radius: 6px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.div`
	width: 100%;
	margin-bottom: 20px;
`;

export const FlexSection = styled(Section)`
	${({ theme }) => theme.align.flexVertical}
`;

export const SectionTitle = styled.p`
	margin-bottom: 15px;
	font-family: 'NanumSquareB';
	font-size: 16px;
`;
