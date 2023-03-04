import React, { useContext } from 'react';
// Libraries
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Context
import { ContextProvider } from '../context/context';

const DeleteUserModal = ({ id }) => {
	const { deleteModal, handleClose, deleteUser, users } =
		useContext(ContextProvider);

	const userHolder = users?.filter && users.filter((item) => item.id === id);

	return (
		<Modal show={deleteModal} onHide={() => handleClose('delete')}>
			<Modal.Header closeButton>
				<Modal.Title>Delete User</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Are you sure you want to delete this user?</p>
				{userHolder?.map &&
					userHolder.map((item) => {
						return (
							<div key={item.id}>
								<p>{item.first_name + ' ' + item.last_name}</p>
								<p>{item.email}</p>
							</div>
						);
					})}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => handleClose('delete')}>
					Close
				</Button>
				<Button variant="primary" onClick={() => deleteUser(id)}>
					Delete
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteUserModal;
