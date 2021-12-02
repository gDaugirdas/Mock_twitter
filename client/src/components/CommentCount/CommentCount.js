import React from 'react';
import * as S from './CommentCount.styles';

const CommentCount = ({ count }) => {
	return (
		<S.SWrapper>
			<S.SSpan>{count || 0}</S.SSpan>
			<S.SSpan>{count === 1 ? 'Comment' : 'Comments'}</S.SSpan>
		</S.SWrapper>
	);
};

export default CommentCount;
