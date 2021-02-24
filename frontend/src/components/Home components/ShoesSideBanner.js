import React from 'react';

const ShoesSideBanner = () => {
	return (
		<section className='section section__shoesBanner'>
			<div className='shoeBanner'>
				<ShoesSideBannerItem
					imageSrc='/images/shoeBanner-man.png'
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
			<div
				className={`shoeBanner__item--imgWrapper shoeBanner__item--imgWrapper-${type}`}>
				<img src={imageSrc} alt={desc} />
			</div>
			<div
				className={`shoeBanner__item--details shoeBanner__item--details-${type}`}>
				<h2>{type.toUpperCase()} Shoes</h2>
				<p className='shoeBanner__item--desc'>Upto 25% Off On First Purchase</p>
				<button className='btn__primary shoeBanner__item--btn'>
					<i className='fas fa-shopping-cart'></i> Shop now
				</button>
			</div>
		</div>
	);
};

export default ShoesSideBanner;
