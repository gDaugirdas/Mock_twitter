import React, { useState } from 'react';
import * as S from './AccordionForm.styles';
import PropTypes from 'prop-types';
import { FormGroupTextarea, Accordion, Button } from '..';

const AccordionForm = ({
	handleSubmit,
	handleChange,
	loading,
	buttonText,
	heading,
	inputLabel,
	inputHtmlFor,
	inputPlaceholder,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<S.SButtonWrapper>
				<Button handleClick={handleClick}>{buttonText}</Button>
			</S.SButtonWrapper>

			<Accordion isOpen={isOpen}>
				<S.SForm handleSubmit={handleSubmit} heading={heading}>
					<FormGroupTextarea
						labelText={inputLabel}
						htmlFor={inputHtmlFor}
						textareaPlaceholder={inputPlaceholder}
						handleChange={handleChange}
						required
					/>
					<Button type='submit' isDisabled={loading}>
						Post
					</Button>
				</S.SForm>
			</Accordion>
		</>
	);
};

AccordionForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	buttonText: PropTypes.string.isRequired,
	heading: PropTypes.string,
	inputLabel: PropTypes.string,
	inputHtmlFor: PropTypes.string,
	inputPlaceholder: PropTypes.string,
};

AccordionForm.defaultProps = {
	heading: '',
	inputLabel: '',
	inputHtmlFor: '',
	inputPlaceholder: '',
};

export default AccordionForm;
