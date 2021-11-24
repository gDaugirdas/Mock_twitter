import React, { useState, useContext } from 'react';
import {
	Main,
	Section,
	Container,
	Form,
	FormGroupInput,
	Button,
	Notification,
	Loader,
	FormGroupTextarea,
} from '../components';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const Add = () => {
	const [inputs, setInputs] = useState();
	const [loading, setLoading] = useState(false);
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();

	const authContext = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		setNotification();
		setStatus();

		if (!inputs?.title || !inputs?.description) return setNotification('Please fill all fields');

		setLoading(true);

		axios
			.post(process.env.REACT_APP_BASE_API_URL + 'v1/content/skills', inputs, {
				headers: { Authorization: `Bearer ${authContext.token}` },
			})
			.then((res) => {
				if (res.status === 200) {
					setNotification(res.data.msg);
					setStatus(res.status);
					return;
				}
			})
			.catch((err) => {
				if (!err.response) {
					setNotification('Network error');
					return;
				}
				setNotification(err.response.data.err);
				setStatus(err.response.status);
				return;
			})
			.finally(() => {
				e.target.reset();
				setInputs();
				setLoading(false);
			});
	};

	return (
		<Main>
			<Section>
				<Container>
					{notification && <Notification notificationText={notification} status={status} />}
					{loading && <Loader />}
					<Form handleSubmit={handleSubmit} heading='Add new skill'>
						<FormGroupInput
							labelText='Title'
							htmlFor='title'
							inputType='text'
							inputPlaceholder='Enter skill title'
							handleChange={(e) => setInputs({ ...inputs, title: e.target.value.trim() })}
							required
						/>
						<FormGroupTextarea
							labelText='Description'
							htmlFor='description'
							textareaPlaceholder='Enter description'
							handleChange={(e) => setInputs({ ...inputs, description: e.target.value.trim() })}
							required
						/>
						<Button type='submit' isDisabled={loading}>
							Submit
						</Button>
					</Form>
				</Container>
			</Section>
		</Main>
	);
};

export default Add;
