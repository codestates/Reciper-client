import styled from 'styled-components';

export const Toggle_Switch = styled.label`
	display: inline-block;
	position: relative;
	width: 40px;
	height: 20px;

	& > input:checked + span {
		background-color: ${({ theme }) => theme.color.pointColor};
	}

	& > input:checked + span:before {
		transform: translateX(20px);
	}
`;

export const Toggle_SliderRound = styled.span`
	cursor: pointer;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transition: 0.4s;
	background-color: ${({ theme }) => theme.color.lineColor};
	border-radius: 3px;

	&:before {
		position: absolute;
		left: 3px;
		bottom: 3px;
		transition: 0.4s;
		content: '';
		width: 14px;
		height: 14px;
		background-color: white;
		border-radius: 3px;
	}
`;
