import React, { useContext, useState } from 'react';
// Libraries
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// Context
import { ContextProvider } from '../context/context';

const CreateUserModal = () => {
	const {
		createModal,
		handleClose,
		addUser,
		email,
		setEmail,
		firstName,
		setFirstName,
		lastName,
		setLastName,
	} = useContext(ContextProvider);

	return (
		<Modal show={createModal} onHide={() => handleClose('create')}>
			<Modal.Header closeButton>
				<Modal.Title>Edit User</Modal.Title>
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
				<Button variant="secondary" onClick={() => handleClose('create')}>
					Close
				</Button>
				<Button
					variant="primary"
					onClick={() => addUser(email, firstName, lastName)}
				>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateUserModal;
