import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import PriceFilter from './PriceFilter';
import BrandFilter from './BrandFilter';
import ColorFilter from './BrandFilter';

const AccordItem = () => {
	return (
		<div>
			<Accordion defaultActiveKey='0'>
				<CardItem headerText='Brand' eventKey='0'>
					<BrandFilter />
				</CardItem>
				<CardItem headerText='Color' eventKey='1'>
					<ColorFilter />
				</CardItem>
				<CardItem headerText='Price' eventKey='2'>
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
