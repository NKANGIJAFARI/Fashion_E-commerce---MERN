import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../actions/cartActions';
import CheckOutSteps from '../components/CheckOutSteps';

const ShippingScreen = ({ history }) => {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

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
		<div className='shipping'>
			<CheckOutSteps step1 step2 />
			<h1>Shipping</h1>
			<form onSubmit={onsubmitHandler}>
				<div>
					<label htmlFor='address'>Enter Address</label>
					<input
						type='text'
						placeholder='Enter Your Address'
						value={address}
						required
						name='address'
						id='address'
						onChange={(e) => setAddress(e.target.value)}></input>
				</div>
				<div>
					<label htmlFor='city'>Enter City</label>
					<input
						type='text'
						placeholder='Enter Your City'
						value={city}
						required
						name='city'
						id='city'
						onChange={(e) => setCity(e.target.value)}></input>
				</div>
				<div>
					<label htmlFor='postalCode'>Postal Code</label>
					<input
						type='text'
						placeholder='Enter Postal Code'
						value={postalCode}
						required
						name='postalCode'
						id='postalCode'
						onChange={(e) => setPostalCode(e.target.value)}></input>
				</div>
				<div>
					<label htmlFor='counrty'>Country</label>
					<input
						type='text'
						placeholder='Enter Your Country'
						value={country}
						required
						name='country'
						id='country'
						onChange={(e) => setCountry(e.target.value)}></input>
				</div>
				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</form>
		</div>
	);
};

export default ShippingScreen;
