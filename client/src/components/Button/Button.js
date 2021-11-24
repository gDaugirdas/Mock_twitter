import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles';

const Button = ({ children, type, handleClick, isDisabled }) => {
	return (
		<S.SButton type={type || 'button'} onClick={handleClick} disabled={isDisabled || false}>
			{children}
		</S.SButton>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	handleClick: PropTypes.func,
	isDisabled: PropTypes.bool,
};

Button.defaultProps = {
	children: null,
	type: 'button',
	handleClick: () => {},
	isDisabled: false,
};

export default Button;
