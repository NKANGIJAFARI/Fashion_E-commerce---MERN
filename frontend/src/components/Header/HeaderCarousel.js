import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FirstDisplay from '../FirstDisplay';

const items = [
	{
		image: '/images/carousel/caro1.png',
		heading1: 'new trend',
		heading2: 'collusion',
		desc: "An exclusive selection of this season's trends.",
		button1: 'DISCOVER',
		button2: 'SHOP NOW',
	},
	{
		image: '/images/carousel/caro2.png',
		heading1: 'new trend',
		heading2: 'collusion',
		desc: "An exclusive selection of this season's trends.",
		button1: 'DISCOVER',
		button2: 'SHOP NOW',
	},
	{
		image: '/images/carousel/caro3.png',
		heading1: 'new trend',
		heading2: 'collusion',
		desc: "An exclusive selection of this season's trends.",
		button1: 'DISCOVER',
		button2: 'SHOP NOW',
	},
	{
		image: '/images/carousel/caro4.png',
		heading1: 'new trend',
		heading2: 'collusion',
		desc: "An exclusive selection of this season's trends.",
		button1: 'DISCOVER',
		button2: 'SHOP NOW',
	},
	{
		image: '/images/carousel/caro5.png',
		heading1: 'new trend',
		heading2: 'collusion',
		desc: "An exclusive selection of this season's trends.",
		button1: 'DISCOVER',
		button2: 'SHOP NOW',
	},
	{
		image: '/images/carousel/caro6.png',
		heading1: 'new trend',
		heading2: 'collusion',
		desc: "An exclusive selection of this season's trends.",
		button1: 'DISCOVER',
		button2: 'SHOP NOW',
	},
	{
		image: '/images/carousel/caro7.png',
		heading1: 'new trend',
		heading2: 'collusion',
		desc: "An exclusive selection of this season's trends.",
		button1: 'DISCOVER',
		button2: 'SHOP NOW',
	},
];

const HeaderCarousel = () => {
	return (
		<OwlCarousel
			id='headerCarousel'
			className='owl-theme headerCarousel'
			autoplay
			autoplayTimeout={5000}
			autoplayHoverPause
			loop
			items={1}
			margin={2}
			responsive={{
				0: {
					items: 1,
				},

				600: {
					items: 1,
				},
				700: {
					items: 1,
				},

				1000: {
					items: 1,
				},
			}}
			nav>
			{items.map((item, index) => (
				<div className='item headerCarousel__item' key={index}>
					<FirstDisplay
						image={item.image}
						heading1={item.heading1}
						heading2={item.heading2}
						desc={item.desc}
						button1={item.button1}
						button2={item.button2}
					/>
				</div>
			))}
		</OwlCarousel>
	);
};

export default HeaderCarousel;
