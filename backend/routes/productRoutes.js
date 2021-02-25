import express from 'express';
const router = express.Router();
import { protect, isAdmin } from '../middleware/authMiddleware.js';

import {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
	getTopProducts,
	getFeaturedProducts,
	getLatestProducts,
} from '../controllers/productController.js';

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

router.route('/top').get(getTopProducts);
router.route('/featured').get(getFeaturedProducts);
router.route('/latest').get(getLatestProducts);

router.route('/:id/reviews').post(protect, createProductReview);

router
	.route('/:id')
	.get(getProductById)
	.delete(protect, isAdmin, deleteProduct)
	.put(protect, isAdmin, updateProduct);

export default router;
