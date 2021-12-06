import React from 'react';
import * as S from './Post.styles';
import PropTypes from 'prop-types';
import { Like, CommentCount } from '../';

const Post = ({ post, setNotification, setStatus, variant }) => {
	return (
		<S.SWrapper>
			<S.SUserImageWrapper>
				<S.SUserImage userImageUrl={post.profile_picture} />
			</S.SUserImageWrapper>
			<S.STextWrapper>
				<S.SUserLink to={'/user/' + post.user_id}>{post.first_name}</S.SUserLink>
				<S.SDateParagraph>Posted on: {post.created_at.split('T')[0]} </S.SDateParagraph>
				{post.edited_at && <S.SDateParagraph>Edited on: {post.edited_at.split('T')[0]}</S.SDateParagraph>}
				{post.tweet_text && <S.SParagraph>{post.tweet_text}</S.SParagraph>}
				{post.comment && <S.SParagraph>{post.comment}</S.SParagraph>}
				{variant === 'tweet' && (
					<S.SFooter>
						<Like tweetId={post.id} setNotification={setNotification} setStatus={setStatus} />
						<CommentCount count={post.comment_count} />
						<S.STweetLink to={'/tweets/' + post.id}>&#x2192;</S.STweetLink>
					</S.SFooter>
				)}
			</S.STextWrapper>
		</S.SWrapper>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired,
	setNotification: PropTypes.func,
	setStatus: PropTypes.func,
	variant: PropTypes.string,
};

Post.defaultProps = {
  setNotification: () => {},
  setStatus: () => {},
	variant: '',
};

export default Post;
