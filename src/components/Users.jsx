// React
import React, { useContext } from 'react';
// Components
import TableComponent from './Table';
import CreateUserModal from './CreateUserModal';
// Context
import { ContextProvider } from '../context/context';
// Data
import { dataStyles } from '../data/dataContainer';

const Users = () => {
	const { handleShow, users } = useContext(ContextProvider);

	return (
		<div className="container">
			<div className={dataStyles.designBetween}>
				<div>
					<h4>Users</h4>
					<p>Manage your team members and their account permissions here.</p>
					<small>Total number of users: {users?.length}</small>
				</div>
				<button className="button" onClick={() => handleShow('create')}>
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
