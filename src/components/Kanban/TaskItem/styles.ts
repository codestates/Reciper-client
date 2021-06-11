import styled from 'styled-components';

export const TaskWrap = styled.div`
	overflow-y: auto;
	width: 100%;
	min-height: 130px;
	max-height: 600px;
	margin-top: 10px;

	&:hover::-webkit-scrollbar {
		display: block;
	}

	&::-webkit-scrollbar {
		display: none;
		width: 6px;
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
	margin-bottom: 10px;
	padding: 15px 30px;
	font-family: 'NanumSquareR';
	background-color: #fff;

	&:last-child {
		margin-bottom: 0px;
	}

	&:hover .dot {
		opacity: 1;
	}

	&.block {
		opacity: 0.3;
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
	width: 230px;
	font-size: 18px;
	word-wrap: break-word;
`;

export const TaskPeriod = styled.p`
	width: 100%;
	margin-top: 10px;
	font-size: 14px;
`;

export const TaskMembers = styled.div`
	${({ theme }) => theme.align.flexVertical}
	width: 100%;
	height: 30px;
	margin-top: 10px;
`;

export const EXImage = styled.div`
	${({ theme }) => theme.align.flexCenter}
	position: absolute;
	top: 0;
	width: 30px;
	height: 30px;
	color: #fff;
	border-radius: 100%;
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
