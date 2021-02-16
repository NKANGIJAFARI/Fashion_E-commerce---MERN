import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabItem from './TabItem';

function ControlledTabs() {
	const [key, setKey] = useState('gents');
	const [imgSrc, setImgSrc] = useState('/images/gentlesuit.png');

	console.log(key);

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
			</div>
			<div className='gentle__tabs--wrapper'>
				<Tabs
					id='controlled-tab-example'
					activeKey={key}
					onSelect={(k) => setKey(k)}>
					<Tab eventKey='gents' title='Gents Wear'>
						<TabItem
							desc1='Panties'
							imgSrc1='/images/manpant.png'
							desc2='Panties'
							imgSrc2='/images/manjacket.png'
							desc3='Panties'
							imgSrc3='/images/fet-man-trouser.png'
							desc4='Panties'
							imgSrc4='/images/fet-man-shirt.png'
						/>
					</Tab>
					<Tab eventKey='ladies' title='Ladies Wear'>
						<TabItem
							desc1='Panties'
							imgSrc1='/images/fet-lady-knicker.png'
							desc2='Jackets'
							imgSrc2='/images/jacket.png'
							desc3='Trousers'
							imgSrc3='/'
							desc4='Panties'
							imgSrc4='/'
						/>
					</Tab>
					<Tab eventKey='kids' title='Kids Wear'>
						<TabItem
							desc1='Panties'
							imgSrc1='/images/fet-kid1.png'
							desc2='Panties'
							imgSrc2='/'
							desc3='Panties'
							imgSrc3='/'
							desc4='Panties'
							imgSrc4='/'
						/>
					</Tab>
					<Tab eventKey='sports' title='Sports Wear'>
						<TabItem
							desc1='Panties'
							imgSrc1='/'
							desc2='Panties'
							imgSrc2='/'
							desc3='Panties'
							imgSrc3='/'
							desc4='Panties'
							imgSrc4='/'
						/>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
}

export default ControlledTabs;
