import React from 'react';

const ServicePromise = () => {
	return (
		<section className='section section__servicePromise '>
			<div className='servicePromise'>
				<div className='servicePromise__item servicePromise__item-1'>
					<img src='./images/service-delivery.png' alt='free shipping' />
					<p className='servicePromise__item-desc'>
						Free Shipping on Orders over $100
					</p>
				</div>
				<div className='servicePromise__item servicePromise__item-2'>
					<img src='/images/service-support.png' alt='24/7 support' />
					<p className='servicePromise__item-desc'>
						24/7 support is always guarranteed
					</p>
				</div>
				<div className='servicePromise__item servicePromise__item-3'>
					<img src='/images/service-moneyback.png' alt='Money back gurrantee' />
					<p className='servicePromise__item-desc'>
						Money Back guarrantee on 90% product
					</p>
				</div>
				<div className='servicePromise__item servicePromise__item-4'>
					<img
						src='/images/service-discounts.png'
						alt='Discount on membership'
					/>
					<p className='servicePromise__item-desc'>
						Membership gives clients discounts
					</p>
				</div>
			</div>
		</section>
	);
};

export default ServicePromise;
