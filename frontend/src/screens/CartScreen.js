import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	Row,
	Col,
	ListGroup,
	Form,
	Button,
	Card,
	Image,
} from 'react-bootstrap';

import { addToCart, removeFromCart } from '../actions/cartActions';

import EmptyCartDisplay from '../components/EmptyCartDisplay';
import SectionHeading from '../components/Home components/SectionHeading';

const CartScreen = (props) => {
	const { match, location, history } = props;

	const productId = match.params.id;

	//Get the quantity from the url, /cart/productId?quantity="This one is quantity"
	const quantity = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, quantity));
		}
	}, [dispatch, productId, quantity]);

	const removeFromCartHandler = (productId) => {
		dispatch(removeFromCart(productId));
	};

	const checkOutHandler = () => {
		/*When a user clicks proceed to ccheckout, we shall send them to the login
		and if they are logged in we shall just redirect them to shipping page */
		history.push('/login?redirect=shipping');
	};

	return (
		<div className='cart'>
			<SectionHeading desc='Shopping Cart' marginB='1.5rem' />

			<Row className='cart__row'>
				<Col md={9} sm={12} className='cart__left'>
					{cartItems.length === 0 ? (
						<EmptyCartDisplay />
					) : (
						<ListGroup variant='flush'>
							{cartItems.map((item) => (
								//product is the id
								<ListGroup.Item key={item.product}>
									<Row className='cart__items'>
										<Col md={1} sm={1} className='cart__items--imgWrapper'>
											<Image
												src={item.image}
												alt={item.name}
												fluid
												className='cart__items--imgWrapper-img'
											/>
										</Col>
										<Col md={11} sm={11} className='cart__items--details'>
											<div className='cart__items--details-name'>
												<Link to={`/products/${item.product}`}>
													<strong>{item.name}</strong>
												</Link>
												<div className='cart__items--details-info'>
													Size: 3L
												</div>
												<div className='cart__items--details-info'>
													Color: Black
												</div>
											</div>
											<div className='cart__items--details-price'>
												${item.price}
											</div>
											<Form className='cart__items--details-form'>
												<Form.Control
													as='select'
													variant='primary'
													value={Number(item.quantity)}
													onChange={(e) =>
														dispatch(
															addToCart(item.product, Number(e.target.value)),
														)
													}>
													{
														//Get the number of pro
														[...Array(item.countInStock).keys()].map((x) => (
															<option key={x + 1} value={x + 1}>
																{x + 1}
															</option>
														))
													}
												</Form.Control>
											</Form>
											<div className='cart__items--details-price'>
												<strong>
													${(item.quantity * item.price).toFixed(2)}
												</strong>
											</div>
											<div>
												<button
													className='btn btn--cartProductDelete'
													type='button'
													variant='light'
													onClick={() => removeFromCartHandler(item.product)}>
													<i className='fas fa-trash'></i>
												</button>
											</div>
										</Col>
									</Row>
								</ListGroup.Item>
							))}
						</ListGroup>
					)}
				</Col>
				<Col md={3} sm={8} className='cart__right'>
					<Card className='cart__right--card'>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>
									subtotal (
									{cartItems.reduce((acc, item) => acc + item.quantity, 0)})
									Items
								</h3>
								$
								{cartItems
									.reduce((acc, item) => acc + item.quantity * item.price, 0)
									.toFixed(2)}
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									type='button'
									className='btn-block'
									disabled={cartItems.length === 0}
									onClick={checkOutHandler}>
									Proceed To CheckOut
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default CartScreen;
