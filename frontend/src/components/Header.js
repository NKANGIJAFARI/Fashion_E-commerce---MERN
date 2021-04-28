import React, { useEffect, useState, useRef } from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

import SearchBox from './SearchBox';
import ShopDropdown from './ShopDropdown';

const Header = () => {
	const dispatch = useDispatch();

	const [isActive, setActive] = useState(false);

	const navbar = useRef();

	//Get the user info from the state.
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	//Handle what happpens when the user logouts
	const logoutHandler = () => {
		dispatch(logout());
	};

	useEffect(() => {
		/* Below is  the scoll event on the window which
		 will be used to determine the background of the navbar whenever
		 the user scrolls, the background will be transparent until at some 
		 point its gets a background color"*/

		window.addEventListener('scroll', () => {
			if (navbar) {
				if (window.pageYOffset > 90) {
					navbar.current.classList.add('fix-nav');
				} else if (window.pageYOffset < 90) {
					navbar.current.classList.remove('fix-nav');
				}
			}
		});
	});

	const toggleActive = () => {
		setActive(!isActive);

		//What "isActive" is will change on the click
	};

	return (
		<nav className='navbar' ref={navbar}>
			{isActive && (
				<div className='CoverFixedOnMenuOpen' onClick={toggleActive}></div>
			)}
			<div className={`navigation ${isActive ? 'active' : ''}`}>
				<div
					className={`toggle ${isActive ? 'active' : ''}`}
					onClick={toggleActive}>
					<i className='fas fa-bars'></i>
				</div>
				<Link to='/' className='logo'>
					<h3>ZEN-Styles</h3>
				</Link>

				<div className='nav-btn'>
					<label htmlFor='nav-check'>
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>

				<ul className='menu'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li className='shop__dropdown'>
						<Link to='/shop'>Shop</Link>
						<ShopDropdown />
					</li>
					<li className='dropdown'>
						<Link to='/'>Men</Link>
						{/* <ShopDropdown /> */}
					</li>
					<li className='dropdown'>
						<Link to='/'>Women</Link>
						{/* <ShopDropdown /> */}
					</li>
					<li>
						<Link to='/'>Kids</Link>
					</li>
				</ul>
				<Route render={({ history }) => <SearchBox history={history} />} />
				<div className='right-menu'>
					<Link to='/'>
						<i className='far fa-heart'>
							<span className='num-cart-product'>0</span>
						</i>
					</Link>

					<Link to='/cart'>
						<i className='fas fa-shopping-cart'>
							<span className='num-cart-product'>{cartItems.length}</span>
						</i>
					</Link>

					{userInfo ? (
						<div id='username'>
							<div className='dropdown'>
								<div disabled className='dropbtn'>
									<i className='far fa-user'></i>
									<div className='dropbtn__name'>
										{/* <span>Hello, </span> */}
										<span>{userInfo.name.substr(0, 6)}</span>
									</div>
								</div>
								<div className='dropdown-content'>
									<Link to='/profile' className='dropdown-content-link'>
										My Profile
									</Link>
									{/* Nav will show differently due to admins and non admin */}

									{userInfo && userInfo.isAdmin && (
										<>
											<Link to='/' className='dropdown-content-link'>
												Admin Dashboard
											</Link>

											<Link
												to='/admin/userslist'
												className='dropdown-content-link'>
												All Users
											</Link>
											<Link
												to='/admin/productslist'
												className='dropdown-content-link'>
												All Products
											</Link>
											<Link
												to='/admin/orderslist'
												className='dropdown-content-link'>
												All Orders
											</Link>
										</>
									)}
									<Link
										to='/login'
										className='dropdown-content-link'
										onClick={logoutHandler}>
										Logout
									</Link>
								</div>
							</div>
						</div>
					) : (
						<div className='dropdown'>
							<div disabled className='dropbtn'>
								<i className='far fa-user'></i>
								<div className='dropbtn__name'>
									{/* <span>Hello, </span> */}
									<span>Guest</span>
								</div>
							</div>
							<div className='dropdown-content'>
								<Link to='/login' className='dropdown-content-link'>
									Sign In
								</Link>
								<Link to='/register' className='dropdown-content-link'>
									Create Account
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>

		// <div className='adverts'>
		// 	<span>30% off your first purchase</span>
		// </div>
	);
};

export default Header;
