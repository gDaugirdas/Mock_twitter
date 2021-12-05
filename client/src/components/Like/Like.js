import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './Like.styled';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';

const Like = ({ tweetId, setNotification, setStatus }) => {
	const [isLiked, setIsLiked] = useState(false);
	const [likeSum, setLikeSum] = useState(0);
	const [loading, setLoading] = useState(true);

	const authContext = useContext(AuthContext);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BASE_API_URL + 'v1/api/tweets/like/' + tweetId, {
				headers: {
					Authorization: 'Bearer ' + authContext.token,
				},
			})
			.then((res) => {
				setIsLiked(res.data.liked);
				setLikeSum(res.data.sum_likes);
			})
			.catch((err) => {
				setNotification(err.response.data.err);
				setStatus(err.response.status);
				return;
			})
			.finally(() => {
				setLoading(false);
			});
		// Cleanup if component did not mount
		return () => {
			setLoading(false);
		};
	}, [authContext.token, tweetId, setStatus, setNotification]);

	const handleLike = (id) => {
		setLoading(true);
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
			.then((res) => {
				if (res.status === 200) {
					setIsLiked(!isLiked);
					res.data.msg === 'Tweet liked' ? setLikeSum(likeSum + 1) : setLikeSum(likeSum - 1);
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
		<S.SLikeWrapper>
			{loading && <S.SLoader />}
			{!loading && (
				<>
					<S.SSpan>{likeSum || 0}</S.SSpan>
					<S.SLikeChekbox
						checked={isLiked}
						id={tweetId}
						onChange={() => handleLike(tweetId)}
						disabled={loading}
					/>
					<S.SLikeLabel checked={isLiked} htmlFor={tweetId}>
						❤
					</S.SLikeLabel>
				</>
			)}
		</S.SLikeWrapper>
	);
};

Like.propTypes = {
	tweetId: PropTypes.number.isRequired,
	setNotification: PropTypes.func.isRequired,
	setStatus: PropTypes.func.isRequired,
};

export default Like;
