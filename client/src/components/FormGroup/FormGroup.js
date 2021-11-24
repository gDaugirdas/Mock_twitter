import React from 'react';
import PropTypes from 'prop-types';
import * as S from './FormGroup.styles';

const FormGroupInput = ({ labelText, htmlFor, inputType, inputPlaceholder, handleChange, required }) => {
	return (
		<S.SFormGroup>
			<S.SFormLabel htmlFor={htmlFor || 'htmlFor not provided'}>
				{labelText || 'Label text not provided'}
			</S.SFormLabel>
			<S.SFormInput
				type={inputType || 'text'}
				id={htmlFor || 'htmlFor not provided'}
				placeholder={inputPlaceholder || null}
				onChange={handleChange}
				required={required || false}
			/>
		</S.SFormGroup>
	);
};

FormGroupInput.propTypes = {
	labelText: PropTypes.string.isRequired,
	htmlFor: PropTypes.string.isRequired,
	inputType: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	required: PropTypes.bool,
};

FormGroupInput.defaultProps = {
	labelText: null,
	htmlFor: null,
	inputType: null,
	inputPlaceholder: null,
	handleChange: () => {},
	required: false,
};

const FormGroupTextarea = ({ labelText, htmlFor, textareaPlaceholder, handleChange, required }) => {
	return (
		<S.SFormGroup>
			<S.SFormLabel htmlFor={htmlFor || 'htmlFor not provided'}>
				{labelText || 'Label text not provided'}
			</S.SFormLabel>
			<S.SFormTextarea
				id={htmlFor || 'htmlFor not provided'}
				placeholder={textareaPlaceholder || null}
				onChange={handleChange}
				required={required || false}
			/>
		</S.SFormGroup>
	);
};

FormGroupTextarea.propTypes = {
	labelText: PropTypes.string.isRequired,
	htmlFor: PropTypes.string.isRequired,
	textareaPlaceholder: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	required: PropTypes.bool,
};

FormGroupTextarea.defaultProps = {
	labelText: null,
	htmlFor: null,
	textareaPlaceholder: null,
	handleChange: () => {},
	required: false,
};

export { FormGroupInput, FormGroupTextarea };
