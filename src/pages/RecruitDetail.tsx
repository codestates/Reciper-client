import React from 'react';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import RecruiteContainer from '../components/RecruitDetail/DetailContainer';

const RecruitDetail = (): JSX.Element => {
	return (
		<>
			<Header />
			<RecruiteContainer />;
			<Footer />
		</>
	);
};

export default RecruitDetail;
