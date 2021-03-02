import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({
	pages,
	page,
	isAdmin = false,
	keyword = '',
	sizes = '',
}) => {
	return (
		pages > 1 && (
			<Pagination>
				{[...Array(pages).keys()].map((x) => (
					<LinkContainer
						key={x + 1}
						to={
							!isAdmin
								? keyword && !sizes
									? `/shop/search/${keyword}/page/${x + 1}`
									: !keyword && sizes
									? `/shop/page/${x + 1}/?sizes=${sizes}`
									: keyword && sizes
									? `/shop/search/${keyword}/page/${x + 1}/?sizes=${sizes}`
									: `/shop/page/${x + 1}`
								: `/admin/productslist/${x + 1}`
						}>
						<Pagination.Item active={x + 1 === page}> {x + 1} </Pagination.Item>
					</LinkContainer>
				))}
			</Pagination>
		)
	);
};

export default Paginate;
