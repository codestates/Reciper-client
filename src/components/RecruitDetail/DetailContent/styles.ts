import styled from 'styled-components';

const BoldText = styled.p`
	margin: 30px 0 10px 0;
	font-family: 'NanumSquareB';
	font-size: 18px;
`;

const RegularText = styled.p`
	margin-bottom: 10px;
	font-size: 16px;
`;

export const DetailContentContainer = styled.div`
	padding: 40px 20px;
	text-align: left;
	border-bottom: 1px solid ${({ theme }) => theme.color.lineColor};
`;

export const DetailSubTitle = styled.h2`
	font-family: 'NanumSquareB';
	font-size: 25px;
	margin-bottom: 20px;
`;

export const DetailImg = styled.div`
	${({ theme }) => theme.align.flexCenter}
	width: 100%;
	margin-bottom: 20px;
`;

export const DetailDescription = styled.p`
	font-size: 16px;
	word-break: keep-all;
`;

export const DetailRecruiteTitle = styled(BoldText)``;
export const DetailStackTitle = styled(BoldText)``;
export const DetailStageTitle = styled(BoldText)``;
export const DetailDeadLineTitle = styled(BoldText)``;

export const DetailRecruiteList = styled(RegularText)`
	& > span {
		margin-left: 10px;
		color: #888;
	}
`;

export const DetailStageText = styled(RegularText)``;
export const DetailDeadLineText = styled(RegularText)``;
