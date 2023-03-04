import React from 'react';
import { Link } from 'react-router-dom';
import { dataStyles } from '../data/dataContainer';

const Nav = () => {
	return (
		<div className="container py-3">
			<Link to="/" className={dataStyles.textDeco}>
				<h5 className="fw-bold">ITW Crud Admin</h5>
			</Link>
		</div>
	);
};

export default Nav;
