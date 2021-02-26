import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

import SearchBox from './SearchBox';
import ShopDropdown from './ShopDropdown';

const Header = () => {
	const dispatch = useDispatch();

	//Get the user info from the state.
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	//Handle what happpens when the user logouts

	const logoutHandler = () => {
		dispatch(logout());
	};

	useEffect(() => {});

	const [isActive, setActive] = useState(false);

	const toggleActive = () => {
		setActive(!isActive);

		//What isActive is will change on the click
	};

	return (
		<>
			{/* <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container fluid>
					<LinkContainer to='/'>
						<Navbar.Brand href='/'>ProShop</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Route render={({ history }) => <SearchBox history={history} />} />
						<Nav className='ml-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'></i> Cart
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										LogOut
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user'></i>Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<LinkContainer to='/admin/userslist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/productslist'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderslist'>
										<NavDropdown.Item>All Orders</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar> */}

			<div className='adverts'>
				<span>30% off your first purchase</span>
			</div>
			<nav className='navbar'>
				<div className={`navigation ${isActive ? 'active' : ''}`}>
					<Link to='/' className='logo'>
						{/* <img src='images/logo.png' /> */}
						<h3>J.Fashions</h3>
					</Link>

					<div
						className={`toggle ${isActive ? 'active' : ''}`}
						onClick={toggleActive}>
						<i className='fas fa-bars'></i>
					</div>

					<div className='nav-btn'>
						<label htmlFor='nav-check'>
							<span></span>
							<span></span>
							<span></span>
						</label>
					</div>

					<div className='nav-hide' style={{ display: 'none' }}>
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
						<div className='right-menu'>
							<Link to='/'>
								<i className='far fa-heart'>
									<span className='num-cart-product'>0</span>
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

							{/* <Link to='/profile' className='user'>
							<i className='far fa-user'></i>
						</Link> */}
						</div>
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

						{/* <Link to='/profile' className='user'>
							<i className='far fa-user'></i>
						</Link> */}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
