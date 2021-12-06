import React from 'react';
import PropTypes from 'prop-types';
import * as S from './FormGroup.styles';

const FormGroupInput = ({ labelText, htmlFor, inputType, inputPlaceholder, handleChange, required, star, legend }) => {
	return (
		<S.SFormGroup>
			<S.SFormLabel htmlFor={htmlFor}>{labelText}
        {star && <S.SSpan>*</S.SSpan>}
      </S.SFormLabel>
      {legend && <S.SLegend>{legend}</S.SLegend>}
			<S.SFormInput
				type={inputType}
				id={htmlFor}
				placeholder={inputPlaceholder}
				onChange={handleChange}
				required={required}
			/>
		</S.SFormGroup>
	);
};

FormGroupInput.propTypes = {
	labelText: PropTypes.string,
	htmlFor: PropTypes.string,
	inputType: PropTypes.string.isRequired,
	inputPlaceholder: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	required: PropTypes.bool,
};

FormGroupInput.defaultProps = {
	labelText: 'Label text not provided',
	htmlFor: 'htmlFor not provided',
	inputPlaceholder: '',
	required: false,
};

const FormGroupTextarea = ({ labelText, htmlFor, textareaPlaceholder, handleChange, required }) => {
	return (
		<S.SFormGroup>
			<S.SFormLabel htmlFor={htmlFor}>{labelText}</S.SFormLabel>
			<S.SFormTextarea
				id={htmlFor}
				placeholder={textareaPlaceholder}
				onChange={handleChange}
				required={required}
			/>
		</S.SFormGroup>
	);
};

FormGroupTextarea.propTypes = {
	labelText: PropTypes.string,
	htmlFor: PropTypes.string,
	textareaPlaceholder: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	required: PropTypes.bool,
};

FormGroupTextarea.defaultProps = {
	labelText: 'Label text not provided',
	htmlFor: 'htmlFor not provided',
	textareaPlaceholder: '',
	required: false,
};

export { FormGroupInput, FormGroupTextarea };
