import React from 'react';
import { Route, Switch } from 'react-router';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';

const ProfileRoute = (): JSX.Element => {
	return (
		<>
			<Switch>
				<Route exact path="/profile/:id" component={Profile} />
				<Route path="/profile/:id/edit" component={ProfileEdit} />
			</Switch>
		</>
	);
};

export default ProfileRoute;
