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
	Suggestion,
} from '../components';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import validateEmail from '../utils/utils';

const Login = () => {
	const [inputs, setInputs] = useState();
	const [loading, setLoading] = useState(false);
	const [notification, setNotification] = useState();
	const [status, setStatus] = useState();

	const authContext = useContext(AuthContext);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		setNotification();
		setStatus();

		if (!inputs?.email || !inputs?.password) return setNotification('Please fill all fields');
		if (!validateEmail(inputs?.email)) return setNotification('Please enter a valid email');

		setLoading(true);

		axios
			.post(process.env.REACT_APP_BASE_API_URL + 'v1/api/auth/login', inputs)
			.then((res) => {
				if (res.status === 200) {
					authContext.setToken(res.data.token);
					localStorage.setItem('token', res.data.token);
					return navigate('/');
				}
			})
			.catch((err) => {
				if (!err.response) {
					setNotification('Network error');
					setLoading(false);
					return;
				}
				setNotification(err.response.data.err);
				setStatus(err.response.status);
				setLoading(false);
			});
	};

	return (
		<Main>
			{notification && <Notification notificationText={notification} status={status} />}
			{loading && <Loader />}
			<Section>
				<Container>
					<Form handleSubmit={handleSubmit} heading='Login'>
						<FormGroupInput
							labelText='Email'
							htmlFor='email'
							inputType='email'
							inputPlaceholder='Enter your email'
							handleChange={(e) => setInputs({ ...inputs, email: e.target.value.trim() })}
							required
						/>
						<FormGroupInput
							labelText='Password'
							htmlFor='password'
							inputType='password'
							inputPlaceholder='Enter your password'
							handleChange={(e) => setInputs({ ...inputs, password: e.target.value.trim() })}
							required
						/>
						<Button type='submit' isDisabled={loading}>
							Login
						</Button>
						<Suggestion
							suggestionText="Don't have an account? "
							suggestionLinkText='Sign up'
							suggestionLink='/signup'
						/>
					</Form>
				</Container>
			</Section>
		</Main>
	);
};

export default Login;
