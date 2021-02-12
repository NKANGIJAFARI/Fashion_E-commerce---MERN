import React from 'react';
import { Image } from 'react-router-bootstrap';

//Import images
import menStyles from '../../Images/cat-man.jpg';
import girlStyles from '../../Images/cat-girl.jpg';
import womenStyles from '../../Images/cat-womans.jpg';
import boyStyles from '../../Images/cat-boy.jpg';
import babyStyles from '../../Images/cat-baby.jpg';
import perfumes from '../../Images/cat-perfumes.jpg';
import bags from '../../Images/cat-bags.jpg';
import watches from '../../Images/cat-watches.jpg';
import shoe from '../../Images/cat-shoe.jpg';

const Categories = () => {
	return (
		<div className='section section__categories categories'>
			<div className='categories__desc'>
				<div className='categories__desc-line'></div>
				<h2 className='categories__desc-h2'>Shop by categories</h2>
				<div className='categories__desc-line'></div>
			</div>
			<div className='categories__inner'>
				<div className='categories__item categories__item-1 '>
					<img src={menStyles} alt='' />
				</div>
				<div className='categories__item categories__item-2'>
					<img src={womenStyles} alt='' />
				</div>
				<div className='categories__item categories__item-3'>
					<img src={boyStyles} alt='' />
				</div>
				<div className='categories__item categories__item-4'>
					<img src={girlStyles} alt='girl styles category' />
				</div>
				<div className='categories__item categories__item-5'>
					<img src={watches} alt='' />
				</div>
				<div className='categories__item categories__item-6'>
					<img src={shoe} alt='' />
				</div>
				<div className='categories__item categories__item-7'>
					<img src={babyStyles} alt='' />
				</div>
				<div className='categories__item categories__item-8'>
					<img src={perfumes} alt='' />
				</div>
				<div className='categories__item categories__item-9'>
					<img src={bags} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Categories;
