import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import TabItem from './TabItem';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: this.props.items,
			active: this.props.active,
			direction: '',
		};
		this.rightClick = this.moveRight.bind(this);
		this.leftClick = this.moveLeft.bind(this);
	}

	generateItems() {
		var items = [];
		var level;
		for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
			var index = i;
			if (i < 0) {
				index = this.state.items.length + i;
			} else if (i >= this.state.items.length) {
				index = i % this.state.items.length;
			}
			level = this.state.active - i;
			items.push(
				<Item
					key={index}
					id={this.state.items[index].id}
					level={level}
					itemDetails={this.state.items[index]}
				/>
			);
		}

		console.log(items);
		return items;
	}

	moveLeft() {
		var newActive = this.state.active;
		newActive--;
		this.setState({
			active: newActive < 0 ? this.state.items.length - 1 : newActive,
			direction: 'left',
		});
	}

	moveRight() {
		var newActive = this.state.active;
		this.setState({
			active: (newActive + 1) % this.state.items.length,
			direction: 'right',
		});
		console.log('active', this.state.active);
	}

	render() {
		return (
			<div id='carousel' className='noselect'>
				<div className='arrow arrow-left' onClick={this.leftClick}>
					<i className='fi-arrow-left'></i>
				</div>
				<CSSTransitionGroup transitionName={this.state.direction}>
					{this.generateItems()}
				</CSSTransitionGroup>
				<div className='arrow arrow-right' onClick={this.rightClick}>
					<i className='fi-arrow-right'></i>
				</div>
			</div>
		);
	}
}

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			level: this.props.level,
			itemDetails: this.props.itemDetails,
		};
	}

	render() {
		const className = 'item level' + this.props.level;
		return (
			// <div className={`item--name ${className}`}>
			// 	<img
			// 		src={this.state.itemDetails.image}
			// 		alt=''
			// 		style={{ width: '100px' }}
			// 	/>
			// </div>
			// <TabItem
			// 	imgSrc1={this.state.itemDetails.image}
			// 	desc1={this.state.itemDetails.desc}
			// />

			<div className={`item--name ${className}`}>
				<h4 className={this.state.itemDetails.desc}>
					{this.state.itemDetails.desc}
				</h4>
				<img
					style={{ width: '100px' }}
					src={this.state.itemDetails.image}
					alt={this.state.itemDetails.desc}
				/>
				{/* <button>Add to Cart</button> */}
			</div>
		);
	}
}

export default Carousel;
