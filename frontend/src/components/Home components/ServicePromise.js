import React from 'react';

const ServicePromise = () => {
	return (
		<section className='section section__servicePromise '>
			<div className='servicePromise'>
				<div className='servicePromise__ri'>
					<div className='servicePromise__item servicePromise__item-1'>
						<img src='./images/service-delivery.png' alt='free shipping' />
						<p className='servicePromise__item-desc'>
							Free shipping on Orders over $100
						</p>
					</div>
					<div className='servicePromise__item servicePromise__item-2'>
						<img src='/images/service-support.png' alt='24/7 support' />
						<p className='servicePromise__item-desc'>24/7 Support guaranteed</p>
					</div>
				</div>

				<div className='servicePromise__left'>
					<div className='servicePromise__item servicePromise__item-3'>
						<img
							src='/images/service-moneyback.png'
							alt='Money back gurrantee'
						/>
						<p className='servicePromise__item-desc'>Money Back guarrantee</p>
					</div>
					<div className='servicePromise__item servicePromise__item-4'>
						<img
							src='/images/service-discounts.png'
							alt='Discount on membership'
						/>
						<p className='servicePromise__item-desc'>Membership discounts</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicePromise;
