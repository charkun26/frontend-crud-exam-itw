// React
import React, { useContext } from 'react';

// Libraries
import Table from 'react-bootstrap/Table';
import { FaTrash } from 'react-icons/fa';
import { BsPencilFill } from 'react-icons/bs';
// Context API
import { ContextProvider } from '../context/context';

const TableComponent = () => {
	const { users } = useContext(ContextProvider);

	return (
		<Table striped bordered hover size="sm">
			<thead>
				<tr>
					<th className="text-center">#</th>
					<th>Name</th>
					<th></th>
				</tr>
			</thead>

			{users &&
				users.map((item) => {
					return (
						<tbody>
							<tr>
								<td className="text-center">{item.id}</td>
								<td className="d-flex">
									<img
										src={item.avatar}
										alt={`${item.avatar}`}
										className="rounded-circle mx-2"
										style={{ width: '50px' }}
									/>
									<div>
										<label>{item.first_name + ' ' + item.last_name}</label>
										<br></br>
										<small>{item.email}</small>
									</div>
								</td>

								<td>
									<button className="bg-white p-2 rounded border-0">
										<BsPencilFill style={{ color: '#585858' }} />
									</button>
									<button className="bg-white p-2 rounded border-0 mx-3">
										<FaTrash style={{ color: '#585858' }} />
									</button>
								</td>
							</tr>
						</tbody>
					);
				})}
		</Table>
	);
};

export default TableComponent;
