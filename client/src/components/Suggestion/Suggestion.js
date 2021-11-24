import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Suggestion.styles';

const Suggestion = ({ suggestionText, suggestionLinkText, suggestionLink }) => {
	return (
		<S.SSuggestion>
			{suggestionText || 'No suggestion text provided'}
			<S.SSuggestionLink to={suggestionLink || '/'}>
				{suggestionLinkText || 'No suggestion link text provided'}
			</S.SSuggestionLink>
		</S.SSuggestion>
	);
};

Suggestion.propTypes = {
	suggestionText: PropTypes.string.isRequired,
	suggestionLinkText: PropTypes.string.isRequired,
	suggestionLink: PropTypes.string.isRequired,
};

Suggestion.defaultProps = {
	suggestionText: '',
	suggestionLinkText: '',
	suggestionLink: '',
};

export default Suggestion;
