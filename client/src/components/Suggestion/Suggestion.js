import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Suggestion.styles';

const Suggestion = ({ suggestionText, suggestionLinkText, suggestionLink }) => {
	return (
		<S.SSuggestion>
			{suggestionText}
			{suggestionLink && <S.SSuggestionLink to={suggestionLink}>{suggestionLinkText}</S.SSuggestionLink>}
		</S.SSuggestion>
	);
};

Suggestion.propTypes = {
	suggestionText: PropTypes.string.isRequired,
	suggestionLinkText: PropTypes.string,
	suggestionLink: PropTypes.string,
};

Suggestion.defaultProps = {
	suggestionLinkText: 'No suggestion link text provided',
	suggestionLink: '/',
};

export default Suggestion;
