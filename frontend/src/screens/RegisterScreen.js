import React, { useEffect, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();
	//Get userLogin state.
	const userRegister = useSelector((state) => state.userRegister);

	const { loading, error, userInfo } = userRegister;

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

		//Check if the passwords match
		if (password !== confirmPassword) {
			setMessage("Password doesn't match");
		} else {
			//Dispatch Register here.
			dispatch(Register(name, email, password));
		}
	};
	return (
		//Form container is a component, and inside details are the children
		<div className='register'>
			<h1>Sign UP</h1>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#F1607D'
					fillOpacity='1'
					d='M0,224L34.3,218.7C68.6,213,137,203,206,208C274.3,213,343,235,411,229.3C480,224,549,192,617,181.3C685.7,171,754,181,823,165.3C891.4,149,960,107,1029,122.7C1097.1,139,1166,213,1234,208C1302.9,203,1371,117,1406,74.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'></path>
			</svg>
			{message && <Message variant='danger'>{message}</Message>}
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
			<form onSubmit={submitHandler}>
				<div className='form__group'>
					<label htmlFor='name'>Enter Name</label>
					<input
						type='text'
						placeholder='Enter Your Name'
						name='name'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}></input>
				</div>
				<div className='form__group'>
					<label htmlFor='email'>Email Address</label>
					<input
						type='email'
						placeholder='Enter Your Email'
						value={email}
						id='email'
						name='email'
						onChange={(e) => setEmail(e.target.value)}></input>
				</div>
				<div className='form__group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						placeholder='Enter Your Password'
						value={password}
						name='password'
						id='password'
						onChange={(e) => setPassword(e.target.value)}></input>
				</div>
				<div className='form__group'>
					<label htmlFor='confirmPassword'>Confirm Password</label>
					<input
						type='password'
						placeholder='Confirm Your Password'
						value={confirmPassword}
						name='confirmPassword'
						id='confirmPassword'
						onChange={(e) => setConfirmPassword(e.target.value)}></input>
				</div>

				<Button type='submit' variant='primary'>
					Register
				</Button>
			</form>
			<Row className='py-3'>
				<Col>
					Have an account?{' '}
					<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
						Log In
					</Link>
				</Col>
			</Row>
		</div>
	);
};

export default RegisterScreen;
