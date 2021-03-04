import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation, withRouter } from 'react-router-dom';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
	//Get the queryStrings to access sizes
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}

	let query = useQuery();
	const sizes = query.get('sizes') ? query.get('sizes') : '';
	//console.log(sizes, 'sizessss');

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
									: sizes && !keyword
									? `/shop/page/${x + 1}/?sizes=${sizes}`
									: keyword && sizes
									? `/shop/search/${keyword}/page/${x + 1}?sizes=${sizes}`
									: `/shop/page/${x + 1}`
								: `/admin/productslist/${x + 1}`
						}>
						<Pagination.Item active={x + 1 === page} state={x + 1}>
							{x + 1}
						</Pagination.Item>
					</LinkContainer>
				))}
			</Pagination>
		)
	);
};

export default withRouter(Paginate);
