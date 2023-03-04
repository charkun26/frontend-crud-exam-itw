import React, { useContext } from 'react';
import { ContextProvider } from '../context/context';

const Paginate = () => {
	const { nextPage, prevPage } = useContext(ContextProvider);

	return (
		<ul className="pagination justify-content-center">
			<li>
				<button className="button" onClick={prevPage}>
					Prev
				</button>
			</li>
			<li className="mx-3">
				<button className="button" onClick={nextPage}>
					Next
				</button>
			</li>
		</ul>
	);
};

export default Paginate;
