import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import PriceFilter from './PriceFilter';
import BrandFilter from './BrandFilter';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';
import GenderFilter from './GenderFilter';

const AccordItem = () => {
	return (
		<div>
			<Accordion defaultActiveKey='0'>
				<CardItem headerText='Gender' eventKey='0'>
					<GenderFilter />
				</CardItem>
				<CardItem headerText='Sizes' eventKey='1'>
					<SizeFilter />
				</CardItem>
				<CardItem headerText='Brand' eventKey='2'>
					<BrandFilter />
				</CardItem>
				<CardItem headerText='Color' eventKey='3'>
					<ColorFilter />
				</CardItem>
				<CardItem headerText='Price' eventKey='4'>
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
