import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { ContextProvider } from '../context/context';

const CreateUserModal = () => {
	const { show, handleClose, addUser } = useContext(ContextProvider);

	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	return (
		<Modal show={show} onHide={handleClose}>
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
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-1">
						<Form.Label>First name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter first name"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-1">
						<Form.Label>Last name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter last name"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
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
