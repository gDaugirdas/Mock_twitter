import React, { useEffect, useContext, useState } from 'react';
import { Main, Section, Container, Loader, Notification } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Tweet = () => {
	const [tweet, setTweet] = useState();
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();
	const [loading, setLoading] = useState(true);

	const authContext = useContext(AuthContext);

	const { id } = useParams();

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BASE_API_URL + `v1/api/tweets/${id}`, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((response) => {
				if (response.data.length === 0) {
					setStatus(404);
					setNotification('Tweet not found');
					return;
				}
				return setTweet(response.data);
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
			<Section>
				<Container>
					{notification && status && <Notification notificationText={notification} status={status} />}
					{loading && <Loader />}
					{tweet &&
						tweet.map((tweet) => (
							<div key={tweet.id}>
								<p>Posted by: {tweet.first_name}</p>
								<p>Text: {tweet.tweet_text}</p>
								{tweet.attachment && <p>{tweet.attachment}</p>}
								<p>Likes: {tweet.liked}</p>
								<p>Posted at: {tweet.created_at}</p>
								<hr />
							</div>
						))}
					This is a unique tweet route for tweet with id of {id}
				</Container>
			</Section>
		</Main>
	);
};

export default Tweet;
