import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import PriceFilter from './PriceFilter';
import BrandFilter from './BrandFilter';
import ColorFilter from './BrandFilter';
import SizeFilter from './SizeFilter';

const AccordItem = () => {
	return (
		<div>
			<Accordion defaultActiveKey='0'>
				<CardItem headerText='Sizes' eventKey='0'>
					<SizeFilter />
				</CardItem>
				<CardItem headerText='Brand' eventKey='1'>
					<BrandFilter />
				</CardItem>
				<CardItem headerText='Color' eventKey='2'>
					<ColorFilter />
				</CardItem>
				<CardItem headerText='Price' eventKey='3'>
					<PriceFilter />
				</CardItem>
			</Accordion>
		</div>
	);
};

const CardItem = ({ children, headerText, eventKey }) => {
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey={eventKey}>
				{headerText}
			</Accordion.Toggle>
			<Accordion.Collapse eventKey={eventKey}>
				<Card.Body>{children}</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};

export default AccordItem;
