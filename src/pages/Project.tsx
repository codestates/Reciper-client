import React from 'react';
import Header from '../components/Common/Header';
import MyInfo from '../components/Project/MyInfo';
import ProjectCardList from '../components/Project/ProjectCardList';

const Project = (): JSX.Element => {
	return (
		<>
			<Header />
			<MyInfo />
			<ProjectCardList />
		</>
	);
};

export default Project;
