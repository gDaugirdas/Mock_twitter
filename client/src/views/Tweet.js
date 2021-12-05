import React, { useEffect, useContext, useState } from 'react';
import {
	Main,
	Section,
	Container,
	Loader,
	Notification,
	Post as TweetComponent,
	Post as Comment,
	AccordionForm,
	Button,
} from '../components';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Tweet = () => {
	const [tweet, setTweet] = useState();
	const [editedTweet, setEditedTweet] = useState();

	const [comments, setComments] = useState();
	const [newComment, setNewComment] = useState();

	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();

	const [loading, setLoading] = useState(true);
	const [refetch, setRefetch] = useState(false);

	const authContext = useContext(AuthContext);

	const navigate = useNavigate();

	const { id } = useParams();

	const currentUserId = authContext.token ? jwt_decode(authContext.token).id : null;

	const isOwner = tweet && tweet.user_id === currentUserId;

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

		return () => {
			setRefetch(false);
		};
	}, [authContext.token, id, refetch]);

	const handleCommentSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		axios
			.post(process.env.REACT_APP_BASE_API_URL + 'v1/api/comments/' + id, newComment, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					setRefetch(true);
					setNotification(res.data.msg);
					setStatus(res.status);
					setNewComment();
					e.target.reset();
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
	};

	const handleEditTweetSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		axios
			.put(process.env.REACT_APP_BASE_API_URL + `v1/api/tweets/tweet/${id}`, editedTweet, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					setRefetch(true);
					setNotification(res.data.msg);
					setStatus(res.status);
					setNewComment();
					e.target.reset();
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
	};

	const handleTweetDelete = () => {
		const confirm = window.confirm('Are you sure you want to delete this tweet?');

		if (!confirm) return;

		setLoading(true);
		axios
			.delete(process.env.REACT_APP_BASE_API_URL + `v1/api/tweets/tweet/${id}`, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					setStatus(res.status);
					setNotification(res.data.msg);
					setTimeout(() => {
						return navigate('/home/1');
					}, 2000);
				}
			})
			.catch((err) => {
				if (!err.response) {
					setNotification('Network error');
					return;
				}
				setNotification(err.response.data.err);
				setStatus(err.response.status);
				setLoading(false);
			});
	};

	return (
		<Main>
			{notification && status && <Notification notificationText={notification} status={status} />}
			{loading && <Loader />}
			{isOwner && (
				<Section>
					<Container>
						<AccordionForm
							handleSubmit={handleEditTweetSubmit}
							handleChange={(e) => setEditedTweet({ tweet_text: e.target.value.trim() })}
							loading={loading}
							buttonText='Edit tweet'
							inputLabel='Edit your tweet'
							inputHtmlFor='edit_tweet'
							inputPlaceholder='My edited tweet...'
						/>
					</Container>
				</Section>
			)}
			<Section>
				<Container>
					{tweet && (
						<>
							<TweetComponent
								post={tweet}
								loading={loading}
								setLoading={setLoading}
								setNotification={setNotification}
								setStatus={setStatus}
								variant='tweet'
							/>
							{isOwner && (
								<Button handleClick={handleTweetDelete} isDisabled={loading} variant='delete'>
									Delete
								</Button>
							)}
						</>
					)}
				</Container>
			</Section>
			<Section>
				<Container>
					<AccordionForm
						handleSubmit={handleCommentSubmit}
						handleChange={(e) => setNewComment({ comment: e.target.value.trim() })}
						loading={loading}
						buttonText='New comment'
						inputLabel='Post new comment'
						inputHtmlFor='new_comment'
						inputPlaceholder='My new comment...'
					/>
				</Container>
			</Section>
			<Section>
				<Container>
					{comments && comments.map((comment) => <Comment key={comment.id} post={comment} />)}
				</Container>
			</Section>
		</Main>
	);
};

export default Tweet;
