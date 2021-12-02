import React from 'react';
import * as S from './Comment.styles';

const Comment = ({ comment }) => {
	return (
		<S.SWrapper>
			<S.SUserImageWrapper>
				<S.SUserImage userImageUrl={comment.profile_picture} />
			</S.SUserImageWrapper>
			<S.STweetHero>
				<S.SNameLink to={'/user/' + comment.user_id}>{comment.first_name}</S.SNameLink>
				<S.SParagraphDate>Posted on: {comment.created_at.split(['T'])[0]}</S.SParagraphDate>

				<S.SParagraph>{comment.comment}</S.SParagraph>
			</S.STweetHero>
		</S.SWrapper>
	);
};

export default Comment;
