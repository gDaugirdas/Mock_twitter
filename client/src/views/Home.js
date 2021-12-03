import React, { useEffect, useContext, useState } from 'react';
import { Main, Section, Container, Loader, Notification, PaginatedItems, NewTweetForm, Tweet } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
	const [tweets, setTweets] = useState();
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();
	const [loading, setLoading] = useState(false);
	const [refetch, setRefetch] = useState(false);
	const [pageCount, setPageCount] = useState();
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
			.then((res) => {
				console.log(res.data.tweets);
				setTweets(res.data.tweets);
				setPageCount(res.data.tweetsCount.count);
			})
			.catch((err) => {
				setNotification(err.response.data.err);
				setStatus(err.response.status);
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
			});
	};

	return (
		<Main>
			{notification && status && <Notification notificationText={notification} status={status} />}
			{loading && <Loader />}
			<Section>
				<NewTweetForm
					handleTweetSubmit={handleTweetSubmit}
					setNewTweet={setNewTweet}
					newTweet={newTweet}
					loading={loading}
				/>
			</Section>
			<Section>
				<PaginatedItems pageCount={pageCount} page={page} />
				<Container>
					{tweets &&
						tweets.map((tweet) => (
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
		</Main>
	);
};

export default Home;
