import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Main, Section, Loader, Notification, UserMain, ImageGallery } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Profile = () => {
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState();
	const [userImages, setUserImages] = useState();

	const authContext = useContext(AuthContext);

	const { id } = useParams();

	const currentUser = authContext.token ? jwt_decode(authContext.token).id : null;

	const isCurrentUser = Number(id) === currentUser;

	const onProfileDrop = useCallback(
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

	const onGalleryDrop = useCallback(
		(acceptedFiles) => {
			const formData = new FormData();
			formData.append('file', acceptedFiles[0]);
			setLoading(true);
			axios
				.post(process.env.REACT_APP_BASE_API_URL + 'v1/api/user/profileGalleryPicture', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: 'Bearer ' + authContext.token,
					},
				})
				.then((res) => {
					if (res.status === 200) {
						setUserImages([...userImages, { image_url: res.data.imageUrl, id: res.data.id }]);
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
		[authContext.token, userImages]
	);

	const handleDelete = (id) => {
		setLoading(true);
		axios
			.delete(process.env.REACT_APP_BASE_API_URL + 'v1/api/user/profileGalleryPicture/' + id, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					setUserImages(userImages.filter((image) => image.id !== id));
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
	};

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
						<UserMain user={user} onDrop={onProfileDrop} isCurrentUser={isCurrentUser} />
					</Section>
					<Section>
						<ImageGallery
							images={userImages}
							isCurrentUser={isCurrentUser}
							onDrop={onGalleryDrop}
							handleDelete={handleDelete}
						/>
					</Section>
				</>
			)}
		</Main>
	);
};

export default Profile;
