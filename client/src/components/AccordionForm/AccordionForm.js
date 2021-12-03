import React, { useState } from 'react';
import * as S from './AccordionForm.styles';
import { FormGroupTextarea, Accordion, Button } from '..';

const ActionForm = ({
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

			<div>
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
			</div>
		</>
	);
};

export default ActionForm;
