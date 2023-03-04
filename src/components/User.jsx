import React, { useContext } from 'react';
// Libraries
import { useParams } from 'react-router-dom';
import { ContextProvider } from '../context/context';

const User = () => {
	const { id } = useParams();
	const { users } = useContext(ContextProvider);

	const user = users?.find && users.find((item) => item.id === parseInt(id));

	const { first_name, last_name, avatar, email } = user ?? {};

	return (
		<div className="container">
			<h5>User details: </h5>
			<div className="d-flex my-3">
				<img
					src={avatar}
					alt={avatar}
					style={{ height: '75px' }}
					className="rounded-circle"
				/>
				<div className="mx-3">
					<b>{first_name + ' ' + last_name}</b>
					<p>{email}</p>
				</div>
			</div>
		</div>
	);
};

export default User;
