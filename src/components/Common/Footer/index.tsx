import React from 'react';
import ReciperLogo from '../../../images/Logo.png';

import { AboutUs, Adress, Contact, ContentsWrapper, Copyright, FooterContainer, LogoWrapper } from './styles';

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
					<p>회사 소개</p>
					<div>Wiki</div>
					<div>Client</div>
					<div>Server</div>
				</AboutUs>
				<Contact>
					<p>컨택트</p>
					<div>Jung Songi</div>
					<div>Kwak Eunwook</div>
					<div>Shin Seunggil</div>
					<div>Lee Useong</div>
				</Contact>
			</ContentsWrapper>
			<Copyright>© Copyright 2021 Reciper Inc. All rights reserved.</Copyright>
		</FooterContainer>
	);
};

export default Footer;
