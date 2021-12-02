import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.styles';

const Container = ({ children, className }) => {
	return <S.SContainer>{children}</S.SContainer>;
};

Container.propTypes = {
	children: PropTypes.node,
};

Container.defaultProps = {
	children: null,
};

export default Container;
