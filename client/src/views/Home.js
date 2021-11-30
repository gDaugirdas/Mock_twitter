import React, { useEffect, useContext, useState } from 'react';
import {
	Main,
	Section,
	Container,
	Loader,
	Notification,
	Button,
	Form,
	FormGroupTextarea,
	PaginatedItems,
} from '../components';
import { AuthContext } from '../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
	const [tweets, setTweets] = useState();
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();
	const [loading, setLoading] = useState(true);
	const [refetch, setRefetch] = useState(false);
	const [newTweet, setNewTweet] = useState();

	const authContext = useContext(AuthContext);

	const { page } = useParams();

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BASE_API_URL + 'v1/api/tweets/' + page, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((response) => {
				if (response.data.length === 0) {
					setStatus(404);
					setNotification('No tweets found');
					return;
				}
				console.log(response.data);
				return setTweets(response.data);
			})
			.catch((err) => {
				setNotification(err.response.data.err);
				setStatus(err.response.status);
				return;
			})
			.finally(() => {
				setLoading(false);
			});

		return () => {
			setRefetch(false);
		};
	}, [authContext.token, refetch, page]);

	const handleLike = (id) => {
		axios
			.post(
				process.env.REACT_APP_BASE_API_URL + 'v1/api/tweets/like/' + id,
				{},
				{
					headers: {
						Authorization: 'Bearer ' + authContext.token,
					},
				}
			)
			.catch((err) => {
				setNotification(err.response.data.err);
				setStatus(err.response.status);
				return;
			})
			.finally(() => {
				setLoading(false);
				setRefetch(true);
			});
	};

	const handleTweetSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		axios

			.post(process.env.REACT_APP_BASE_API_URL + 'v1/api/tweets', newTweet, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					setNotification(res.data.msg);
					setStatus(res.status);
					setRefetch(true);
					setNewTweet();
					e.target.reset();
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

	return (
		<Main>
			{notification && status && <Notification notificationText={notification} status={status} />}
			{loading && <Loader />}
			<Section>
				<Container>
					<Form handleSubmit={handleTweetSubmit} heading='New tweet'>
						<FormGroupTextarea
							labelText='New tweet'
							htmlFor='tweet_text'
							textareaPlaceholder='My new tweet...'
							handleChange={(e) => setNewTweet({ ...newTweet, tweet_text: e.target.value.trim() })}
							required
						/>
						<FormGroupTextarea
							labelText='Tweet image'
							htmlFor='tweet_text'
							textareaPlaceholder='Insert image link here...'
							handleChange={(e) => setNewTweet({ ...newTweet, tweet_attachment: e.target.value.trim() })}
						/>

						<Button type='submit' isDisabled={loading}>
							Post Tweet
						</Button>
					</Form>
				</Container>
			</Section>
			<Section>
				<PaginatedItems />
				<Container>
					{tweets &&
						tweets.map((tweet) => (
							<div key={tweet.id}>
								<p>Posted by: {tweet.first_name}</p>
								<p>Text: {tweet.tweet_text}</p>
								{tweet.attachment && <p>{tweet.attachment}</p>}
								<p>
									Likes: {tweet.likes}
									<Button handleClick={() => handleLike(tweet.id)}>Like</Button>
								</p>
								<p>Posted at: {tweet.created_at}</p>
								<hr />
							</div>
						))}
				</Container>
			</Section>
		</Main>
	);
};

export default Home;
