// React
import React, { createContext, useEffect, useState } from 'react';
// Libraries
import axios from 'axios';
// Data
import { myInfo, dataStyles } from '../data/dataContainer';

export const ContextProvider = createContext();

export const ContextParent = ({ children }) => {
	const [users, setUsers] = useState(null);
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [createModal, setCreateShow] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [linkId, setLinkId] = useState(null);

	// For pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(10);
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const currentRecords =
		users?.slice && users.slice(indexOfFirstRecord, indexOfLastRecord);
	const numberPages = Math.ceil(users?.length / recordsPerPage);

	// Requesting api
	useEffect(() => {
		axios
			.get(`https://reqres.in/api/users?page=1`)
			.then((res) => {
				setUsers(res.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleClose = (action) => {
		if (action === 'create') {
			setCreateShow(false);
		} else if (action === 'edit') {
			setEditModal(false);
		} else if (action === 'delete') {
			setDeleteModal(false);
		}
	};

	const handleShow = (action, id) => {
		if (action === 'create') {
			setCreateShow(true);
		} else if (action === 'edit') {
			setLinkId(id);
			setEditModal(true);

			const user = users?.find && users.find((item) => item.id === id);
			const { first_name, last_name, email } = user ?? {};

			setFirstName(first_name);
			setLastName(last_name);
			setEmail(email);
		} else if (action === 'delete') {
			setLinkId(id);
			setDeleteModal(true);
		}
	};

	const addUser = (email, firstname, lastname) => {
		axios
			.post('https://reqres.in/api/users', {
				email: email,
				first_name: firstname,
				last_name: lastname,
				avatar: dataStyles.avatar,
			})
			.then((response) => {
				setUsers((prevState) => [
					{
						id: parseInt(response.data.id),
						email: email,
						first_name: firstname,
						last_name: lastname,
						avatar: dataStyles.avatar,
					},
					...prevState,
				]);
			})
			.catch((error) => {
				console.log(error);
			});

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

		setEmail('');
		setFirstName('');
		setLastName('');
		setUsers(edit);
		handleClose('edit');
	};

	const deleteUser = (id) => {
		const edit = users.filter((item) => item.id !== id);

		setUsers(edit);
		handleClose('delete');
	};

	const nextPage = () => {
		if (currentPage !== numberPages) setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

	return (
		<ContextProvider.Provider
			value={{
				currentRecords,
				nextPage,
				prevPage,
				deleteModal,
				deleteUser,
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
				currentPage,
				setCurrentPage,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
