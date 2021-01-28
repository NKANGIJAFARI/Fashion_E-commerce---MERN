import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../actions/cartActions';

const ShippingScreen = ({ history }) => {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	console.log('Address', shippingAddress);

	const dispatch = useDispatch();

	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [country, setCountry] = useState(shippingAddress.country);

	const onsubmitHandler = (e) => {
		e.preventDefault();
		dispatch(saveShippingAddress({ address, city, postalCode, country }));
		history.push('/payment');
	};

	return (
		<FormContainer>
			<h1>Shipping</h1>
			<Form onSubmit={onsubmitHandler}>
				<Form.Group controlId='address'>
					<Form.Label>Enter Address</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Your Address'
						value={address}
						required
						onChange={(e) => setAddress(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group controlId='city'>
					<Form.Label>Enter City</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Your City'
						value={city}
						required
						onChange={(e) => setCity(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group controlId='postalCode'>
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Postal Code'
						value={postalCode}
						required
						onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group controlId='country'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Your Country'
						value={country}
						required
						onChange={(e) => setCountry(e.target.value)}></Form.Control>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
};

export default ShippingScreen;
