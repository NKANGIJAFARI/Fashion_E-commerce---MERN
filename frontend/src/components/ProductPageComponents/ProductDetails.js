import React from 'react';

const productdetails = () => {
	return (
		<div className='small-container single-product'>
			<div className='row'>
				<div className='col-2'>
					<img src='/images/gal1.png' alt='' width='100%' id='ProductImg' />
					<div className='small-img-row'>
						<div className='small-img-col'>
							<img
								src='/images/gal1.png'
								alt=''
								width='100%'
								className='small-img'
							/>
						</div>
						<div className='small-img-col'>
							<img
								src='/images/gal2.png'
								alt=''
								width='100%'
								className='small-img'
							/>
						</div>
						<div className='small-img-col'>
							<img
								src='/images/gal3.png'
								alt=''
								width='100%'
								className='small-img'
							/>
						</div>
						<div className='small-img-col'>
							<img
								src='/images/gal4.png'
								alt=''
								width='100%'
								className='small-img'
							/>
						</div>
					</div>
				</div>
				<div className='col-2'>
					<p>Home / SweatShirt</p>
					<h1>Cavaliers SweatShirt by Nike</h1>
					<h4>Rs.3695</h4>
					<select>
						<option>Select Size</option>
						<option>XXL</option>
						<option>XL</option>
						<option>L</option>
						<option>M</option>
						<option>S</option>
					</select>
					<input type='number' defaultValue={1} />
					<a href className='btn'>
						Add to Cart
					</a>
					<h3>
						Product Details <i className='fa fa-indent' />
					</h3>
					<br />
					<p>
						Cleveland Cavaliers Nike Spotlight Men's NBA Hoodie PLAY WITH PRIDE.
						Cleveland Cavaliers Nike Spotlight Men's NBA Hoodie keeps you
						feeling comfortable and agile on the practice court. Inspired by the
						authentic, on-court NBA warm-up, this pullover is made from durable
						knit fabric that's powered by sweat-wicking Dri-FIT technology.
					</p>
				</div>
			</div>
		</div>
	);
};

export default productdetails;
