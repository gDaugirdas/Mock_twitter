import React, { useEffect, useContext, useState } from 'react';
import {
	Main,
	Section,
	Container,
	Loader,
	Notification,
	Tweet as TweetComponent,
	Comment,
	NewCommentForm,
	EditCommentForm,
	Button,
} from '../components';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Tweet = () => {
	const [tweet, setTweet] = useState();
	const [comments, setComments] = useState();
	const [newComment, setNewComment] = useState();
	const [editedComment, setEditedComment] = useState();
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();
	const [loading, setLoading] = useState(true);

	const authContext = useContext(AuthContext);

	const { id } = useParams();

	const currentUser = authContext.token ? jwt_decode(authContext.token).id : null;

	const isOwner = tweet && tweet.user_id === currentUser;

	console.log(isOwner);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BASE_API_URL + `v1/api/tweets/tweet/${id}`, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((response) => {
				setTweet(response.data[0]);
				setComments(response.data.comments);
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

	const handleCommentSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		console.log(id);
		console.log(newComment);
		axios
			.post(process.env.REACT_APP_BASE_API_URL + 'v1/api/comments/' + id, newComment, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					setNotification(res.data.msg);
					setStatus(res.status);
					setNewComment();
					e.target.reset();
				}
			})
			.catch((err) => {
				setNotification(err.response.data.err);
				setStatus(err.response.status);
				return;
			});
	};

	const handleEditCommentSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		console.log(id);
		console.log(newComment);
		axios
			.put(process.env.REACT_APP_BASE_API_URL + `v1/api/tweets/tweet/${id}`, editedComment, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					setNotification(res.data.msg);
					setStatus(res.status);
					setNewComment();
					e.target.reset();
				}
			})
			.catch((err) => {
				setNotification(err.response.data.err);
				setStatus(err.response.status);
				return;
			});
	};

	const handleTweetDelete = (e) => {
		setLoading(true);
		axios
			.delete(process.env.REACT_APP_BASE_API_URL + `v1/api/tweets/tweet/${id}`, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					setNotification(res.data.msg);
					setStatus(res.status);
				}
			})
			.catch((err) => {
				setNotification(err.response.data.err);
				setStatus(err.response.status);
				return;
			});
	};
	return (
		<Main>
			{notification && status && <Notification notificationText={notification} status={status} />}
			{loading && <Loader />}
			<Section>
				<Container>
					{isOwner && (
						<div>
							<EditCommentForm
								handleEditCommentSubmit={handleEditCommentSubmit}
								setEditedComment={setEditedComment}
								loading={loading}
							/>
							<Button handleClick={handleTweetDelete}>Delete</Button>
						</div>
					)}
					{tweet && (
						<TweetComponent
							tweet={tweet}
							loading={loading}
							setLoading={setLoading}
							setNotification={setNotification}
							setStatus={setStatus}
						/>
					)}
					<NewCommentForm
						handleCommentSubmit={handleCommentSubmit}
						setNewComment={setNewComment}
						loading={loading}
					/>
					{comments && comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
				</Container>
			</Section>
		</Main>
	);
};

export default Tweet;
