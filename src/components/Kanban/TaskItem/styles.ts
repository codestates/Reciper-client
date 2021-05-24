import styled from 'styled-components';

export const TaskWrap = styled.div`
	overflow-y: auto;
	width: 100%;
	min-height: 130px;
	max-height: 600px;

	&:hover::-webkit-scrollbar {
		display: block;
	}

	&::-webkit-scrollbar {
		display: none;
		width: 8px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 50px;
	}
`;

export const TaskCoantainer = styled.div`
	cursor: pointer;
	${({ theme }) => theme.align.flexVertical}
	position: relative;
	width: 100%;
	margin-top: 10px;
	padding: 15px 30px;
	font-family: 'NanumSquareR';
	background-color: #fff;

	&:last-child {
		margin-bottom: 0px;
	}

	&:hover .dot {
		opacity: 1;
	}
`;

export const ColorLabel = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 10px;
	height: 100%;
	background-color: #478bff;
`;

export const TaskSimpleWrap = styled.div`
	display: block;
	flex-direction: column;
	width: 100%;
`;

export const TaskName = styled.p`
	width: 100%;
	font-size: 18px;
`;

export const TaskPeriod = styled.p`
	width: 100%;
	margin: 10px 0;
	font-size: 14px;
`;

export const TaskMembers = styled.div`
	position: relative;
	width: 100%;
	height: 30px;
`;

export const EXImage = styled.div`
	${({ theme }) => theme.align.flexCenter}
	position: absolute;
	width: 30px;
	height: 30px;
	color: #fff;
	border-radius: 100%;
`;

export const EXImage1 = styled(EXImage)`
	left: 0;
	background-color: #ff4752;
`;
export const EXImage2 = styled(EXImage)`
	left: 15px;
	background-color: #478bff;
`;
export const EXImage3 = styled(EXImage)`
	left: 30px;
	background-color: #2a6a13;
`;
export const EXImage4 = styled(EXImage)`
	left: 45px;
	background-color: #ff7e47;
`;

export const DotWrap = styled.div`
	opacity: 0;
	position: absolute;
	top: 15px;
	right: 20px;
	transition: 0.1s;

	& > span {
		display: block;
		width: 4px;
		height: 4px;
		background-color: #c6c6c8;
		border-radius: 100%;

		&:nth-child(2) {
			margin: 2px 0;
		}
	}
`;
