import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CardList.styles';

const CardList = ({ skills }) => {
	return (
		<S.SCardList>
			{skills &&
				skills.map((skill, index) => (
					<S.SCard key={skill.id || index}>
						<S.STitle>{skill.title || 'No skill title'}</S.STitle>
						<S.SDescription>{skill.description || 'No skill description'}</S.SDescription>
					</S.SCard>
				))}
		</S.SCardList>
	);
};

CardList.propTypes = {
	skills: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	),
};

CardList.defaultProps = {
	skills: [],
};

export default CardList;
