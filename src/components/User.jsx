import React from 'react';
// Libraries
import { useParams } from 'react-router-dom';

const User = () => {
	const { id } = useParams();

	return <div>{id}</div>;
};

export default User;
