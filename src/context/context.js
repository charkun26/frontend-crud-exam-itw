// React
import React, { createContext, useEffect, useState } from 'react';
// Libraries
import axios from 'axios';
// Data
import { myInfo } from '../data/dataContainer';

export const ContextProvider = createContext();

export const ContextParent = ({ children }) => {
	const [users, setUsers] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
		const userId = Math.floor(Math.random() * 10000);

		setUsers((prevState) => [
			...prevState,
			{
				id: userId,
				email: email,
				first_name: firstname,
				last_name: lastname,
			},
		]);

		console.log(users);

		handleClose();
	};

	return (
		<ContextProvider.Provider
			value={{ myInfo, users, show, setShow, handleClose, handleShow, addUser }}
		>
			{children}
		</ContextProvider.Provider>
	);
};
