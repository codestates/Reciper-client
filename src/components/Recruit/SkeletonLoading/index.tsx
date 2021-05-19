import React from 'react';
import {
	SkeletonImg,
	SkeletonContainer,
	SkeletonTitle,
	SkeletonInfo,
	SkeletonDesc,
	SkeletonStack,
	SkeletonTime,
	SkeletonContent,
	SkeletonStackWrap,
} from './styles';

const SkeletonLoading = (): JSX.Element => {
	const count = Array(24).fill(0);

	return (
		<>
			{count.map((count, index) => (
				<SkeletonContainer key={index}>
					<SkeletonImg />
					<SkeletonContent>
						<SkeletonTitle />
						<SkeletonInfo />
						<SkeletonDesc />
						<SkeletonStackWrap>
							<SkeletonStack />
							<SkeletonStack />
						</SkeletonStackWrap>
						<SkeletonTime />
					</SkeletonContent>
				</SkeletonContainer>
			))}
		</>
	);
};

export default SkeletonLoading;
