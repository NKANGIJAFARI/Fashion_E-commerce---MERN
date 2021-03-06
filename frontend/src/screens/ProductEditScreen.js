import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails, updateProduct } from '../actions/productActions';
import FormContainer from '../components/FormContainer';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

const ProductEditScreen = ({ match, history }) => {
	const productId = match.params.id;

	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState('');
	const [countInStock, setCountInStock] = useState(0);
	const [category, setCategory] = useState('');
	const [brand, setBrand] = useState('');
	const [description, setDescription] = useState('');
	const [uploading, setUploading] = useState(false);
	const [fileSelected, setFileSelected] = useState(false);

	const dispatch = useDispatch();

	//Get user Details.
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	const productUpdate = useSelector((state) => state.productUpdate);
	const {
		loading: loadingOnUpdate,
		error: errorOnUpdate,
		success: successOnUpdate,
	} = productUpdate;

	useEffect(() => {
		if (successOnUpdate) {
			dispatch({ type: PRODUCT_UPDATE_RESET });
			history.push('/admin/productslist');
		} else {
			if (!product || !product.name || product._id !== productId) {
				dispatch(listProductDetails(productId));
			} else {
				setName(product.name);
				setPrice(product.price);
				setCategory(product.category);
				setImage(product.image);
				setCountInStock(product.countInStock);
				setBrand(product.brand);
				setDescription(product.description);
			}
		}
	}, [product, productId, dispatch, history, successOnUpdate]);

	//===========================================================================================
	//Function to upload an image in the form
	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('image', file);
		setUploading(true);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};

			const { data } = await axios.post('/api/upload', formData, config);

			setImage(data);

			setUploading(false);
			setFileSelected(true);
		} catch (error) {
			//check for errors and stop spiiner when on error
		}
	};
	//------------------------------------------------------------------------------------

	//Handle what happens when a admin click to submit the form details to update user
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateProduct({
				_id: productId,
				name,
				price,
				image,
				brand,
				category,
				description,
				countInStock,
			}),
		);
	};
	return (
		<>
			<Link to='/admin/productslist' className='btn btn-light my-3'>
				GO Back
			</Link>

			<FormContainer>
				<h1>Edit Product</h1>
				{loadingOnUpdate && !loading && !loading && <Loader />}
				{errorOnUpdate && <Message variant='danger'>{errorOnUpdate}</Message>}
				{/* {loadingOnUpdate && <Loader />}
				{errorOnUpdate && <Message variant='danger'>{error}</Message>} */}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId='name'>
							<Form.Label>Enter Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Your Name'
								value={name}
								onChange={(e) => setName(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.Group controlId='price'>
							<Form.Label>Price</Form.Label>
							<Form.Control
								type='number'
								placeholder='Enter price'
								value={price}
								onChange={(e) => setPrice(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.Group controlId='image'>
							<Form.Label>Image</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter image Url'
								value={image}
								onChange={(e) => setImage(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.File
							id='image-file'
							label={
								fileSelected ? 'Change selected file' : 'Choose a display file'
							}
							custom
							onChange={uploadFileHandler}></Form.File>
						{uploading && <Loader size='small' />}
						<Form.Group controlId='brand'>
							<Form.Label>Brand</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter brand'
								value={brand}
								onChange={(e) => setBrand(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.Group controlId='countInStock'>
							<Form.Label>Count In Stock</Form.Label>
							<Form.Control
								type='number'
								placeholder='Enter countInStock'
								value={countInStock}
								onChange={(e) =>
									setCountInStock(e.target.value)
								}></Form.Control>
						</Form.Group>

						<Form.Group controlId='category'>
							<Form.Label>Category</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter category'
								value={category}
								onChange={(e) => setCategory(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.Group controlId='description'>
							<Form.Label>Description</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Description'
								value={description}
								onChange={(e) => setDescription(e.target.value)}></Form.Control>
						</Form.Group>

						<Button type='submit' variant='primary'>
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
		//Form container is a component, and inside details are the children
	);
};

export default ProductEditScreen;
