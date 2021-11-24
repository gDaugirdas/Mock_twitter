import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Form.styles';

const Form = ({ heading, children, handleSubmit }) => {
	return (
		<S.SFormWrapper>
			{heading && <S.SHeading>{heading}</S.SHeading>}
			<form onSubmit={handleSubmit}>{children}</form>
		</S.SFormWrapper>
	);
};

Form.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
	heading: null,
	children: null,
	handleSubmit: () => {},
};

export default Form;
