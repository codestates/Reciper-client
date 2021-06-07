import React from 'react';

import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import UserProfileEdit from '../components/UserProfileEdit/ProfileEditTop';

const ProfileEdit = (): JSX.Element => {
	return (
		<>
			<Header />
			<UserProfileEdit />
			<Footer />
		</>
	);
};

export default ProfileEdit;
