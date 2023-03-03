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

	return (
		<ContextProvider.Provider value={{ myInfo, users }}>
			{children}
		</ContextProvider.Provider>
	);
};
