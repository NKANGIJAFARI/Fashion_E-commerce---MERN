import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Container fluid>
			<footer className='footer'>
				<div className='footer__content'>
					<div className='container'>
						<div className='footer__content-row'>
							<div className='footer__col'>
								<div className='footer__logo'>
									<Link to='/'>
										<picture>
											<source srcSet='img/logo.svg' type='image/webp' />
											<img src='img/logo.svg' alt='logo' />
										</picture>
									</Link>
								</div>
								<p className='footer__text'>
									Wherever you are, we serve your <br /> imaginative fashion in
									style.
									<br />
									Let us take your online shop <br />
									to new dimension in success!
								</p>
								<div className='footer__location'>
									<picture>
										<i class='fas fa-map-marked-alt'></i>
									</picture>
									<p>Dubai, UAE</p>
								</div>
								<p className='footer__email'>
									<a href='mailto:kawsarahmed0210@gmail.com'>
										nkangijafari@gmail.com
									</a>
								</p>
								<p className='footer__phone'>
									<Link href='+9715236199890'>+971523619890</Link>
								</p>
								<div className='footer__socials'>
									<Link href='/' className='footer__socials-item'>
										<picture>
											{/* <source
												srcSet='/images/social-facebook.png'
												type='image/webp'
											/> */}
											<img src='/images/facebook.svg' alt='facebook' />
										</picture>
									</Link>
									<a href='#' className='footer__socials-item'>
										<picture>
											{/* <source srcSet='/images/facebook.svg' type='image/webp' /> */}
											<img src='/images/social-insta.png' alt='instagram' />
										</picture>
									</a>
									<a href='#' className='footer__socials-item'>
										<picture>
											{/* <source srcSet='/images/twitter.svg' type='image/webp' /> */}
											<img src='/images/social-twitter.png' alt='twitter' />
										</picture>
									</a>
									<a href='#' className='footer__socials-item'>
										<picture>
											{/* <source srcSet='/images/linkedin.svg' type='image/webp' /> */}
											<img src='/images/social-linkedin.png' alt='linkedin' />
										</picture>
									</a>
								</div>
							</div>
							<div className='footer__col'>
								<h1 className='footer__title'>RECIVE EMAIL UPDATES</h1>
								<form action='post' className='footer__form'>
									<input
										type='text'
										className='footer__input'
										placeholder='Your Email Address'
									/>
									<button className='footer__button'>JOIN</button>
								</form>
								<div className='footer__nav'>
									<div className='footer__nav-col'>
										<h3 className='footer__nav-title'>shop</h3>
										<a href='#' className='footer__nav-link'>
											Shop
										</a>
										<a href='#' className='footer__nav-link'>
											Collection
										</a>
										<a href='#' className='footer__nav-link'>
											Outlet
										</a>
										<a href='#' className='footer__nav-link'>
											Lookbook
										</a>
									</div>
									<div className='footer__nav-col'>
										<h3 className='footer__nav-title'>help</h3>
										<a href='#' className='footer__nav-link'>
											FAQ
										</a>
										<a href='#' className='footer__nav-link'>
											Privacy Policy
										</a>
										<a href='#' className='footer__nav-link'>
											Terms and Conditions
										</a>
										<a href='#' className='footer__nav-link'>
											Return and Exchanges
										</a>
									</div>
									<div className='footer__nav-col'>
										<h3 className='footer__nav-title'>About Us</h3>
										<a href='#' className='footer__nav-link'>
											Journal
										</a>
										<a href='#' className='footer__nav-link'>
											Our Story
										</a>
										<a href='#' className='footer__nav-link'>
											Contact
										</a>
										<a href='#' className='footer__nav-link'>
											Store Location
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='footer__copy'>
					<div className='container'>
						<p className='footer__copy-text'>
							Copyright © 2020 . J-Fashions. All rights reserved
						</p>
					</div>
				</div>
			</footer>
		</Container>
	);
};

export default Footer;
