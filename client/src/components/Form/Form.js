import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Form.styles';

const Form = ({ heading, children, handleSubmit, className }) => {
	return (
		<S.SFormWrapper className={className}>
			{heading && <S.SHeading>{heading}</S.SHeading>}
			<form onSubmit={handleSubmit}>{children}</form>
		</S.SFormWrapper>
	);
};

Form.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	className: PropTypes.string,
};

Form.defaultProps = {
	heading: null,
	className: null,
};

export default Form;
