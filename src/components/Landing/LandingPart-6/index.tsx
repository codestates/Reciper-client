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
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const svg: HTMLCollectionOf<Element> = document.getElementsByClassName('rainbowLine');

		Array.from(svg).forEach(line => {
			if (line instanceof SVGPathElement) {
				const length = line.getTotalLength();
				line.style.strokeDasharray = String(length);
				line.style.strokeDashoffset = String(length);

				const drawScrollPosition = () => {
					// TODO:
					// drawLine: 0 ~ 1970 동안 그려진다.
					// length: 1970, 위치: -949
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
					<TopMessage>우리는</TopMessage>
					<TopPersonalCardWrapper>
						<PersonalCard style={{ borderBottom: `${scrollPosition > 7350 ? 'none' : '1px solid #d6d6d8'}` }}>
							<PersonalAvatar>
								<img src={`${process.env.REACT_APP_SERVER_URL}/images/part6-1.svg`} alt={'개발하는 이미지1'} />
							</PersonalAvatar>
							<div
								style={{
									opacity: `${(scrollPosition - 7350) / 50}`,
									transition: '0.3s',
									backgroundColor: '#3d88b0',
								}}
							>
								<PersonalCode />
							</div>
						</PersonalCard>
						<PersonalCard style={{ borderBottom: `${scrollPosition > 7350 ? 'none' : '1px solid #d6d6d8'}` }}>
							<PersonalAvatar>
								<img src={`${process.env.REACT_APP_SERVER_URL}/images/part6-2.svg`} alt={'개발하는 이미지2'} />
							</PersonalAvatar>
							<div
								style={{
									opacity: `${(scrollPosition - 7350) / 50}`,
									transition: '0.3s',
									backgroundColor: '#a17398',
								}}
							>
								<PersonalCode />
							</div>
						</PersonalCard>
						<PersonalCard style={{ borderBottom: `${scrollPosition > 7350 ? 'none' : '1px solid #d6d6d8'}` }}>
							<PersonalAvatar>
								<img src={`${process.env.REACT_APP_SERVER_URL}/images/part6-3.svg`} alt={'개발하는 이미지3'} />
							</PersonalAvatar>
							<div
								style={{
									opacity: `${(scrollPosition - 7350) / 50}`,
									transition: '0.3s',
									backgroundColor: '#f36652',
								}}
							>
								<PersonalCode />
							</div>
						</PersonalCard>
						<PersonalCard style={{ borderBottom: `${scrollPosition > 7350 ? 'none' : '1px solid #d6d6d8'}` }}>
							<PersonalAvatar>
								<img src={`${process.env.REACT_APP_SERVER_URL}/images/part6-4.svg`} alt={'개발하는 이미지4'} />
							</PersonalAvatar>
							<div
								style={{
									opacity: `${(scrollPosition - 7350) / 50}`,
									transition: '0.3s',
									backgroundColor: '#f79649',
								}}
							>
								<PersonalCode />
							</div>
						</PersonalCard>
						<PersonalCard style={{ borderBottom: `${scrollPosition > 7350 ? 'none' : '1px solid #d6d6d8'}` }}>
							<PersonalAvatar>
								<img src={`${process.env.REACT_APP_SERVER_URL}/images/part6-5.svg`} alt={'개발하는 이미지5'} />
							</PersonalAvatar>
							<div
								style={{
									opacity: `${(scrollPosition - 7350) / 50}`,
									transition: '0.5s',
									backgroundColor: '#ffc233',
								}}
							>
								<PersonalCode />
							</div>
						</PersonalCard>
					</TopPersonalCardWrapper>
				</TopContentsWrapper>

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
						d="M735 550v50c0 0-0 0-0 100H1055c0 0-0 0-0 50v50c0 0-0 0-0 100H400c0 0-0 0-0 100v100 0-0 0-0 80H700c0 0-0 0-0 100v380"
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
						d="M406 550v210 c0 0-0 00-00 100H975c-00 0-0 0-0 10v200c0 0-0 0-0 100H650c-0 0-0 0-0 100v390"
						fill="none"
						stroke="#f36652"
						strokeWidth="40"
					/>
					<path
						className="rainbowLine"
						d="M243 550v280 c0 0-0 00-00 100H1175c-0 0-0 0-0 10v200c0 0-0 0-0 100H600c-0 0-0 0-0 100v320"
						fill="none"
						stroke="#a17398"
						strokeWidth="40"
					/>
					<path
						className="rainbowLine"
						d="M80 550v350 c0 0-0 00-00 100H875c-00 0-0 0-0 10v200c0 0-0 0-0 100H550c-0 0-0 0-0 100v250"
						fill="none"
						stroke="#3d88b0"
						strokeWidth="40"
					/>
				</SvgWrapper>
			</LandingSixthTop>
			<LandingSixthBottom>
				<div style={{ opacity: `${scrollPosition > 8950 ? `1` : `0.3`}`, transition: '0.3s' }}>함께 성장합니다</div>
				<p style={{ opacity: `${scrollPosition > 9000 ? `1` : `00`}`, transition: '0.3s' }}>
					레시퍼는 공동의 가치를 추구합니다. 모두가 성장하는 문화를 만들어 갈 것을 약속드립니다.
				</p>
			</LandingSixthBottom>
		</LandingSixthContainer>
	);
};

export default LandingSixth;
