import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//Protect middleware will help verify that the user is logged In ========
const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			//After decoding the token, we then search the user using the id got
			//in the decoded.
			//We use (-password) to avoid returning the password also

			req.user = await User.findById(decoded.id).select('-password');

			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error('Not authorized, token failed');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token');
	}
});
//-----------------------------------------------------------------------

// =========================================================================
// Check that the user is admin

const isAdmin = (req, res, next) => {
	if ((req.user, req.user.isAdmin)) {
		next();
	} else {
		res.status(401);
		throw new Error('Not authorized, only admins have access');
	}
};
export { protect, isAdmin };
