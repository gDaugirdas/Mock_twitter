import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CommentCount.styles';

const CommentCount = ({ count }) => {
	return (
		<S.SWrapper>
			<S.SSpan>{count}</S.SSpan>
			<S.SSpan>{count === 1 ? 'Comment' : 'Comments'}</S.SSpan>
		</S.SWrapper>
	);
};

CommentCount.propTypes = {
	count: PropTypes.number,
};

CommentCount.defaultProps = {
	count: 0,
};

export default CommentCount;
