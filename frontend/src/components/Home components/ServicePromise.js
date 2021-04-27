import React from 'react';

const ServicePromise = () => {
	return (
		<section className='section section__servicePromise '>
			<div className='servicePromise'>
				<div className='servicePromise__item servicePromise__item-1'>
					<img src='./images/service-delivery.png' alt='free shipping' />
					<p className='servicePromise__item-desc'>Orders over $100</p>
				</div>
				<div className='servicePromise__item servicePromise__item-2'>
					<img src='/images/service-support.png' alt='24/7 support' />
					<p className='servicePromise__item-desc'>24/7 Support</p>
				</div>

				<div className='servicePromise__item servicePromise__item-3'>
					<img src='/images/service-moneyback.png' alt='Money back gurrantee' />
					<p className='servicePromise__item-desc'>Money Back guarrantee</p>
				</div>
			</div>
		</section>
	);
};

export default ServicePromise;
