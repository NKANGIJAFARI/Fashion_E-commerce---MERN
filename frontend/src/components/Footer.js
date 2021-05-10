import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__content'>
				<div className='container'>
					<div className='footer__content-row'>
						<div className='footer__subscribe'>
							<h1 className='footer__subscribe--title'>RECIVE EMAIL UPDATES</h1>
							<form action='post' className='footer__subscribe--form'>
								<input
									type='text'
									className='footer__subscribe--form-input'
									placeholder='Your Email Address'
								/>
								<button className='footer__subscribe--form-button'>JOIN</button>
							</form>
						</div>

						<div className='footer__col footer__desc'>
							<div className='footer__desc--logo'>
								<Link to='/'>
									{/* <picture>
											<source srcSet='img/logo.svg' type='image/webp' />
											<img src='img/logo.svg' alt='logo' />
										</picture> */}
									<h3>Zen-Styles</h3>
								</Link>
							</div>

							<p className='footer__desc--text'>
								Wherever you are, we serve your <br /> imaginative fashion in
								style.
								<br />
								Let us take your online shop <br />
								to new dimension in success!
							</p>

							<div className='footer__desc--contacts'>
								<SocialIcons />
								<Contacts />
							</div>
						</div>

						<div className='footer__col'>
							<div className='footer__nav'>
								<div className='footer__nav-col'>
									<h3 className='footer__nav-title'>shop</h3>
									<Link to='/' className='footer__nav-link'>
										Shop
									</Link>
									<Link to='/' className='footer__nav-link'>
										Collection
									</Link>
									<Link to='/' className='footer__nav-link'>
										Outlet
									</Link>
									<Link to='/' className='footer__nav-link'>
										Lookbook
									</Link>
								</div>
								<div className='footer__nav-col'>
									<h3 className='footer__nav-title'>help</h3>
									<Link to='/' className='footer__nav-link'>
										FAQ
									</Link>
									<Link to='/' className='footer__nav-link'>
										Privacy Policy
									</Link>
									<Link to='/' className='footer__nav-link'>
										Terms and Conditions
									</Link>
									<Link to='/' className='footer__nav-link'>
										Return and Exchanges
									</Link>
								</div>
								<div className='footer__nav-col'>
									<h3 className='footer__nav-title'>About Us</h3>
									<Link to='/' className='footer__nav-link'>
										Journal
									</Link>
									<Link to='/' className='footer__nav-link'>
										Our Story
									</Link>
									<Link to='/' className='footer__nav-link'>
										Contact
									</Link>
									<Link to='/' className='footer__nav-link'>
										Store Location
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='footer__copy'>
				<div className='container'>
					<p className='footer__copy-text'>
						Copyright © 2020 . ZEN-Styles. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

const SocialIcons = () => {
	return (
		<div className='footer__socials'>
			<Link to='/' className='footer__socials-item'>
				<picture>
					<img src='/images/facebook.svg' alt='facebook' />
				</picture>
			</Link>
			<Link to='/' className='footer__socials-item'>
				<picture>
					<img src='/images/social-insta.png' alt='instagram' />
				</picture>
			</Link>
			<Link to='/' className='footer__socials-item'>
				<picture>
					<img src='/images/social-twitter.png' alt='twitter' />
				</picture>
			</Link>
			<Link to='/' className='footer__socials-item'>
				<picture>
					<img src='/images/social-linkedin.png' alt='linkedin' />
				</picture>
			</Link>
		</div>
	);
};

const Contacts = () => {
	return (
		<div className='footer__contacts'>
			<div>
				<i className='fas fa-map-marked-alt'></i>
				<span>Dubai, UAE</span>
			</div>
			<div>
				<i className='fas fa-map-marked-alt'></i>
				<a href='mailto:nkangijafari@gmail.com'>nkangijafari@gmail.com</a>
			</div>
			<div>
				<i className='fas fa-map-marked-alt'></i>
				<a href='+9715236199890'>+971523619890</a>
			</div>
		</div>
	);
};

export default Footer;
