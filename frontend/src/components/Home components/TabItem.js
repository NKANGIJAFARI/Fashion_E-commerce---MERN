import React from 'react';
import Carousel from './TrendingCarousel';

const TabItem = ({
	imgSrc1,
	imgSrc2,
	imgSrc3,
	imgSrc4,
	desc1,
	desc2,
	desc3,
	desc4,
}) => {
	return (
		<div className='gentle__items--wrapper'>
			<div className='gentle__item gentle__item--1'>
				<h4 className={desc1}>{desc1}</h4>
				<img src={imgSrc1} alt={desc1} />
				<button className='gentle__item--btn'>Add to Cart</button>
			</div>
			<div className='gentle__item gentle__item--2'>
				<h4 className={desc2}>{desc2}</h4>
				<img src={imgSrc2} alt={desc2} />
				<button className='gentle__item--btn'>Add to Cart</button>
			</div>
			<div className='gentle__item gentle__item--3'>
				<h4 className={desc3}>{desc3}</h4>
				<img src={imgSrc3} alt={desc3} />
				<button className='gentle__item--btn'>Add to Cart</button>
			</div>
			<div className='gentle__item gentle__item--4'>
				<h4 className={desc4}>{desc4}</h4>
				<img src={imgSrc4} alt={desc4} />
				<button className='gentle__item--btn'>Add to Cart</button>
			</div>
		</div>
	);
};

export default TabItem;
