import React, { useEffect, useContext, useState } from 'react';
import { Main, Section, Container, CardList, Loader, Notification } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const Home = () => {
	const [skills, setSkills] = useState();
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();
	const [loading, setLoading] = useState(true);

	const authContext = useContext(AuthContext);

	// useEffect(() => {
	// 	axios
	// 		.get(process.env.REACT_APP_BASE_API_URL + 'v1/api/wall', {
	// 			headers: {
	// 				Authorization: 'Bearer ' + authContext.token,
	// 			},
	// 		})
	// 		.then((response) => {
	// 			if (response.data.length === 0) {
	// 				setStatus(404);
	// 				setNotification('No skills found');
	// 				return;
	// 			}
	// 			return setSkills(response.data);
	// 		})
	// 		.catch((err) => {
	// 			setNotification(err.response.data.err);
	// 			setStatus(err.response.status);
	// 			return;
	// 		})
	// 		.finally(() => {
	// 			setLoading(false);
	// 		});
	// }, [authContext.token]);

	return (
		<Main>
			<Section>
				<Container>
					{/* {notification && status && <Notification notificationText={notification} status={status} />}
					{loading && <Loader />} */}
					{/* {skills && <CardList skills={skills} />} */}
					Hello Home
				</Container>
			</Section>
		</Main>
	);
};

export default Home;
