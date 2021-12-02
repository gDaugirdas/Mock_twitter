import React, { useState } from 'react';
import * as S from './NewCommentForm.styles';
import { Container, FormGroupTextarea, Accordion, Button } from '../';

const NewCommentForm = ({ handleCommentSubmit, setNewComment, loading }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Container>
			<S.SButtonWrapper>
				<Button handleClick={handleClick}>Post new comment</Button>
			</S.SButtonWrapper>

			<Accordion isOpen={isOpen}>
				<S.SForm handleSubmit={handleCommentSubmit} heading='New comment'>
					<FormGroupTextarea
						labelText='Comment text'
						htmlFor='comment_text'
						textareaPlaceholder='My new Comment...'
						handleChange={(e) => setNewComment({ comment: e.target.value.trim() })}
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

export default NewCommentForm;
