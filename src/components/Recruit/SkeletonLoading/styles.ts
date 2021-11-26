import styled, { keyframes } from 'styled-components';

const test = keyframes`
	100% {
		transform: translate(200%) rotate(0);
	}
`;

export const SkeletonContainer = styled.div`
	overflow: hidden;
	width: 410px;
	height: 393px;
	margin: 20px;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
	border-radius: 3px;
`;

export const SkeletonContent = styled.div`
	padding: 20px 30px;
`;

const SkeletonItem = styled.div`
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 100%;
	background-color: #d6d6d8;
	border-radius: 3px;

	&::after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
				90deg,
				rgba(255, 255, 255, 0) 0%,
				rgba(255, 255, 255, 0.15) 80%,
				rgba(255, 255, 255, 0.1) 90%
			),
			linear-gradient(#d6d6d8 0, transparent 0);

		transform: translateX(0%) rotate(0);
		animation: ${test} 1.5s infinite linear;
	}
`;

export const SkeletonImg = styled(SkeletonItem)`
	width: 100%;
	height: 120px;
	background-position: -410px 0, 0 0;
`;

export const SkeletonTitle = styled(SkeletonItem)`
	width: 200px;
	height: 19px;
	margin-bottom: 15px;
	background-position: -200px 0, 0 0;
`;

export const SkeletonInfo = styled(SkeletonItem)`
	width: 150px;
	height: 19px;
	margin-bottom: 15px;
	background-position: -150px 0, 0 0;
`;

export const SkeletonDesc = styled(SkeletonItem)`
	width: 100%;
	height: 36px;
	margin-bottom: 30px;
	background-position: -350px 0, 0 0;
`;

export const SkeletonStackWrap = styled.div`
	display: flex;
	width: 100%;
	height: 66px;
`;

export const SkeletonStack = styled(SkeletonItem)`
	width: 78px;
	height: 28px;
	margin-right: 5px;
	background-position: -78px 0, 0 0;
`;

export const SkeletonTime = styled(SkeletonItem)`
	width: 50px;
	height: 16px;
	background-position: -50px 0, 0 0;
`;
