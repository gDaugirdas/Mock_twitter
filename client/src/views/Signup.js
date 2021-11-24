import React, { useState } from 'react';
import {
	Main,
	Section,
	Container,
	Form,
	FormGroupInput,
	Button,
	Notification,
	Loader,
	Suggestion,
} from '../components';
import axios from 'axios';
import validateEmail from '../utils/utils';

const Signup = () => {
	const [inputs, setInputs] = useState();
	const [loading, setLoading] = useState(false);
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		setNotification();
		setStatus();

		if (!inputs?.email || !inputs?.password) return setNotification('Please fill all fields');
		if (!validateEmail(inputs?.email)) return setNotification('Please enter a valid email');
		if (inputs?.password.length < 6) return setNotification('Password must be at least 6 characters');

		setLoading(true);

		axios
			.post(process.env.REACT_APP_BASE_API_URL + 'v1/api/auth/register', inputs)
			.then((res) => {
				if (res.status === 200) {
					setNotification('User created successfully!');
					setStatus(res.status);
					e.target.reset();
					setInputs();
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
				setLoading(false);
			});
	};

	return (
		<Main>
			<Section>
				<Container>
					{notification && <Notification notificationText={notification} status={status} />}
					{loading && <Loader />}
					<Form handleSubmit={handleSubmit} heading='Sign up'>
						<FormGroupInput
							labelText='First Name'
							htmlFor='first_name'
							inputType='text'
							inputPlaceholder='Enter your first name'
							handleChange={(e) => setInputs({ ...inputs, first_name: e.target.value })}
						/>
						<FormGroupInput
							labelText='Last Name'
							htmlFor='last_name'
							inputType='text'
							inputPlaceholder='Enter your last name'
							handleChange={(e) => setInputs({ ...inputs, last_name: e.target.value })}
						/>
						<FormGroupInput
							labelText='Email'
							htmlFor='email'
							inputType='email'
							inputPlaceholder='Enter your email'
							handleChange={(e) => setInputs({ ...inputs, email: e.target.value })}
						/>
						<FormGroupInput
							labelText='Password'
							htmlFor='password'
							inputType='password'
							inputPlaceholder='Enter your password'
							handleChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
						<FormGroupInput
							labelText='Confirm Password'
							htmlFor='confPassword'
							inputType='password'
							inputPlaceholder='Confirm password'
							handleChange={(e) => setInputs({ ...inputs, confirm_password: e.target.value })}
						/>
						<Button type='submit' isDisabled={loading}>
							Sign up
						</Button>
						<Suggestion
							suggestionText='Already have an account? '
							suggestionLinkText='Login'
							suggestionLink='/login'
						/>
					</Form>
				</Container>
			</Section>
		</Main>
	);
};

export default Signup;
