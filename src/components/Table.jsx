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
import Paginate from './Paginate';

const TableComponent = () => {
	const { currentRecords, handleShow, linkId } = useContext(ContextProvider);

	return (
		<>
			{currentRecords?.length === 0 ? (
				<h2 className="text-center mt-5">No user found</h2>
			) : (
				<>
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th className="text-center">#</th>
								<th>Name</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							{currentRecords &&
								currentRecords.map((item) => {
									return (
										<tr key={item.id}>
											<td className="text-center">{item.id}</td>

											<td>
												<Link
													to={`/user/${item.id}`}
													className={`${dataStyles.textDeco} d-flex`}
												>
													<img
														src={item.avatar}
														alt={`${item.avatar}`}
														className="rounded-circle mx-2"
														style={{ width: '50px' }}
													/>
													<div>
														<small>
															{item.first_name + ' ' + item.last_name}
														</small>
														<br></br>
														<small>{item.email}</small>
													</div>
												</Link>
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
						</tbody>
						<EditUserModal userId={linkId} />
						<DeleteUserModal userId={linkId} />
					</Table>
					<Paginate />
				</>
			)}
		</>
	);
};

export default TableComponent;
