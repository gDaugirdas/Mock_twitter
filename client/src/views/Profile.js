import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Main, Section, Loader, Notification, UserMain, ImageGallery } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState();
	const [userImages, setUserImages] = useState();

	const authContext = useContext(AuthContext);
	const userContext = useContext(UserContext);

	const { id } = useParams();

	const isCurrentUser = Number(id) === userContext.user.id;

	const onDrop = useCallback(
		(acceptedFiles) => {
			const formData = new FormData();
			formData.append('file', acceptedFiles[0]);
			setLoading(true);
			axios
				.post(process.env.REACT_APP_BASE_API_URL + 'v1/api/user/profilePicture', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: 'Bearer ' + authContext.token,
					},
				})
				.then((res) => {
					if (res.status === 200) {
						setUser([{ ...user[0], profile_picture: res.data.imageUrl }]);
						setNotification(res.data.msg);
						setStatus(res.status);
					}
				})
				.catch((err) => {
					setNotification(err.response.data.err);
					setStatus(err.response.status);
					return;
				})
				.finally(() => {
					setLoading(false);
				});
		},
		[authContext.token, user]
	);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BASE_API_URL + 'v1/api/user/' + id, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((response) => {
				if (response.data.length === 0) {
					setStatus(404);
					setNotification('User not found');
					return;
				}
				console.log(response.data);
				setUser(response.data.user);
				setUserImages(response.data.images);
				return;
			})
			.catch((err) => {
				setNotification(err.response.data.err);
				setStatus(err.response.status);
				return;
			})
			.finally(() => {
				setLoading(false);
			});
	}, [authContext.token, id]);

	return (
		<Main>
			{notification && status && <Notification notificationText={notification} status={status} />}
			{loading && <Loader />}
			{!loading && (
				<>
					<Section>
						<UserMain user={user} onDrop={onDrop} isCurrentUser={isCurrentUser} />
					</Section>
					<Section>
						<ImageGallery images={userImages} isCurrentUser={isCurrentUser} onDrop={onDrop} />
					</Section>
				</>
			)}
		</Main>
	);
};

export default Profile;
