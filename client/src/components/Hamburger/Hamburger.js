import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Hamburger.styles';

const Burger = ({ isOpen, setIsOpen }) => {
	return (
		<S.SHamburger type='button' onClick={() => setIsOpen(!isOpen)}>
			<S.SHambugerLine isOpen={isOpen} />
			<S.SHambugerLine isOpen={isOpen} />
			<S.SHambugerLine isOpen={isOpen} />
		</S.SHamburger>
	);
};

Burger.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
};

Burger.defaultProps = {
	isOpen: false,
	setIsOpen: () => {},
};

export default Burger;
