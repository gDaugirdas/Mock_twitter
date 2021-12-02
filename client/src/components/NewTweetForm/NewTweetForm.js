import React, { useState } from 'react';
import * as S from './NewTweetForm.styles';
import { Container, FormGroupTextarea, Accordion, Button } from '../';

const NewTweetForm = ({ handleTweetSubmit, setNewTweet, newTweet, loading }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Container>
			<S.SButtonWrapper>
				<Button handleClick={handleClick}>Post new tweet</Button>
			</S.SButtonWrapper>

			<Accordion isOpen={isOpen}>
				<S.SForm handleSubmit={handleTweetSubmit} heading='New tweet'>
					<FormGroupTextarea
						labelText='Tweet text'
						htmlFor='tweet_text'
						textareaPlaceholder='My new tweet...'
						handleChange={(e) => setNewTweet({ ...newTweet, tweet_text: e.target.value.trim() })}
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

export default NewTweetForm;
