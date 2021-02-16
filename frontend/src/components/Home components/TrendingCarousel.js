import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { LinkContainer } from 'react-router-bootstrap';

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
					active={this.state.active}
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
	}

	render() {
		return (
			<div id='carousel' className='noselect'>
				<div className='arrow arrow-left' onClick={this.leftClick}>
					<i class='far fa-arrow-alt-circle-left'></i>
				</div>
				<CSSTransitionGroup transitionName={this.state.direction}>
					{this.generateItems()}
				</CSSTransitionGroup>
				<div className='arrow arrow-right' onClick={this.rightClick}>
					<i class='far fa-arrow-alt-circle-right'></i>
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
			active: this.props.active,
		};
	}

	render() {
		const className = 'item level' + this.props.level;
		return (
			<LinkContainer
				to={`/products/${this.props.itemDetails.id}`}
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: '5px',
					justifyContent: 'center',
				}}>
				<div
					className={`item--name ${className}`}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}>
					<h4
						className={this.state.itemDetails.desc}
						style={{ color: 'white', fontSize: '1.2rem' }}>
						{this.state.itemDetails.desc}
					</h4>
					<img
						style={{ flex: '1', height: '100px' }}
						src={this.state.itemDetails.image}
						alt={this.state.itemDetails.desc}
					/>
					<button
						style={{
							padding: '7px 15px',
							alignSelf: 'center',
							fontSize: '10px',
							lineHeight: 0,
							borderRadius: '7px',
							width: 'fit-content',
							marginTop: '4px',
						}}>
						<i class='fas fa-eye'></i> DETAILS
					</button>
				</div>
			</LinkContainer>
		);
	}
}

export default Carousel;
