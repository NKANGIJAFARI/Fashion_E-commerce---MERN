import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Login } from '../actions/userActions';

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
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#F1607D'
					fillOpacity='1'
					d='M0,224L34.3,218.7C68.6,213,137,203,206,208C274.3,213,343,235,411,229.3C480,224,549,192,617,181.3C685.7,171,754,181,823,165.3C891.4,149,960,107,1029,122.7C1097.1,139,1166,213,1234,208C1302.9,203,1371,117,1406,74.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'></path>
			</svg>

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

			<div className='options'>
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
