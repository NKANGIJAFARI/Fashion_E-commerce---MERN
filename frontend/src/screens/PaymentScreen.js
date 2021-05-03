import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../actions/cartActions';

import CheckOutSteps from '../components/CheckOutSteps';

const PaymentScreen = ({ history }) => {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	//Check if there is a shipping address, if no redirect to shippong screen
	if (!shippingAddress) {
		history.push('/shipping');
	}

	const dispatch = useDispatch();

	const [paymentMethod, setpaymentMethod] = useState('PayPal');

	const onsubmitHandler = (e) => {
		e.preventDefault();

		dispatch(savePaymentMethod(paymentMethod));
		history.push('/placeorder');
	};

	return (
		<div className='payment'>
			<CheckOutSteps step1 step2 step3 />
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#F1607D'
					fill-opacity='1'
					d='M0,64L24,64C48,64,96,64,144,74.7C192,85,240,107,288,112C336,117,384,107,432,122.7C480,139,528,181,576,186.7C624,192,672,160,720,160C768,160,816,192,864,202.7C912,213,960,203,1008,186.7C1056,171,1104,149,1152,117.3C1200,85,1248,43,1296,48C1344,53,1392,107,1416,133.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z'></path>
			</svg>
			<h1>Payment Method</h1>
			<form onSubmit={onsubmitHandler}>
				<div>
					<label htmlFor='PayPal'>Select Method</label>
				</div>
				<div>
					<input
						type='radio'
						id='PayPal'
						name='paymentMethod'
						value='PayPal'
						checked
						onChange={(e) => setpaymentMethod(e.target.value)}></input>
					<label htmlFor='PayPal'>PayPal or Credit Card</label>

					{/*Another payment Method if needded 
                    <Form.check
						type='radio'
						label='Stripe or Credit Card'
						id='Stripe'
						name='paymentMethod'
						value='Stripe'
						onChange={(e) => setpaymentMethod(e.target.value)}></Form.check> */}
				</div>
				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</form>
		</div>
	);
};

export default PaymentScreen;
