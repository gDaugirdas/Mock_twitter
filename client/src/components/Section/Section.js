import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Section.styles';

const Section = ({ children }) => {
	return <S.SSection>{children || 'No section children provided'}</S.SSection>;
};

Section.propTypes = {
	children: PropTypes.node.isRequired,
};

Section.defaultProps = {
	children: null,
};

export default Section;
