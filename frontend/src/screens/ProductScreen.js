import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';

import {
	listProductDetails,
	createProductReview,
} from '../actions/productActions';

import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';
import ProductDetails from '../components/ProductPageComponents/ProductDetails';
import ProductCard from '../components/Home components/ProductCard';
import SectionHeading from '../components/Home components/SectionHeading';

const ProductScreen = ({ match, history }) => {
	///===========================================================================
	//Use this products data at the moment but after designing the frontend,
	//Develop an api to take this data from the api according to what products
	//Admin wants to show on the page as featured
	const relatedProducts = [
		{
			_id: 1,
			name: 'Women suit',
			image: '/images/cloth1.png',
			description:
				'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
			brand: 'Vesia',
			category: 'women',
			price: 89.99,
			countInStock: 10,
			rating: 4.5,
			numReviews: 12,
		},
		{
			_id: 2,
			name: 'Floral dress',
			image: '/images/cloth2.png',
			description:
				'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
			brand: 'Florsh',
			category: 'women',
			price: 89.99,
			countInStock: 0,
			rating: 4.0,
			numReviews: 8,
		},

		{
			_id: 3,
			name: 'Women sitian',
			image: '/images/cloth3.png',
			description:
				'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
			brand: 'Derio',
			category: 'women',
			price: 120.99,
			countInStock: 4,
			rating: 3,
			numReviews: 12,
		},
		{
			_id: 4,
			name: 'Women suit',
			image: '/images/cloth1.png',
			description:
				'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
			brand: 'Vesia',
			category: 'women',
			price: 89.99,
			countInStock: 10,
			rating: 4.5,
			numReviews: 12,
		},
	];

	//----------------------------------------------------------------------------------

	// Use a component state to handle the number of product in the stock
	const [quantity, setQuantity] = useState(1);

	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');

	// -------------------------------------

	const dispatch = useDispatch();

	//========================================================================================
	//From State ... redux

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const productDetails = useSelector((state) => state.productDetails);
	const { product, error, loading } = productDetails;

	const productCreateReview = useSelector((state) => state.productCreateReview);
	const {
		success: successOnReviewCreate,
		error: errorOnReviewCreate,
	} = productCreateReview;

	useEffect(() => {
		if (successOnReviewCreate) {
			alert('Review submited');
			setRating(0);
			setComment('');
			dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
		}

		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match.params.id, successOnReviewCreate]);

	//Add to cart handler will manager the ad to cart button
	//Whenever the addToCart is clicked, it gets the match.params.id on
	//the products screen, then forward to cart page

	//=================================================================================
	//Function to add to cart
	const addToCartHandler = (countInStock) => {
		const existItem = cartItems.find(
			(item) => item.product === match.params.id,
		);

		if (existItem) {
			const qty = Number(quantity) + Number(existItem.quantity);

			if (qty > countInStock) {
				if (
					window.confirm(
						`You have ${
							existItem.quantity
						} in your cart, stock left with ${countInStock}, cant get ${qty}. Add ${
							countInStock - existItem.quantity
						} ? `,
					)
				) {
					history.push(`/cart/${match.params.id}?quantity=${countInStock}`);
				}
			} else {
				if (
					window.confirm(
						`Exists ${existItem.quantity} times in your cart, Make it ${qty} `,
					)
				) {
					history.push(`/cart/${match.params.id}?quantity=${qty}`);
				}
			}
		} else {
			history.push(`/cart/${match.params.id}?quantity=${quantity}`);
		}
		//history.push(`/cart/${match.params.id}?quantity=${quantity}`);
	};
	//----------------------------------------------------------------------------

	//=================================================================================
	//Function to add to cart
	const reviewSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(createProductReview(match.params.id, { rating, comment }));
	};
	//----------------------------------------------------------------------------

	return (
		<div className='productDetails'>
			<Link to='/' className='btn btn-light my-3'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'> {error} </Message>
			) : (
				<>
					<Meta title={product.name} />
					<Row className='productDetails__row'>
						<Col md={6} sm={8}>
							<ProductDetails imgSrc={product.image} />
						</Col>
						<Col md={3} sm={4}>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<h3>{product.name}</h3>
								</ListGroup.Item>
								<ListGroup.Item>
									<Rating
										value={product.rating}
										text={`${product.numReviews} reviews`}></Rating>
								</ListGroup.Item>
								<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
								<ListGroup.Item style={{ display: 'flex' }}>
									<>Colors:</>
									<Form>
										<div className='form__group u-margin-bottom-medium'>
											<div className='form__radio-group'>
												<input
													type='radio'
													className='form__radio-input'
													style={{ background: 'red' }}
													id='small'
													name='size'
												/>
												<label htmlFor='small' className='form__radio-label'>
													<span className='form__radio-button' />
												</label>
											</div>
											<div className='form__radio-group'>
												<input
													type='radio'
													className='form__radio-input'
													id='large'
													name='size'
												/>
												<label htmlFor='large' className='form__radio-label'>
													<span className='form__radio-button' />
												</label>
											</div>
										</div>
									</Form>
								</ListGroup.Item>
								<ListGroup.Item>
									Description: ${product.description}{' '}
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={3} sm={12} className='productDetails__cartCard'>
							<Card>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<Row>
											<Col>Price:</Col>
											<Col>
												<strong>{product.price}</strong>
											</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Status:</Col>
											<Col>
												{product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
											</Col>
										</Row>
									</ListGroup.Item>

									{
										//Check if the product is in stock to show its quantity slector
										product.countInStock > 0 && (
											<ListGroup.Item>
												<Row>
													<Col>Quantity: </Col>
													<Col>
														<Form.Control
															as='select'
															value={quantity}
															onChange={(e) => setQuantity(e.target.value)}>
															{
																//Get the number of pro
																[...Array(product.countInStock).keys()].map(
																	(x) => (
																		<option key={x + 1} value={x + 1}>
																			{' '}
																			{x + 1}{' '}
																		</option>
																	),
																)
															}
														</Form.Control>
													</Col>
												</Row>
												{/* <Row>
													<Col>Sizes: </Col>
													<Col>
														<Form.Control
															as='select'
															value={quantity}
															onChange={(e) => setQuantity(e.target.value)}>
															{
																//Get the number of products in stock
																[...Array(product.countInStock).keys()].map(
																	(x) => (
																		<option key={x + 1} value={x + 1}>
																			{x + 1}
																		</option>
																	),
																)
															}
														</Form.Control>
													</Col>
												</Row> */}
											</ListGroup.Item>
										)
									}
									<ListGroup.Item>
										<Button
											onClick={() => {
												addToCartHandler(product.countInStock);
											}}
											className='btn-block'
											type='button'
											disabled={product.countInStock === 0}>
											{product.countInStock === 0
												? 'Out ofStock'
												: 'Add to Cart'}
										</Button>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={8}>
							<h2>PRODUCT REVIEWS</h2>

							{product.reviews.length === 0 && (
								<Message>No Reviews yet</Message>
							)}
							<ListGroup variant='flush'>
								{product.reviews.map((review) => (
									<ListGroup.Item key={review._id}>
										<strong>{review.name}</strong>
										<Rating
											value={review.rating}
											text={` ${review.rating}/${review.numReviews}rev`}
										/>
										<p>{review.createdAt.substring(0, 10)}</p>
										<p>{review.comment}</p>
									</ListGroup.Item>
								))}

								<ListGroup.Item>
									<h4 style={{ marginBottom: '20px' }}>Leave a Review</h4>

									{errorOnReviewCreate && (
										<Message variant='danger'>{errorOnReviewCreate}</Message>
									)}
									{userInfo ? (
										<Form onSubmit={reviewSubmitHandler}>
											<Form.Group>
												<Form.Label>Rating </Form.Label>
												<Form.Control
													style={{
														display: 'inline-block',
														marginLeft: '10px',
													}}
													as='select'
													value={rating}
													onChange={(e) => setRating(e.target.value)}>
													<option value=''>Select...</option>
													<option value='1'>1 --Poor</option>
													<option value='2'>2 --Fair</option>
													<option value='3'>3 --Good</option>
													<option value='4'>4 --Very Good</option>
													<option value='5'>5 --Excellent</option>
												</Form.Control>
											</Form.Group>
											<Form.Group controlId='comment'>
												<Form.Label>Comment</Form.Label>
												<Form.Control
													as='textarea'
													row='5'
													value={comment}
													onChange={(e) =>
														setComment(e.target.value)
													}></Form.Control>
											</Form.Group>
											<Button type='submit' variant='primary'>
												Submit
											</Button>
										</Form>
									) : (
										<Message>
											Please <Link to='/login'>Sign In</Link> to write a review
										</Message>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
					<Row style={{ flexDirection: 'column' }}>
						<SectionHeading desc='Related products' />
						<Col md={12} className='productDetails__relatedProducts'>
							{relatedProducts.map((product) => (
								<div key={product._id}>
									<ProductCard product={product} />
								</div>
							))}
						</Col>
					</Row>
				</>
			)}
		</div>
	);
};

export default ProductScreen;
