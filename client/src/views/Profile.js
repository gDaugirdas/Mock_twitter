import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Main, Section, Loader, Notification, UserHero } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Profile = ({theme, toggleTheme}) => {
	const [user, setUser] = useState();

	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();

	const [loading, setLoading] = useState(true);

	const authContext = useContext(AuthContext);

	const { id } = useParams();

	const currentUser = authContext.token ? jwt_decode(authContext.token).id : null;

	const isCurrentUser = Number(id) === currentUser;

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BASE_API_URL + 'v1/api/user/' + id, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				setUser(res.data.user);
			})
			.catch((err) => {
				if (!err.response) {
					setNotification('Network error');
					return;
				}
				setNotification(err.response.data.err);
				setStatus(err.response.status);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [authContext.token, id]);

	const onImageDrop = useCallback(
		(acceptedFiles) => {
			const formData = new FormData();
			formData.append('file', acceptedFiles[0]);
			setLoading(true);
			axios
				.put(process.env.REACT_APP_BASE_API_URL + 'v1/api/user/pictures/profile', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: 'Bearer ' + authContext.token,
					},
				})
				.then((res) => {
					if (res.status === 200) {
						setUser({ ...user, profile_picture: res.data.imageUrl });
						setNotification(res.data.msg);
						setStatus(res.status);
					}
				})
				.catch((err) => {
					if (!err.response) {
						setNotification('Network error');
						return;
					}
					setNotification(err.response.data.err);
					setStatus(err.response.status);
				})
				.finally(() => {
					setLoading(false);
				});
		},
		[authContext.token, user]
	);

	return (
		<Main>
			{notification && status && <Notification notificationText={notification} status={status} />}
			{loading && <Loader />}
			{!loading && (
				<Section>
					<UserHero user={user} onDrop={onImageDrop} isCurrentUser={isCurrentUser} theme={theme} toggleTheme={toggleTheme} />
				</Section>
			)}
   
		</Main>
	);
};

export default Profile;
