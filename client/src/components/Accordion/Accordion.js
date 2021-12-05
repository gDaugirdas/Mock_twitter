import React from 'react';
import * as S from './Accordion.styled';
import PropTypes from 'prop-types';

const Accodrion = ({ children, isOpen }) => {
	return <S.SAccordion isOpen={isOpen}>{children}</S.SAccordion>;
};

Accodrion.propTypes = {
	children: PropTypes.node.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

Accodrion.defaultProps = {
	isOpen: false,
};

export default Accodrion;
