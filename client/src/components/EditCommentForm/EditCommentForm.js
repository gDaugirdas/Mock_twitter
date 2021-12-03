import React, { useState } from 'react';
import * as S from './EditCommentForm.styles';
import { Container, FormGroupTextarea, Accordion, Button } from '../';

const EditCommentForm = ({ handleEditCommentSubmit, setEditedComment, loading }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Container>
			<S.SButtonWrapper>
				<Button handleClick={handleClick}>Edit comment</Button>
			</S.SButtonWrapper>

			<Accordion isOpen={isOpen}>
				<S.SForm handleSubmit={handleEditCommentSubmit} heading='Edit comment'>
					<FormGroupTextarea
						labelText='Comment text'
						htmlFor='comment_text'
						textareaPlaceholder='My edited Comment...'
						handleChange={(e) => setEditedComment({ tweet_text: e.target.value.trim() })}
						required
					/>
					<Button type='submit' isDisabled={loading}>
						Post
					</Button>
				</S.SForm>
			</Accordion>
		</Container>
	);
};

export default EditCommentForm;