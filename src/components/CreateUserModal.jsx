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

	const handleSubmit = (e) => {
		e.preventDefault();

		addUser(email, firstName, lastName);
	};

	return (
		<Modal show={createModal} onHide={() => handleClose('create')}>
			<Modal.Header closeButton>
				<Modal.Title>Edit User</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
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
					<Form.Group className="mb-1">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<div className="mt-3 d-flex justify-content-end">
						<Button
							variant="secondary"
							onClick={() => handleClose('create')}
							className="mx-2"
						>
							Close
						</Button>
						<Button type="submit" variant="primary">
							Create
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default CreateUserModal;
