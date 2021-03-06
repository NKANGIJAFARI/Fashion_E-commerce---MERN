import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { listClientOrders } from '../actions/orderActions';

const ProfileScreen = ({ history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);
	const [profileEditing, setEditing] = useState(false);

	const dispatch = useDispatch();

	//Get the userInfo from the userLogin to verify user is logged in
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	//Get userLogin state.
	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error } = userDetails;

	//When the update is successfull,
	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	const ordersListClient = useSelector((state) => state.ordersListClient);
	const {
		loading: loadingOrders,
		error: errorOrders,
		orders,
	} = ordersListClient;

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		} else {
			if (!userInfo.name) {
				dispatch(getUserDetails('profile'));
				/*'profile', according to the route, we get user on "api/users/profile"
                And the user Id will be got on the userLogin details in the route so here 
				we just pass in profile so we got to the proflie screen */

				//Get all client's orders
			} else {
				dispatch(listClientOrders()); //Changed, not like
				setName(userInfo.name);
				setEmail(userInfo.email);
			}
		}
	}, [dispatch, history, userInfo]);

	//Handle what happens when a user click to submit the for details
	const submitHandler = (e) => {
		e.preventDefault();

		//Check if the passwords match
		if (password !== confirmPassword) {
			setMessage("Password doesn't match");
		} else {
			//Dispatch updated profile here.
			dispatch(updateUserProfile({ id: userInfo._id, name, email, password }));
		}
	};

	//This handles the edit button to change to form
	const handleEditClick = () => {
		setEditing(!profileEditing);
	};

	return (
		//Form container is a component, and inside details are the children
		<Row className='profile'>
			<Col md={3}>
				<h1>User Profile</h1>
				{message && <Message variant='danger'>{message}</Message>}
				{error && <Message variant='danger'>{error}</Message>}
				{success && <Message variant='success'>{'Profile Updated'}</Message>}
				{loading && <Loader />}

				{userInfo && !profileEditing && (
					<div>
						<p>{name}</p>
						<p>{email}</p>
						<Button type='submit' variant='primary' onClick={handleEditClick}>
							Edit Profile
						</Button>
					</div>
				)}

				{userInfo && profileEditing && (
					<form onSubmit={submitHandler}>
						<div>
							<label htmlFor='name'>Enter Name</label>
							<input
								id='name'
								type='text'
								placeholder='Enter Your Name'
								value={name}
								onChange={(e) => setName(e.target.value)}></input>
						</div>
						<div>
							<label htmlFor='email'>Email Address</label>
							<input
								id='email'
								type='email'
								placeholder='Enter Your Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}></input>
						</div>
						<div>
							<label htmlFor='password'>Password</label>
							<input
								id='password'
								type='password'
								placeholder='Enter Your Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}></input>
						</div>
						<div>
							<label htmlFor='confirmPassword'>Confirm Password</label>
							<input
								id='confirmPassword'
								type='password'
								placeholder='Confirm Your Password'
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}></input>
						</div>

						<Button type='submit' variant='primary'>
							Update
						</Button>
						<Button type='submit' variant='primary' onClick={handleEditClick}>
							Cancel
						</Button>
					</form>
				)}
			</Col>
			<Col md={9}>
				<h3>My Orders</h3>
				{loadingOrders ? (
					<Loader />
				) : errorOrders ? (
					<Message variant='danger'>{errorOrders}</Message>
				) : orders.length === 0 ? (
					<Message variant='info'>You have no orders</Message>
				) : (
					<Table striped bordered hover responsive className='table-sm'>
						<thead>
							<tr>
								<th>ID</th>
								<th>DATE</th>
								<th>TOTAL</th>
								<th>PAID</th>
								<th>DELIVERED</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order._id}>
									<td>{order._id}</td>
									<td>{order.createdAt.substring(0, 10)}</td>
									<td>{order.totalPrice}</td>
									<td>
										{order.isPaid ? (
											order.paidAt.substring(0, 10)
										) : (
											<i className='fas fa-times' style={{ color: 'red' }}></i>
										)}
									</td>
									<td>
										{order.isDelivered ? (
											order.deliveredAt.substring(0, 10)
										) : (
											<i className='fas fa-times' style={{ color: 'red' }}></i>
										)}
									</td>
									<td>
										<LinkContainer to={`/order/${order._id}`}>
											<Button variant='light' className='btn-sm'>
												Details
											</Button>
										</LinkContainer>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Col>
		</Row>
	);
};

export default ProfileScreen;
