import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import Carousel from './TrendingCarousel';

function ControlledTabs() {
	const [key, setKey] = useState('gents');
	const [imgSrc, setImgSrc] = useState('/images/gentlesuit.png');

	var items = [
		{
			image: '/images/manpant.png',
			desc: 'Panties',
			id: 1,
		},
		{
			image: '/images/manjacket.png',
			desc: 'Jacket',
			id: 2,
		},
		{
			image: '/images/gentlejeans.png',
			desc: 'Panties',
			id: 3,
		},
		{
			image: '/images/manpant.png',
			desc: 'Panties',
			id: 4,
		},
		{
			image: '/images/fet-man-trouser.png',
			desc: 'Panties',
			id: 5,
		},
		{
			image: '/images/fet-man-shirt.png',
			desc: 'Panties',
			id: 6,
		},
		{
			image: '/images/manpant.png',
			desc: 'Panties',
			id: 7,
		},
		{
			image: '/images/manpant.png',
			desc: 'Panties ',
			id: 8,
		},
	];

	return (
		<div className='gentle'>
			<div className='gentle__image--wrapper'>
				<img
					src={
						key === 'gents'
							? '/images/gentlesuit.png'
							: key === 'ladies'
							? '/images/wst-3.jpg'
							: key === 'kids'
							? '/images/boyshirt.png'
							: key === 'sports'
							? '/images/familyexercise.png'
							: null
					}
					alt={`${key} wear`}
				/>

				<button class={`btn-inline `}>
					Discover now <span>&rarr;</span>
				</button>
			</div>
			<div className='gentle__tabs--wrapper'>
				<Tabs
					id='controlled-tab-example'
					activeKey={key}
					onSelect={(k) => setKey(k)}>
					<Tab eventKey='gents' title='Gents Wear'>
						{/* <TabItem
							desc1='Panties'
							imgSrc1='/images/manpant.png'
							desc2='Panties'
							imgSrc2='/images/manjacket.png'
							desc3='Panties'
							imgSrc3='/images/fet-man-trouser.png'
							desc4='Panties'
							imgSrc4='/images/fet-man-shirt.png'
						/> */}
						<Carousel items={items} active={0} />
					</Tab>

					<Tab eventKey='ladies' title='Ladies Wear'>
						{/* <TabItem
							desc1='Panties'
							imgSrc1='/images/fet-lady-knicker.png'
							desc2='Jackets'
							imgSrc2='/images/jacket.png'
							desc3='Trousers'
							imgSrc3='/'
							desc4='Panties'
							imgSrc4='/'
						/> */}
						<Carousel items={items} active={0} />
					</Tab>
					<Tab eventKey='kids' title='Kids Wear'>
						{/* <TabItem
							desc1='Panties'
							imgSrc1='/images/fet-kid1.png'
							desc2='Panties'
							imgSrc2='/'
							desc3='Panties'
							imgSrc3='/'
							desc4='Panties'
							imgSrc4='/'
						/> */}
						<Carousel items={items} active={0} />
					</Tab>
					<Tab eventKey='sports' title='Sports Wear'>
						{/* <TabItem
							desc1='Panties'
							imgSrc1='/'
							desc2='Panties'
							imgSrc2='/'
							desc3='Panties'
							imgSrc3='/'
							desc4='Panties'
							imgSrc4='/'
						/> */}
						<Carousel items={items} active={0} />
					</Tab>
				</Tabs>
			</div>
		</div>
	);
}

export default ControlledTabs;
