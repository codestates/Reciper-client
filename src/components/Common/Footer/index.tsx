import React from 'react';
import ReciperLogo from '../../../images/Logo.png';

import {
	AboutUs,
	Adress,
	Contact,
	ContentsWrapper,
	Copyright,
	FooterContainer,
	LinkArrow,
	LogoWrapper,
} from './styles';

const Footer = (): JSX.Element => {
	return (
		<FooterContainer>
			<ContentsWrapper>
				<div>
					<LogoWrapper>
						<img src={ReciperLogo} />
						Reciper
					</LogoWrapper>
					<Adress>서울특별시 서초구 서초동 서초대로 396</Adress>
				</div>
				<AboutUs>
					<p>서비스 소개</p>
					<a href="https://github.com/codestates/Reciper-client/wiki" target="blank">
						Wiki
						<LinkArrow />
					</a>
					<a href="https://github.com/codestates/Reciper-client" target="blank">
						Client
						<LinkArrow />
					</a>
					<a href="https://github.com/codestates/Reciper-server" target="blank">
						Server
						<LinkArrow />
					</a>
				</AboutUs>
				<Contact>
					<p>컨택트</p>
					<a href="https://github.com/lovelysi0113" target="blank">
						Jung Songyi
						<LinkArrow />
					</a>
					<a href="https://github.com/Woogie-94" target="blank">
						Kwak Eunwook
						<LinkArrow />
					</a>
					<a href="https://github.com/gatsukichi" target="blank">
						Shin Seunggil
						<LinkArrow />
					</a>
					<a href="https://github.com/useonglee" target="blank">
						Lee Useong
						<LinkArrow />
					</a>
				</Contact>
			</ContentsWrapper>
			<Copyright>© Copyright 2021 Reciper Inc. All rights reserved.</Copyright>
		</FooterContainer>
	);
};

export default Footer;
