import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Main.styles';

const Main = ({ children }) => {
	return <S.SMain>{children}</S.SMain>;
};

Main.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Main;
