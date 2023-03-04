import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { ContextProvider } from '../context/context';

const EditUserModal = ({ id }) => {
	const {
		editModal,
		handleClose,
		editUser,
		setEmail,
		setFirstName,
		setLastName,
	} = useContext(ContextProvider);

	return (
		<Modal show={editModal} onHide={() => handleClose('edit')}>
			<Modal.Header closeButton>
				<Modal.Title>Edit User (Edit)</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-1">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-1">
						<Form.Label>First name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter first name"
							required
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-1">
						<Form.Label>Last name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter last name"
							required
							onChange={(e) => setLastName(e.target.value)}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => handleClose('edit')}>
					Close
				</Button>
				<Button variant="primary" onClick={() => editUser(id)}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EditUserModal;
