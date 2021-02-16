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
	// var items = [
	// 	<TabItem
	// 		desc1='Panties'
	// 		imgSrc1='/images/manpant.png'
	// 		desc2='Panties'
	// 		imgSrc2='/images/manjacket.png'
	// 		desc3='Panties'
	// 		imgSrc3='/images/fet-man-trouser.png'
	// 		desc4='Panties'
	// 		imgSrc4='/images/fet-man-shirt.png'
	// 	/>,
	// 	<TabItem
	// 		desc1='Panties'
	// 		imgSrc1='/images/fet-lady-knicker.png'
	// 		desc2='Jackets'
	// 		imgSrc2='/images/jacket.png'
	// 		desc3='Trousers'
	// 		imgSrc3='/'
	// 		desc4='Panties'
	// 		imgSrc4='/'
	// 	/>,
	// 	<TabItem
	// 		desc1='Panties'
	// 		imgSrc1='/images/fet-kid1.png'
	// 		desc2='Panties'
	// 		imgSrc2='/'
	// 		desc3='Panties'
	// 		imgSrc3='/'
	// 		desc4='Panties'
	// 		imgSrc4='/'
	// 	/>,

	// 	<TabItem
	// 		desc1='Panties'
	// 		imgSrc1='/'
	// 		desc2='Panties'
	// 		imgSrc2='/'
	// 		desc3='Panties'
	// 		imgSrc3='/'
	// 		desc4='Panties'
	// 		imgSrc4='/'
	// 	/>,
	// ];

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
