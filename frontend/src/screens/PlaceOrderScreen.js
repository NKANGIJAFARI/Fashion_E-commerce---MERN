import React, { useEffect } from 'react';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import CheckOutSteps from '../components/CheckOutSteps';
import { createOrder } from '../actions/orderActions';
import { resetCart } from '../actions/cartActions';

const PlaceOrderScreen = ({ history }) => {
	const dispatch = useDispatch();

	//Get items from the cart
	const cart = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.userLogin);

	//Calculate Prices-------------------------------------------------------------------------------

	//Add decimals
	const addDecimals = (number) => {
		return (Math.round(number * 100) / 100).toFixed(2);
	};

	cart.itemsPrice = addDecimals(
		cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
	);

	cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
	cart.taxPrice = addDecimals(Number((0.05 * cart.itemsPrice).toFixed(2)));
	cart.totalPrice = addDecimals(
		(
			Number(cart.itemsPrice) +
			Number(cart.shippingPrice) +
			Number(cart.taxPrice)
		).toFixed(2),
	);
	//=====================================================================================

	/* Whenever the order is successfully created, the order reducer will 
	give success true as the value, and then that value will be passed on
	to the orderCreate state which we shall get  by the useSelector below,
	and then use UseEffect to check for changes of success, if true,redirect
	user to order infromation on order screen*/
	const orderCreate = useSelector((state) => state.orderCreate);
	const { order, success, error } = orderCreate;

	useEffect(() => {
		if (success) {
			history.push(`/order/${order._id}`);
		}
		// eslint-disable-next-line
	}, [history, success]);

	//========================================================================================

	//Functionality to manage orders -----------------------------------------------
	const placeOrderHandler = () => {
		dispatch(
			createOrder({
				orderItems: cart.cartItems,
				shippingAddress: cart.shippingAddress,
				paymentMethod: 'PayPal',
				itemsPrice: cart.itemsPrice,
				taxPrice: cart.taxPrice,
				shippingPrice: cart.shippingPrice,
				totalPrice: cart.totalPrice,
			}),
		);

		dispatch(resetCart());
	};
	//=====================================================================================================

	return (
		<div className='placeOrder'>
			<CheckOutSteps step1 step2 step3 step4 />
			<Row>
				<Col md={8} className='placeOrder__details'>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>Shipping Details</h2>
							{userInfo.name && (
								<p>
									<strong>Name:</strong>
									{userInfo.name}
								</p>
							)}
							{userInfo.email && (
								<p>
									<strong>Email:</strong>
									{userInfo.email}
								</p>
							)}
							{userInfo.phone && (
								<p>
									<strong>Phone No.:</strong>
									{userInfo.phone}
								</p>
							)}
							<p>
								<strong>Address:</strong>
								{cart.shippingAddress.address},{cart.shippingAddress.city},
								{cart.shippingAddress.postalCode},{cart.shippingAddress.counrty}
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							{/* <h2>Payment Method</h2> */}
							{/* {cart.paymentMethod}
							PayPal */}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Order Items</h2>
							{cart.cartItems.length === 0 ? (
								<Message>Your cart is Empty</Message>
							) : (
								<ListGroup>
									{cart.cartItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row className='placeOrder__details'>
												<Col md={2} className='placeOrder__details--imgWrapper'>
													<img src={item.image} alt={item.name} />
												</Col>
												<Col md={4} className='placeOrder__details--name'>
													<Link to={`/products/${item.product}`}>
														{item.name}
													</Link>
												</Col>
												<Col md={6} className='placeOrder__details--price'>
													{item.quantity} x ${item.price} = $
													{addDecimals(item.quantity * item.price)}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h2>Order Summary</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Items Price</Col>
									<Col>$ {cart.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>$ {cart.taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Shipping Costs</Col>
									<Col>$ {cart.shippingPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Total</Col>
									<Col>$ {cart.totalPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								{error && <Message variant='danger'>{error}</Message>}
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									type='button'
									className='btn-block'
									disabled={cart.cartItems === 0}
									onClick={placeOrderHandler}>
									PLACE ORDER
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default PlaceOrderScreen;
