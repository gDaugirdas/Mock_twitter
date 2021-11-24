import React from 'react';
import { Main, Section, Container } from '../components';
import axios from 'axios';

const Profile = () => {
	// const authContext = useContext(AuthContext);

	const handleImageUpload = (e) => {
		const formData = new FormData();
		formData.append('file', e.target.files[0]);

		axios
			.post(process.env.REACT_APP_BASE_API_URL + 'v1/api/profile', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// useEffect(() => {
	// 	axios
	// 		.get(process.env.REACT_APP_BASE_API_URL + 'v1/content/skills', {
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
					{loading && <Loader />}
					{skills && <CardList skills={skills} />} */}
					<input type='file' onChange={handleImageUpload} />
				</Container>
			</Section>
		</Main>
	);
};

export default Profile;
