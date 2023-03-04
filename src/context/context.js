// React
import React, { createContext, useEffect, useState } from 'react';
// Libraries
import axios from 'axios';
// Data
import { myInfo, dataStyles, alphabeth } from '../data/dataContainer';

export const ContextProvider = createContext();

export const ContextParent = ({ children }) => {
	const [users, setUsers] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [createModal, setCreateShow] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [linkId, setLinkId] = useState(null);

	const handleClose = (action) => {
		if (action === 'create') {
			setCreateShow(false);
		} else if (action === 'edit') {
			setEditModal(false);
		}
	};

	const handleShow = (action, id) => {
		if (action === 'create') {
			setCreateShow(true);
		} else if (action === 'edit') {
			setLinkId(id);
			setEditModal(true);
		}
	};

	// Requesting api
	useEffect(() => {
		axios
			.get(`https://reqres.in/api/users?page=${pageNumber}`)
			.then((res) => {
				setUsers(res.data.data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, []);

	const addUser = (email, firstname, lastname) => {
		var userId = Math.floor(Math.random() * 100);
		var randChar = alphabeth[Math.floor(Math.random() * alphabeth.length)];

		setUsers((prevState) => [
			...prevState,
			{
				id: userId + randChar,
				email: email,
				first_name: firstname,
				last_name: lastname,
				avatar: dataStyles.avatar,
			},
		]);

		setEmail('');
		setFirstName('');
		setLastName('');

		handleClose('create');
	};

	const editUser = (id) => {
		const edit = users.map((item) => {
			if (item.id === id) {
				return {
					...item,
					first_name: firstName,
					last_name: lastName,
					email: email,
				};
			}

			return item;
		});

		setUsers(edit);
		handleClose('edit');
	};

	return (
		<ContextProvider.Provider
			value={{
				linkId,
				editModal,
				editUser,
				myInfo,
				users,
				createModal,
				setCreateShow,
				handleClose,
				handleShow,
				addUser,
				email,
				setEmail,
				firstName,
				setFirstName,
				lastName,
				setLastName,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
