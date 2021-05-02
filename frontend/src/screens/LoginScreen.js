import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';

const LoginScreen = ({ location, history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	//Get userLogin state.
	const userLogin = useSelector((state) => state.userLogin);

	const { loading, error, userInfo } = userLogin;

	/*If we need to redirect the user when they click a button, we use this redirect */
	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		//Whenever userInfo is available, let redirect the user

		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	//Handle what happens when a user click to submit the for details
	const submitHandler = (e) => {
		e.preventDefault();

		//Dispatch logoin here.
		dispatch(Login(email, password));
	};
	return (
		//Form container is a component, and inside details are the children
		<div className='login'>
			<h1>Sign In</h1>

			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
			<form onSubmit={submitHandler}>
				<label htmlFor='email'>Email Address</label>
				<input
					type='email'
					id='email'
					placeholder='Enter Your Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}></input>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					placeholder='Enter Your Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}></input>

				<Button type='submit' variant='primary'>
					Sign In
				</Button>
			</form>

			<div className='py-3'>
				<div>
					New Customer?
					<Link to={userInfo ? `/register?redirect=${redirect}` : '/register'}>
						Register
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
