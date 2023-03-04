import React, { useContext } from 'react';
// Libraries
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Context
import { ContextProvider } from '../context/context';

const DeleteUserModal = ({ userId }) => {
	const { deleteModal, handleClose, deleteUser, users } =
		useContext(ContextProvider);

	const userHolder = users?.find && users.find((item) => item.id === userId);

	const { first_name, last_name, email, avatar } = userHolder ?? {};

	return (
		<Modal show={deleteModal} onHide={() => handleClose('delete')}>
			<Modal.Header closeButton>
				<Modal.Title>Delete User</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Are you sure you want to delete this user?</p>
				<div className="d-flex align-items-center">
					<img
						src={avatar}
						alt={avatar}
						className="rounded-circle"
						style={{ height: '50px' }}
					/>
					<div className="mx-3">
						<b>{first_name + ' ' + last_name}</b>
						<p>{email}</p>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => handleClose('delete')}>
					Close
				</Button>
				<Button variant="primary" onClick={() => deleteUser(userId)}>
					Delete
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteUserModal;
