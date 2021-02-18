import React, { useEffect, useRef, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';

import SearchBox from './SearchBox';

const Header = () => {
	const dispatch = useDispatch();

	//Get the user info from the state.
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	//Handle what happpens when the user logouts

	const logoutHandler = () => {
		dispatch(logout());
	};

	useEffect(() => {});

	// document.querySelector(document).ready(function () {
	// 	document.querySelector('.toggle').click(function () {
	// 		document.querySelector('.toggle').classList.toggle('active');
	// 		document.querySelector('.navigation').classList.toggle('active');
	// 	});
	// });

	const [isActive, setActive] = useState(false);

	const toggleActive = () => {
		setActive(!isActive);

		console.log(isActive);
	};

	return (
		<header>
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
			<nav className='navbar'>
				<div className={`navigation ${isActive ? 'active' : ''}`}>
					<Link to='/' className='logo'>
						<img src='images/logo.png' />
					</Link>

					<div
						className={`toggle ${isActive ? 'active' : ''}`}
						onClick={toggleActive}></div>

					<ul className='menu'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li className='shop'>
							<Link to='/'>Shop</Link>
						</li>
						<li>
							<Link to='/'>Men</Link>

							{/* <span className='sale-lable'>Sale</span> */}
						</li>
						<li>
							<Link to='/'>Women</Link>
						</li>
						<li>
							<Link to='/'>Kids</Link>
						</li>
					</ul>

					<div className='right-menu'>
						<Link href='javascript:void(0);' className='search'>
							<i className='fas fa-search'></i>
						</Link>
						<Link href='javascript:void(0);' className='user'>
							<i className='far fa-user'></i>
						</Link>
						<Link to='/'>
							<i className='fas fa-shopping-cart'>
								<span className='num-cart-product'>0</span>
							</i>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
