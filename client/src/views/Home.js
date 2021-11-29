import React, { useEffect, useContext, useState } from 'react';
import { Main, Section, Container, CardList, Loader, Notification, Button } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const Home = () => {
	const [tweets, setTweets] = useState();
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();
	const [loading, setLoading] = useState(true);
	const [refetch, setRefetch] = useState(false);

	const authContext = useContext(AuthContext);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BASE_API_URL + 'v1/api/tweets', {
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
	}, [authContext.token, refetch]);

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

	return (
		<Main>
			{notification && status && <Notification notificationText={notification} status={status} />}
			{loading && <Loader />}
			<Section>
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
