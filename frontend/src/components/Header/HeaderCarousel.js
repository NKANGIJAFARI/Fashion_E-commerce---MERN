import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FirstDisplay from '../FirstDisplay';

const items = [
	{
		image: '/images/carousel/test.png',
		heading1: 'new trend',
		heading2: "Zelfon'CB",
		styleDescription: 'Zelfron Cowboy style',
		desc: "An exclusive selection of this season's trends.",
		button1: 'DISCOVER',
		button2: 'ORDER NOW',
		background:
			'linear-gradient(39deg, rgb(209,197,182) 17%, rgb(217, 197, 188) 98%, rgb(98,8,35) 100%)',
	},
	{
		image: '/images/carousel/test4.png',
		heading1: 'new Arrivals',
		heading2: "PRIDERS'21",
		desc: "An exclusive selection of this season's trends.",
		button1: 'DISCOVER',
		button2: 'SHOP NOW',
		styleDescription: 'Priders, build pride',
		background:
			'linear-gradient(39deg, rgb(202, 213, 219) 17%, rgb(163,184,197) 98%, rgb(22,51,78) 100%)',
	},
	{
		image: '/images/carousel/test3.png',
		heading1: 'Kids trend',
		heading2: "ELIATION'6",
		styleDescription: 'Stylish Kids 2021',
		desc: "An exclusive selection of this season's trends.",
		button1: 'DISCOVER',
		button2: 'SHOP NOW',
		background:
			'linear-gradient(39deg, rgba(202,213,219,1) 17%, rgba(217,197,188,1) 98%, rgba(120,92,62,1) 100%)',
	},
	{
		image: '/images/carousel/test5.png',
		heading1: 'Ladies Pick',
		heading2: 'BIVANESIA',
		desc: "An exclusive selection of this season's trends.",
		styleDescription: 'Ladies All Occasions',
		button1: 'DISCOVER',
		button2: 'SHOP NOW',
		background:
			'linear-gradient(39deg, rgb(225,210,210) 0%, rgb(254, 218, 210) 98%, rgb(227,168,182) 100%)',
	},
];

const HeaderCarousel = () => {
	return (
		<OwlCarousel
			id='headerCarousel'
			className='owl-theme headerCarousel'
			autoplay
			autoplayTimeout={9000000}
			autoplayHoverPause
			loop
			items={1}
			margin={2}
			nav={true}
			navText={['next', 'prev']}
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
			}}>
			{items.map((item, index) => (
				<div className='item headerCarousel__item' key={index}>
					<FirstDisplay
						image={item.image}
						heading1={item.heading1}
						heading2={item.heading2}
						desc={item.desc}
						button1={item.button1}
						button2={item.button2}
						background={item.background}
						styleDescription={item.styleDescription}
					/>
				</div>
			))}
		</OwlCarousel>
	);
};

export default HeaderCarousel;
