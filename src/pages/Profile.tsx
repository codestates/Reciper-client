import React from 'react';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import UserProfile from '../components/UserProfile/ProfileTop/index';

const Profile = (): JSX.Element => {
	return (
		<>
			<Header />
			<UserProfile />
			<Footer />
		</>
	);
};

export default Profile;
