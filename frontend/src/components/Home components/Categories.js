import React from 'react';
import { Image } from 'react-router-bootstrap';

//Import images
import menStyles from '../../Images/cat-man.jpg';
import girlStyles from '../../Images/cat-girl.jpg';
import womenStyles from '../../Images/cat-woman.jpg';
import boyStyles from '../../Images/cat-boy.jpg';
import babyStyles from '../../Images/cat-baby.jpg';
import perfumes from '../../Images/cat-perfumes.jpg';
import bags from '../../Images/cat-bags.jpg';
import watches from '../../Images/cat-watches.jpg';
import shoe from '../../Images/cat-shoe.jpg';

import CategoryItem from './CategoryItem';

const Categories = () => {
	return (
		<div className='section section__categories categories'>
			<div className='categories__desc'>
				<div className='categories__desc-line'></div>
				<h2 className='categories__desc-h2'>Shop by categories</h2>
				<div className='categories__desc-line'></div>
			</div>
			<div className='categories__inner'>
				<CategoryItem catName="Men's" imgSrc={menStyles} itemNo='1' />
				<CategoryItem catName="Women's" imgSrc={womenStyles} itemNo='2' />
				<CategoryItem catName='Little prince' imgSrc={boyStyles} itemNo='3' />
				<CategoryItem
					catName='little Princess'
					imgSrc={girlStyles}
					itemNo='4'
				/>
				<CategoryItem imgSrc={watches} itemNo='5' />
				<CategoryItem imgSrc={shoe} itemNo='6' />
				<CategoryItem imgSrc={babyStyles} itemNo='7' />
				<CategoryItem imgSrc={perfumes} itemNo='8' />
				<CategoryItem imgSrc={bags} itemNo='9' />
			</div>
		</div>
	);
};

export default Categories;
