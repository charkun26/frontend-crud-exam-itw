// React
import React from 'react';
// Components
import TableComponent from './Table';

const Users = () => {
	return (
		<div className="container">
			<div className="d-flex align-items-center justify-content-between py-2 border-bottom">
				<div>
					<h4>Users</h4>
					<p>Manage your team members and their account permissions here.</p>
				</div>
				<button className="button">+ create user</button>
			</div>

			{/* Table component section */}
			<TableComponent />
		</div>
	);
};

export default Users;
