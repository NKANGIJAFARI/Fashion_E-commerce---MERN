import asyncHandler from 'express-async-handler';
// import { MongooseDocument } from 'mongoose';
import products from '../data/products.js';
import Order from '../models/orderModel.js';

import Product from '../models/productModel.js';

// @desc    Fetch all products
//@Route    Get /api/products
//@access   Public
const getProducts = asyncHandler(async (req, res) => {
	const pageSize = 12;
	const page = Number(req.query.pageNumber) || 1;
	let sizes = req.query.sizes;
	const sizeArray = req.query.sizes ? sizes.split('-') : [];

	const arr =
		sizeArray.length !== 0 ? sizeArray.filter((size) => size !== '') : [];

	//MongoDB query Condition
	//size query

	const sizesCondition = arr.length !== 0 ? { sizes: { $all: [...arr] } } : {};

	//Search keyword query
	const keywordCondition = req.query.keyword
		? { name: { $regex: req.query.keyword, $options: 'i' } }
		: {};

	const count = await Product.find({
		$and: [{ ...keywordCondition }, { ...sizesCondition }],
	}).countDocuments();

	const products = await Product.find({
		$and: [{ ...keywordCondition }, { ...sizesCondition }],
	})
		.limit(pageSize)
		.skip(pageSize * (page - 1));

	// small letter
	res.json({ products, page, pages: Math.ceil(count / pageSize) });

	// const count = await Product.countDocuments({ ...size });
	// const count = await Product.find({ ...keyword }).countDocuments();
	// const products = await Product.find({ ...keyword })
	// 	.limit(pageSize)
	// 	.skip(pageSize * (page - 1));
	// res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single products
//@Route     Get /api/products/:id
//@access   Public
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

// @desc    Get Featured Products
//@Route    Get /api/products/featured
//@access   Public
/* Here lets get 10products for each category that has featured true,
Get each category alone and then combine it so the frontend receive a 
combined array which we will filter in the frontend to supply
tham to different coponents due to their filtration" */

const getFeaturedProducts = asyncHandler(async (req, res) => {
	//Featured for women
	const womenProducts = await Product.find({
		$and: [{ featured: true }, { category: 'women' }],
	}).limit(5);

	//Featured for men
	const menProducts = await Product.find({
		$and: [{ featured: true }, { category: 'men' }],
	}).limit(5);

	//Featured for kids
	const kidsProducts = await Product.find({
		$and: [{ featured: true }, { category: 'kids' }],
	}).limit(5);

	const allProducts = [...menProducts, ...womenProducts, kidsProducts];
	res.json(allProducts);
});

// @desc    Get Latest Products
//@Route    Get /api/products/latest
//@access   Public
const getLatestProducts = asyncHandler(async (req, res) => {
	//Featured for women
	const womenProducts = await Product.find({
		$and: [{ featured: true }, { category: 'women' }],
	}).limit(5);

	//Featured for men
	const menProducts = await Product.find({
		$and: [{ featured: true }, { category: 'men' }],
	}).limit(5);

	// //Featured for kids
	// const kidsProducts = await Product.find({
	// 	$and: [{ featured: true }, { category: 'kids' }],
	// }).limit(5);

	const allProducts = [...menProducts, ...womenProducts];
	res.json(allProducts);
});

// @desc    Get Latest Products
//@Route    Get /api/products/latest
//@access   Public
const getShoesProducts = asyncHandler(async (req, res) => {
	/*I got 5 shoes and gave them a category "men women" because am lazy
	to add shoe pictures fro ladies and men at the MongooseDocument, but as you edit 
	this, if this comment exists refer to down comments to get shoes accprding to 
	proper categories */

	const shoeProducts = await Product.find({
		$and: [{ category: 'men women' }, { tags: 'shoe' }],
	}).limit(5);

	res.json(shoeProducts);

	// would have been
	//Featured for women
	/*const womenShoes = await Product.find({
		$and: [{ tags: 'shoe' }, { category: 'women' }],
	}).limit(5);*/

	//Featured for men
	/*const menShoes = await Product.find({
		$and: [{ tags: 'shoe' }, { category: 'men' }],
	}).limit(5);

	const allShoesProducts = [...womenShoes, ...menShoes]; */
});

// @desc    Delete a product
//@Route    DELETE /api/products/:id
//@access   Private and only for admin
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		await product.remove();
		res.json({ message: 'Product has been removed' });
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

// @desc    Create a product
//@Route    POST /api/products
//@access   Private and only for admin
const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: 'Sample Name',
		Price: 0,
		user: req.user._id,
		image: '/images/sample.jpg',
		category: 'Sample Category',
		brand: 'sample brand',
		countInStock: 0,
		numReviews: 0,
		description: 'sample description',
	});

	const createdProduct = await product.save();

	res.status(201).json(createdProduct);
});

// @desc    Update a product
//@Route    PUT /api/products
//@access   Private and only for admin
const updateProduct = asyncHandler(async (req, res) => {
	const {
		name,
		price,
		image,
		category,
		brand,
		countInStock,
		numReviews,
		description,
	} = req.body;

	//Find the product to be edited
	const product = await Product.findById(req.params.id);

	if (product) {
		(product.name = name),
			(product.price = price),
			(product.description = description),
			(product.image = image),
			(product.brand = brand),
			(product.category = category),
			(product.countInStock = countInStock);

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error('Product Not Found');
	}
});

// @desc    Make a review on product
//@Route    POST /api/products/review
//@access   Private

const createProductReview = asyncHandler(async (req, res) => {
	const { rating, comment } = req.body;

	//Find the product to be reviewed
	const product = await Product.findById(req.params.id);

	if (product) {
		/*When there is a review given by the current Logged IN user, then
		he/she will not be allowed to give another review on the same product*/
		const alreadyReviewed = product.reviews.find(
			(r) => r.user.toString() === req.user._id.toString()
		);

		if (alreadyReviewed) {
			res.status(400);
			throw new Error('You already reviewed this product');
		}

		/*when we have a product and user never reviewed it before,
		then we check if the logged in user has ever bought this product,
		if there is this product's id in his/her last orders, 
		then he can give a review */

		const orders = await Order.find({
			'orderItems.product': `${product._id}`,
			user: `${req.user._id}`,
			// isPaid: true,
			// isDelivered: true,
		});

		if (orders.length === 0) {
			res.status(401);
			throw new Error(
				"Sorry, You can't review a product you never received before"
			);
		}

		const review = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id,
		};

		product.reviews.push(review);

		product.numReviews = product.reviews.length;

		product.rating =
			product.reviews.reduce((acc, item) => acc + item.rating, 0) /
			product.reviews.length;
		//We get the average of the reviews

		await product.save();

		res.status(201).json({
			message: `rating ${product.rating}, rev rating ${review.rating}, numRev ${product.reviews}`,
		});
	} else {
		res.status(404);
		throw new Error('Product Not Found');
	}
});

// @desc    Get top rated products
//@Route    GET /api/products/top
//@access   Public
const getTopProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({}).sort({ rating: -1 }).limit(3);

	res.json(products);
});

/* This function below is to disallow users who have never purchased that product make
a review on that same product, it will be fired when the user clicks button 
"Make a review on the frontend" */
const onlyPurchasedCanReview = asyncHandler(async (req, res) => {
	//Find the product to be reviewed
	const product = await Product.findById(req.params.id);

	//Get all the orders of the user
	const orders = await Order.find({ user: req.user._id });

	//check if this user has an order where there is a purchase of that product
	if (orders && product) {
		let index = 0;
		let orderedProductsIds = [];
		while (index < orders.length) {
			orders[index].orderItems.map((orderItem) =>
				orderedProductsIds.push(orderItem.product)
			);
			index += 1;
		}

		if (orderedProductsIds) {
			const everPurchased = orderedProductsIds.find(
				(r) => r.toString() === product._id.toString()
			);
			if (everPurchased) {
				res.status(201).json({ message: 'You can review now' });
			} else {
				throw new Error(
					"Sorry, you can't review a product you never purchased"
				);
			}
		} else {
			throw new Error("Sorry, you can't review a product you never purchased");
		}
	} else {
		res.status(404);
		throw new Error('Found no match');
	}

	// if (product) {
	// 	const alreadyReviewed = product.reviews.find(
	// 		(r) => r.user.toString() === req.user._id.toString()
	// 	);

	// 	if (alreadyReviewed) {
	// 		res.status(400);
	// 		throw new Error('You already reviewed');
	// 	}
	// } else {
	// 	res.status(404);
	// 	throw new Error('Product Not Found');
	// }
});

export {
	getProducts,
	getProductById,
	getFeaturedProducts,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
	getTopProducts,
	getLatestProducts,
	getShoesProducts,
};

//Recover
// // @desc    Get Latest Products
// //@Route    Get /api/products/latest
// //@access   Public
// const getLatestProducts = asyncHandler(async (req, res) => {
// 	//Featured for women
// 	const womenProducts = await Product.find({
// 		$and: [{ featured: true }, { category: 'women' }],
// 	}).limit(5);

// 	//Featured for men
// 	const menProducts = await Product.find({
// 		$and: [{ featured: true }, { category: 'men' }],
// 	}).limit(5);

// 	// //Featured for kids
// 	// const kidsProducts = await Product.find({
// 	// 	$and: [{ featured: true }, { category: 'kids' }],
// 	// }).limit(5);

// 	const allProducts = [...menProducts, ...womenProducts];
// 	res.json(allProducts);
// });
