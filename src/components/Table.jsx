// React
import React, { useContext } from 'react';
// Libraries
import Table from 'react-bootstrap/Table';
import { FaTrash } from 'react-icons/fa';
import { BsPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// Context API
import { ContextProvider } from '../context/context';
// Data
import { dataStyles } from '../data/dataContainer';
// Components
import EditUserModal from './EditUserModal';
import DeleteUserModal from './DeleteUserModal';

const TableComponent = () => {
	const { users, handleShow, linkId } = useContext(ContextProvider);

	return (
		<Table striped bordered hover size="sm">
			<thead>
				<tr>
					<th className="text-center">#</th>
					<th>Name</th>
					<th></th>
				</tr>
			</thead>

			<tbody>
				{users &&
					users.map((item) => {
						return (
							<tr key={item.id}>
								<td className="text-center">{item.id}</td>

								<td className="d-flex">
									<img
										src={item.avatar}
										alt={`${item.avatar}`}
										className="rounded-circle mx-2"
										style={{ width: '50px' }}
									/>
									<div>
										<Link
											to={`/user/${item.id}`}
											className={dataStyles.textDeco}
										>
											<small>{item.first_name + ' ' + item.last_name}</small>
											<br></br>
											<small>{item.email}</small>
										</Link>
									</div>
								</td>

								<td>
									<button
										className={dataStyles.button}
										onClick={() => handleShow('edit', item.id)}
									>
										<BsPencilFill />
									</button>

									<button
										className={dataStyles.button}
										onClick={() => handleShow('delete', item.id)}
									>
										<FaTrash />
									</button>
								</td>
							</tr>
						);
					})}
				<EditUserModal id={linkId} />
				<DeleteUserModal id={linkId} />
			</tbody>
		</Table>
	);
};

export default TableComponent;
