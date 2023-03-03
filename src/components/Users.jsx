// React
import React, { useContext } from 'react';
// Components
import TableComponent from './Table';
import CreateUserModal from './CreateUserModal';
// Context
import { ContextProvider } from '../context/context';

const Users = () => {
	const { handleShow } = useContext(ContextProvider);

	return (
		<div className="container">
			<div className="d-flex align-items-center justify-content-between py-2 border-bottom">
				<div>
					<h4>Users</h4>
					<p>Manage your team members and their account permissions here.</p>
				</div>
				<button className="button" onClick={handleShow}>
					+ create user
				</button>
				<CreateUserModal />
			</div>

			{/* Table component section */}
			<TableComponent />
		</div>
	);
};

export default Users;
