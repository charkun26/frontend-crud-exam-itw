import React, { useContext, useState } from 'react';
// Libraries
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// Context
import { ContextProvider } from '../context/context';

const EditUserModal = ({ userId }) => {
	const {
		editModal,
		handleClose,
		editUser,
		setEmail,
		setFirstName,
		setLastName,
		firstName,
		lastName,
		email,
	} = useContext(ContextProvider);

	const handleSubmit = (e) => {
		e.preventDefault();

		editUser(userId);
	};

	return (
		<Modal show={editModal} onHide={() => handleClose('edit')}>
			<Modal.Header closeButton>
				<Modal.Title>Edit User (Edit)</Modal.Title>
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
							value={firstName}
						/>
					</Form.Group>
					<Form.Group className="mb-1">
						<Form.Label>Last name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter last name"
							required
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
						/>
					</Form.Group>
					<Form.Group className="mb-1">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							required
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</Form.Group>
					<div className="mt-3 d-flex justify-content-end">
						<Button
							variant="secondary"
							onClick={() => handleClose('edit')}
							className="mx-2"
						>
							Close
						</Button>
						<Button type="submit" variant="primary">
							Edit
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default EditUserModal;
