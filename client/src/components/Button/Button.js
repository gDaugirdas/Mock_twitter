import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles';
import { theme } from '../../styles';

const Button = ({ children, type, handleClick, isDisabled, variant }) => {
	let bgColor = '';

	switch (variant) {
		case 'delete':
			bgColor = theme.colors.accent;
			break;
		default:
			bgColor = theme.colors.secondary;
	}

	return (
		<S.SButton type={type} onClick={handleClick} disabled={isDisabled} bgColor={bgColor}>
			{children}
		</S.SButton>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	handleClick: PropTypes.func,
	isDisabled: PropTypes.bool,
	variant: PropTypes.string,
};

Button.defaultProps = {
	type: 'button',
	isDisabled: false,
	variant: '',
};
export default Button;
