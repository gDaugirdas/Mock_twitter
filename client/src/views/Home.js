import React, { useEffect, useContext, useState } from 'react';
import { Main, Section, Container, Loader, Notification, PaginatedItems, AccordionForm, Tweet } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
	const [tweets, setTweets] = useState([]);
	const [tweetsCount, setTweetsCount] = useState();
	const [newTweet, setNewTweet] = useState();

	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();

	const [loading, setLoading] = useState(false);
	const [refetch, setRefetch] = useState(false);

	const authContext = useContext(AuthContext);

	const { page } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);

		axios
			.get(process.env.REACT_APP_BASE_API_URL + 'v1/api/tweets/' + page, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				setTweets(res.data.tweets);
				setTweetsCount(res.data.tweetsCount.count);
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
	}, [authContext.token, refetch, page]);

	const handleTweetSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		axios

			.post(process.env.REACT_APP_BASE_API_URL + 'v1/api/tweets/tweet', newTweet, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					page !== '1' && navigate('/home/1');
					setNotification(res.data.msg);
					setStatus(res.status);
					setNewTweet();
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
			});
	};

	return (
		<Main>
			{notification && status && <Notification notificationText={notification} status={status} />}
			{loading && <Loader />}
			{!loading && (
				<>
					<Section>
						<Container>
							<AccordionForm
								handleSubmit={handleTweetSubmit}
								handleChange={(e) => setNewTweet({ ...newTweet, tweet_text: e.target.value.trim() })}
								loading={loading}
								buttonText='New Tweet'
								inputLabel='Post new tweet'
								inputHtmlFor='new_tweet'
								inputPlaceholder='My new tweet...'
							/>
						</Container>
					</Section>
					{tweetsCount && (
						<Section>
							<PaginatedItems tweetsCount={tweetsCount} />
						</Section>
					)}
					<Section>
						<Container>
							{tweets.map((tweet) => (
								<Tweet
									key={tweet.id}
									tweet={tweet}
									loading={loading}
									setLoading={setLoading}
									setNotification={setNotification}
									setStatus={setStatus}
								/>
							))}
						</Container>
					</Section>
				</>
			)}
		</Main>
	);
};

export default Home;
