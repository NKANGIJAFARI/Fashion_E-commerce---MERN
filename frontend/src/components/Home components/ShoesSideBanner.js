import React from 'react';

const ShoesSideBanner = () => {
	return (
		<section className='section section__shoesBanner'>
			<div className='shoeBanner'>
				<ShoesSideBannerItem
					imageSrc='/images/shoe2.png'
					desc="Men's Shoes"
					type='men'
				/>
				<ShoesSideBannerItem
					imageSrc='/images/shoeBanner-woman2.png'
					desc="Women's Shoes"
					type='women'
				/>
			</div>
		</section>
	);
};

const ShoesSideBannerItem = ({ imageSrc, desc, type }) => {
	return (
		<div className={`shoeBanner__item shoeBanner__item--${type}`}>
			<img src={imageSrc} alt={desc} />
			<p className='shoeBanner__item--desc'>Upto 25% Off On First Purchase</p>
			<button class='btn-inline shoeBanner__item--btn'>
				Discover now <span>&rarr;</span>
			</button>
		</div>
	);
};

export default ShoesSideBanner;
