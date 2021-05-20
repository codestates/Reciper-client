import React, { useEffect, useState } from 'react';

import {
	LandingSixthBottom,
	LandingSixthContainer,
	LandingSixthTop,
	PersonalAvatar,
	PersonalCard,
	PersonalCode,
	SvgWrapper,
	TopContentsWrapper,
	TopMessage,
	TopPersonalCardWrapper,
} from './styles';

const LandingSixth = (): JSX.Element => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const onScroll = () => {
		setScrollPosition(window.pageYOffset);
		// console.log('마우스 위치', window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const svg: HTMLCollectionOf<Element> = document.getElementsByClassName('rainbowLine');
		// console.log('svg 길이', length);

		Array.from(svg).forEach(line => {
			if (line instanceof SVGPathElement) {
				const length = line.getTotalLength();
				line.style.strokeDasharray = String(length);
				line.style.strokeDashoffset = String(length);

				const drawScrollPosition = () => {
					// drawLine: 0 ~ 1970 동안 그려진다.
					// length: 1970, 위치: -949
					// const drawLine = length - calcScrollPercent();
					// 간격
					// svg.style.strokeDasharray = length;
					// svg.style.strokeDashoffset = length;
					// array === offset => 처음에 보이지 않음
					// console.log('1. 스크롤 위치', document.documentElement.scrollTop);
					// console.log('2. 높이', document.documentElement.clientHeight);
					// console.log('3. 위치', calcScrollPercent());
					// console.log('4. 결과', drawLine);
					const drawLine = length * (1 - calcScrollPercent());
					line.style.strokeDashoffset = String(drawLine);
				};

				const calcScrollPercent = () => {
					const height = document.documentElement.clientHeight;
					return document.documentElement.scrollTop / height;
				};

				window.addEventListener('scroll', drawScrollPosition);
			}
		});
	}, []);

	return (
		<LandingSixthContainer>
			<LandingSixthTop>
				<TopContentsWrapper>
					<TopMessage>개발의 문화</TopMessage>
					<TopPersonalCardWrapper>
						<PersonalCard style={{ borderBottom: `${scrollPosition > 7200 ? 'none' : '1px solid #d6d6d8'}` }}>
							<PersonalAvatar></PersonalAvatar>
							<div
								style={{
									opacity: `${(scrollPosition - 7200) / 50}`,
									transition: '0.3s',
									backgroundColor: '#3d88b0',
								}}
							>
								<PersonalCode />
							</div>
						</PersonalCard>
						<PersonalCard style={{ borderBottom: `${scrollPosition > 7200 ? 'none' : '1px solid #d6d6d8'}` }}>
							<PersonalAvatar></PersonalAvatar>
							<div
								style={{
									opacity: `${(scrollPosition - 7200) / 50}`,
									transition: '0.3s',
									backgroundColor: '#a17398',
								}}
							>
								<PersonalCode />
							</div>
						</PersonalCard>
						<PersonalCard style={{ borderBottom: `${scrollPosition > 7200 ? 'none' : '1px solid #d6d6d8'}` }}>
							<PersonalAvatar></PersonalAvatar>
							<div
								style={{
									opacity: `${(scrollPosition - 7200) / 50}`,
									transition: '0.3s',
									backgroundColor: '#f36652',
								}}
							>
								<PersonalCode />
							</div>
						</PersonalCard>
						<PersonalCard style={{ borderBottom: `${scrollPosition > 7200 ? 'none' : '1px solid #d6d6d8'}` }}>
							<PersonalAvatar></PersonalAvatar>
							<div
								style={{
									opacity: `${(scrollPosition - 7200) / 50}`,
									transition: '0.3s',
									backgroundColor: '#f79649',
								}}
							>
								<PersonalCode />
							</div>
						</PersonalCard>
						<PersonalCard style={{ borderBottom: `${scrollPosition > 7200 ? 'none' : '1px solid #d6d6d8'}` }}>
							<PersonalAvatar></PersonalAvatar>
							<div
								style={{
									opacity: `${(scrollPosition - 7200) / 50}`,
									transition: '0.5s',
									backgroundColor: '#ffc233',
								}}
							>
								<PersonalCode />
							</div>
						</PersonalCard>
					</TopPersonalCardWrapper>
				</TopContentsWrapper>
				<div>
					<SvgWrapper
						viewBox="0 550 1300 1300"
						xmlns="http://www.w3.org/2000/svg"
						fill="evenodd"
						clipRule="evenodd"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeMiterlimit="1.5"
					>
						<path
							className="rainbowLine"
							d="M700 550v50c0 0-0 0-0 100H1055c0 0-0 0-0 50v50c0 0-0 0-0 100H400c0 0-0 0-0 100v100 0-0 0-0 80H700c0 0-0 0-0 100v380"
							fill="none"
							stroke="#ffc233"
							strokeWidth="40"
						/>
						<path
							className="rainbowLine"
							d="M570 550v150 c0 0-0 00-00 100H275c-0 0-0 0-0 20v150c0 0-0 0-0 100H750c-0 0-0 0-0 50v160 0-0 0-0 100v280"
							fill="none"
							stroke="#f79649"
							strokeWidth="40"
						/>
						<path
							className="rainbowLine"
							d="M440 550v210 c0 0-0 00-00 100H975c-00 0-0 0-0 10v200c0 0-0 0-0 100H650c-0 0-0 0-0 100v390"
							fill="none"
							stroke="#f36652"
							strokeWidth="40"
						/>
						<path
							className="rainbowLine"
							d="M310 550v280 c0 0-0 00-00 100H1175c-0 0-0 0-0 10v200c0 0-0 0-0 100H600c-0 0-0 0-0 100v320"
							fill="none"
							stroke="#a17398"
							strokeWidth="40"
						/>
						<path
							className="rainbowLine"
							d="M180 550v350 c0 0-0 00-00 100H875c-00 0-0 0-0 10v200c0 0-0 0-0 100H550c-0 0-0 0-0 100v250"
							fill="none"
							stroke="#3d88b0"
							strokeWidth="40"
						/>
					</SvgWrapper>
				</div>
			</LandingSixthTop>
			<LandingSixthBottom>
				<div style={{ opacity: `${scrollPosition > 8850 ? `1` : `0.3`}`, transition: '0.3s' }}>트렌드의 시작</div>
			</LandingSixthBottom>
		</LandingSixthContainer>
	);
};

export default LandingSixth;
