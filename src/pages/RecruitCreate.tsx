import React from 'react';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import CreaateContainer from '../components/RecruitCreate/CreateContainer';

const RecruitCreate = (): JSX.Element => {
	return (
		<>
			<Header />
			<CreaateContainer />
			<Footer />
		</>
	);
};

export default RecruitCreate;
