import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Carousel from './TrendingCarousel';

const ControlledTabs = () => {
	let history = useHistory();

	const [key, setKey] = useState('gents');

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

	const searchProductCategory = (categoryName) => {
		history.push(`/search/${categoryName}`);
	};

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

				<button
					class={`btn-inline`}
					href='/search/${key}'
					type='button'
					onClick={() => searchProductCategory(key)}>
					Discover now <span>&rarr;</span>
				</button>
			</div>
			<div className='gentle__tabs--wrapper'>
				<Tabs id='controlled-tab' activeKey={key} onSelect={(k) => setKey(k)}>
					<Tab eventKey='gents' title='Gents Wear'>
						<Carousel items={items} active={0} />
					</Tab>

					<Tab eventKey='ladies' title='Ladies Wear'>
						<Carousel items={items} active={0} />
					</Tab>
					<Tab eventKey='kids' title='Kids Wear'>
						<Carousel items={items} active={0} />
					</Tab>
					<Tab eventKey='sports' title='Sports Wear'>
						<Carousel items={items} active={0} />
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};

export default ControlledTabs;
