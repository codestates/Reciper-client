import styled from 'styled-components';

export const TaskDetailContainer = styled.div`
	${({ theme }) => theme.align.positionCenter}
	width: 560px;
	padding: 50px 40px 10px;
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

export const TaskDeleteBtn = styled.button`
	float: right;
	margin-bottom: 20px;
	font-family: 'NanumSquareB';
	font-size: 16px;
	color: ${({ theme }) => theme.color.warningColor};
`;

export const ColorHat = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 22px;
	border-radius: 6px 6px 0 0;
`;
