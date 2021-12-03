import React from 'react';
import * as S from './Tweet.styled';
import { Like, CommentCount } from '../';

const Tweet = ({ tweet, setNotification, setStatus }) => {
	return (
		<S.SWrapper>
			<S.SUserImageWrapper>
				<S.SUserImage userImageUrl={tweet.profile_picture} />
			</S.SUserImageWrapper>
			<S.STweetHero>
				<S.SNameLink to={'/user/' + tweet.user_id}>{tweet.first_name}</S.SNameLink>
				<S.SParagraphDate>Posted on: {tweet.created_at.split('T')[0]} </S.SParagraphDate>
				{tweet.edited_at && <S.SParagraphDate>Edited on: {tweet.edited_at.split('T')[0]}</S.SParagraphDate>}
				<S.SParagraph>{tweet.tweet_text}</S.SParagraph>
				<S.SFooter>
					<Like tweetId={tweet.id} setNotification={setNotification} setStatus={setStatus} />
					<CommentCount count={tweet.comment_count} />
					<S.STweetLink to={'/tweets/' + tweet.id}>&#x2192;</S.STweetLink>
				</S.SFooter>
			</S.STweetHero>
		</S.SWrapper>
	);
};

export default Tweet;
