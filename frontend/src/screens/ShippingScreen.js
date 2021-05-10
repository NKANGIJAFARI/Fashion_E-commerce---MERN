import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
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

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(saveShippingAddress({ address, city, postalCode, country }));
		history.push('/placeorder');
	};

	return (
		<div className='shipping'>
			<CheckOutSteps step1 step2 />
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#F1607D'
					fillOpacity='1'
					d='M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,240C840,256,960,256,1080,245.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'></path>
			</svg>
			<h1>Shipping</h1>
			<form onSubmit={submitHandler}>
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
